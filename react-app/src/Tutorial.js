import React, { useState } from "react";
import "./styles/tutorial.css";

let randomText = [
  "나는 카드사에서 근무하는 직원이다",
  "나는 1년 동안 월급을 현금이 아닌 회사 포인트로 받게 됐다",
  "회사 이벤트를 회장의 SNS보다 먼저 회사 홈페이지에 올린 게 화근이었다",
  "SNS 중독자인 회장은 나에게 포인트 급여라는 상상도 못할 조치를 내렸다",
  "나는 고민에 빠졌다",
  "어떻게든 살아가기 위해 생각한 방안은 당근마켓을 이용하는 거였다",
  "포인트로 사내 복지스토어에서 가전제품 등을 산 다음, 당근마켓에 팔아치우는 방법이다",
  "지금까지는 어떻게든 잘 버텼다",
  "이제 남은 기간은 2주, 잘 버틸 수 있을까",
];

const Tutorial = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState(randomText[0]);
  const [isOpenPopup, setIsOpenPopup] = useState(true);

  function go_next() {
    setCount(count + 1);
    setText(randomText[count]);

    if (count == randomText.length) {
      setIsOpenPopup(false);
    }
  }

  return (
    <>
      {isOpenPopup ? (
        <div className="tutorial_box">
          <div className="tutorial_text">
            <p className="tutorial_line">{text}</p>
            <button
              onClick={() => {
                go_next();
              }}
              id="tutorial_next"
            >
              {count == randomText.length ? "시작하기" : "다음"}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Tutorial;
