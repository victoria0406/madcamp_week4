const mongoose = require("mongoose");
const bcrypt = require('bcrypt') 
const saltRounds = 10 //salting round : 기존 salt를 적용해서 나온 결과에 동일한 salt를 붙이는 반복 횟수

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 스페이스와 같은 공백을 없애주는 역할
    unique: 1, // 똑같은 이메일을 쓰지 못하도록
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
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


const User = mongoose.model("User", userSchema);

module.exports = { User };
