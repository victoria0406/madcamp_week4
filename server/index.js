const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //Mongo DB
const { User } = require('./models/User'); //User 스키마 import

require("dotenv").config();

const app = express();
const port = process.env.PORT || 80; // .env파일에서 포트를 가져오거나 포트 80 사용함.

app.use(cors()); // cors 미들웨어 사용
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World! 안녕하세요"));

const uri = process.env.ATLAS_URI; //env에서 uri를 불러옴
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
  console.log("I got POST requset : register");
  const user = new User(req.body);

  // 정보 저장, 에러 시 json 형식으로 전달
  user.save((err, userInfo) => {
    if (err) {
      console.log("false!!");
      //에러가 날 경우 에러 핸들링 해주기 -> 중복된 이메일인지!
      console.log(req.body);
      return res.json({ success: false, err });
    }
    console.log("Register Success!!");
    return res.status(200).json({
      success: true,
      userId: user._id
    });
  });
});

app.post('/api/users/login', (req, res) => {
  // 요청된 이메일을 데이터베이스에서 있는지 찾는다
  console.log("I got POST requset : login");
  User.findOne({email: req.body.email}, (err, user) => {
      if(!user) {
          return res.json({
              loginSuccess: false,
              message: "wrong email"
          })
      }
      // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인
      user.comparePassword(req.body.password, (err, isMatch) => {
          if(!isMatch) 
              return res.json({loginSuccess: false, message: "wrong passwd"
          })

          // 비밀번호까지 맞다면 토큰을 생성
          user.generateToken((err, user) => {
              if(err) return res.status(400).send(err);
              
              // 정상적일 경우 토큰을 쿠키나 로컬스토리지 등에 저장 -> 그러나 이번에는 로컬스토리지에 저장할 계획이다!
              res.status(200).json({loginSuccess: true, userId: user._id})

          })
      })
  })
})

//유저 데이터 조회용
app.get('/users/:id', (req,res) => { 
  console.log("I got GET requset : find");
  const id = parseInt(req.params.id, 10) // 10 진수로 변환

  if (Number.isNaN(id)){
    return res.status(400).end()
  }
  User.findOne({id: req.params.id} , (err, user) => {
    if (!user){
      return res.status(404).end()
    }
    res.json(user.name)
  })
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);  
});