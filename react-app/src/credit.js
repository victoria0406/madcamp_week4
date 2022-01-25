import React, { Component } from "react";
import Menu from "./menu_bar";
import "./styles/ending.css";

function Credit() {
  return (
    <div>
      <div className="credit_text">
        소설 "일의 기쁨과 슬픔" 에 영향을 받아 만든 웹 게임입니다.
        <div className="cradit_maker">
          <div>제작</div>
          <div>
            <div>박도윤</div>
            <div
              className="github"
              onClick={() =>
                window.open("https://github.com/victoria0406", "_blank")
              }
            />
          </div>
          <div>
            <div>배설영</div>
            <div
              className="github"
              onClick={() => window.open("https://github.com/pell13", "_blank")}
            />
          </div>
          <div>
            <div>윤정인</div>
            <div
              className="github"
              onClick={() =>
                window.open("https://github.com/JeongIn37", "_blank")
              }
            />
          </div>
        </div>
        <div
          className="buy_book"
          onClick={() =>
            window.open(
              "https://book.naver.com/bookdb/book_detail.nhn?bid=15652973",
              "_blank"
            )
          }
        >
          책 사러 가기{" "}
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Credit;
