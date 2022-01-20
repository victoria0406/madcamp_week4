import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.css";

const BASE_URL = "http://192.249.18.165:443";

const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLogin, setIsLogin] = useState(false); //로그인 상태 관리용
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const [isCorrect, setIsCorrect] = useState(""); //아이디, 비밀번호 확인용

  //입력할때 이메일이랑 패스워드 설정
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "nickname") {
      setNickname(value);
    }
  };

  //onSubmit 함수다. create account라고 되어 있으면 계정을 생성한다. 백엔드와 연결
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        axios
          .post(BASE_URL + "/account/signup", {
            email: email,
            nickname: nickname,
            password: password,
          })
          .then((response) => {
            console.log(response);
            // 유저의 레터 스페이스로 보내줘야 함.
            sessionStorage.setItem("user_id", response.data); //유저 id를 session storage에 저장
            document.location.href = `mypage/${response.data}`; // 내 페이지로 이동! -> 아이디 나중에 넣기
          })
          .catch((error) => {
            console.log("signup errror!" + error);
          });
      } else {
        console.log(email, password);
        //log in
        axios
          .post(BASE_URL + "/account/login", {
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
            switch (response.data) {
              case "wrong passwd":
                console.log("wrong passwd");
                setIsCorrect("wrongPW"); //하단에 비번 틀렸다고 표시
                break;
              case "wrong email":
                console.log("wrong email");
                setIsCorrect("wrongEM"); //하단에 이메일 틀렸다고 표시
                break;
              default:
                //response.data에 user의 id가 넘겨져 옴.
                console.log(response.data);
                //localStorage??
                sessionStorage.setItem("user_id", response.data); //유저 id를 session storage에 저장
                setIsCorrect("correct");
                document.location.href = `mypage/${response.data}`; // 내 페이지로 이동! -> 나중에 아이디 넣어서 특정 페이지로.
                break;
            }
          })
          .catch((error) => {
            console.log("login errror!" + error);
          });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev); //create Account와 Sign in이 바뀌게 만드는 변수. True&False를 바꿔줘서 계정 생성

  return (
    <>
    <div className="wrapWelcome">
    <div>
      <p className="welcomeTxt"> {newAccount ? "회원가입" : "로그인"} </p>
    </div>
    <form onSubmit={onSubmit} className="welcomeContainer">
    {newAccount ? (    
    <input
        name="nickname"
        type="nickname"
        placeholder="nickname"
        required
        value={nickname}
        onChange={onChange}
        className="authInput"
        autoComplete="off"
      />): <div className="login_subment">{newAccount? "": "로그인을 안하면 소중한 돈이 사라져요!!"}</div>}
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={email}
        className="authInput"
        onChange={onChange}
        autoComplete="off"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        value={password}
        className="authInput"
        onChange={onChange}
        autoComplete="off"
      />
      <input
        type="submit"
        className="authInput authSubmit"
        value={newAccount ? "Create Account" : "Sign In"}
      />
       {error && <span className="authError">{error}</span>}
    </form>

        <span className="authError">
          {isCorrect == "wrongPW" ? "비밀번호가 틀렸습니다" : ""}
          {isCorrect == "wrongEM" ? "등록되지 않은 이메일입니다" : ""}
        </span>

        <span onClick={toggleAccount} className="authSwitch">
          {newAccount ? "가입하기" : "회원가입"}
        </span>

        {/*<div className="authBtns">
        <button name="google"  className="authBtn">
          Continue with Google
        </button>
        <button name="github"  className="authBtn">
          Continue with Github
        </button>
      </div>
    */}
      </div>
    </>
  );
};

export default Login;