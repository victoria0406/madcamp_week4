const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //mongoDB 연결 위함

require("dotenv").config();

const app = express();
const port = process.env.PORT || 80; // .env파일에서 포트를 가져오거나 5000번을 사용

app.use(cors()); // cors 미들웨어 사용
app.use(express.json());

app.listen(port, () => {
  // 해당 포트로 서버가 실행되고 있을 때 실행됨
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => res.send("Hello World! 안녕하세요"));

const uri = process.env.ATLAS_URI; // mongoDB uri를 .env에서 불러온다. (보안상의 이유로 .env에 저장)
mongoose
  .connect(
    uri,
    {} // 새로운 정보 추가 / 변경이 일어날 때마다 적용되는 mongoDB 설정
  )
  .then((res) => console.log("Connected to DB")) // mongoDB 연결 확인
  .catch((err) => console.log(err)); // 에러 처리 (안해주면 Warning)

const connection = mongoose.connection; // mongoDB 연결 확인
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.post("/register", (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  // 정보 저장, 에러 시 json 형식으로 전달
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});
