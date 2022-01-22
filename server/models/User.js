const mongoose = require("mongoose");
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')
const { JsonWebTokenError } = require('jsonwebtoken')
const saltRounds = 10 //salting round : 기존 salt를 적용해서 나온 결과에 동일한 salt를 붙이는 반복 횟수

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 스페이스와 같은 공백을 없애주는 역할
    unique: 1, // 똑같은 이메일을 쓰지 못하도록 해준다. Error Handling!
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  money :{
    type: Number,
    defalut : 0,
  },
  day : {
    type: Number,
    default : 1,
  },
  point : {
    type: Number,
    defalut : 3000000,
  },
  item_list:{
    type: Array,
    defalut : [0,0,0,0,0],
  },
  role: {
    type: Number,
    default: 0,
  },
  
  image: String,
  token: { type: String },
  tokenExp: { type: Number },
});

//암호화 하기 -> Bcrypt 사용하기
userSchema.pre('save', function(next){
  var user = this;
  // salt를 이용해서 비밀번호 암호화한 후 보내줌 (비밀번호와 관련될 때만)
  if(user.isModified('password')) {
      bcrypt.genSalt(saltRounds, function(err, salt) {
          if(err) return next(err)
          bcrypt.hash(user.password, salt, function(err, hash) {
              if(err) return next(err)
              user.password = hash
              next()
          })
      })
  } else { // 그 외에는 그냥 내보냄
      next()
  }
})

// 몽구스 메서드 생성 (methods) -> 인스턴스 메소드
// 로그인 - 비밀번호 비교 
userSchema.methods.comparePassword = function(plainPassword, cb) {
  // 입력된 비밀번호와 데이터베이스에 있는 암호화된 비밀번호가 같은지 확인(비교) -> 평문을 암호화해서 비교
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
      if(err) return cb(err) // cb(callback) => err
      cb(null, isMatch) /// err은 null, isMatch는 true를 반환!
  })
}


// 몽구스 메서드 생성 (methods) -> 인스턴스 메소드
// 로그인 시 토큰 생성
userSchema.methods.generateToken = function(cb) {
  var user = this;  // 만들어진 인스턴스를 user 변수에 저장

  // jsonwebtoken을 이용해서 토큰 생성
  // user._id는 db에 이미 저장된 _id
  var token = jwt.sign(user._id.toHexString(), 'secretToken')

  // user._id + 'secretToken' = token 을 통해 토큰 생성
  // 토큰 해석을 위해 'secretToken' 입력 -> user._id 가 나옴
  // 토큰을 가지고 누구인지 알 수 있다!
  user.token = token

  user.save(function(err, user) {
      if(err) return cb(err) //토큰을 디비에 저장~
      cb(null, user)
  })
}

// 몽구스 메서드 생성 (statics)
// 인증 시 토큰과 디비의 토큰을 복호화하여 비교
userSchema.statics.findByToken = function(token, cb) {
  var user = this;

  jwt.verify(token, 'secretToken', function(err, decoded) {
      // 유저 아이디를 이용해서 유저를 찾은 다음에
      // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
      user.findOne({"_id": decoded, "token": token}, function(err, user) {
          if(err) return cb(err);
          cb(null, user)
      })
  })
}

const User = mongoose.model("User", userSchema);

module.exports = { User };
