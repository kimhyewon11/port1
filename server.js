const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const moment = require("moment");
const port = process.env.PORT || 8000;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const { render } = require("ejs");
const app = express();


app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(session({secret : 'secret', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());


let db;



MongoClient.connect("mongodb+srv://admin:qwer1234@testdb.mopkvcj.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("testdb");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("서버연결 성공");
    });

});

app.get("/",function(req,res){
    res.render("index",{userdata:req.user});
});
app.get("/intro",function(req,res){
    res.render("intro",{userdata:req.user});
});
app.get("/join",function(req,res){
    res.render("join",{userdata:req.user});
});


app.post("/memberjoin",function(req,res){
    res.render("join");
    db.collection("port1_join").findOne({joinid:req.body.id},function(err,result){
        if(result){
            res.send("<script>alert('이미 가입된 아이디 입니다'); location.href='/join' </script>")
        }
        else { 
            db.collection("port1_count").findOne({name:"회원정보"},function(err,result){
                db.collection("port1_join").insertOne({
                    joinno:result.joincount+1,
                    joinname:req.body.username,
                    joinemail:req.body.useremail,
                    joinpass:req.body.userpass,
                },function(err,result){
                    db.collection("port1_count").updateOne({name:"회원정보"},{$inc:{joincount:1}},function(err,result){
                        res.send("<script>alert('회원가입'); location.href='/login' </script>")
                    });
                });
            });
        }
    });
});
app.get("/login",function(req,res){
    res.render("login",{userdata:req.user});
});

app.post("/memberlogin",passport.authenticate('local', {failureRedirect : '/fail'}),
function(req,res){
    res.redirect("/");
});


passport.use(new LocalStrategy({
    usernameField: 'useremail',//login.ejs 에서 입력한 아이디의 name 값
    passwordField: 'userpass', //login.ejs 에서 입력한 비밀번호의 name 값
    session: true, //세션 이용할 것입니까 ?
    passReqToCallback: false, //아이디와 비번 말고도 다른항목들 더 검사할 것인지 여부 
  }, function (useremail, userpass, done) { //userid userpass 는 입력한 input 값 담는 변수 (작명가능)
    console.log(useremail,userpass)
    db.collection('port1_join').findOne({ joinemail: useremail }, function (err, result) {
      if (err) return done(err)
  
      if (!result) return done(null, false, { message: '존재하지않는 아이디' })
      if (userpass== result.joinpass) {
        return done(null, result)
      } else {
        return done(null, false, { message: '비밀번호 틀림' })
      }
    })
  }));

  //데이터베이스에 있는 아이디와 비번이 일치하면 
  //세션을 생성하고 해당 아이디와 비번을 기록하여 저장하는 작업
  passport.serializeUser(function (user, done) {
    done(null, user.joinemail) //데이터 베이스에 있는 아이디가 저장되어있는 프로퍼티 명 기술 
  });



  passport.deserializeUser(function (joinemail, done) { 
    //데이터베이스에 있는 로그인 했을 때 아이디만 불러와서
    // 다른 페이지에서도 세션을 사용할 수 있도록 처리 
    // done(null, {}) -- 다른 페이지에도 사용할 수 있도록 만든 함수
    db.collection("port1_join").findOne({joinemail:joinemail},function(err,result){
        done(null,result); //데이터베이스에서 가지고온 아이디를 세션에 넣어서 다른페이지들에 전달 
    })
  });

  app.get("/logout",function(req,res){
    req.session.destroy(function(err){
        res.clearCookie("connect.sid");
        res.redirect("/");
    })
});



app.get("/mypage",function(req,res){
    res.render("mypage");
});
app.get("/blog",function(req,res){
    res.render("blog");
});
app.get("/brdinsert",function(req,res){
    res.render("brdinsert");
});
app.get("/brddetail",function(req,res){
    res.render("brddetail");
});
app.get("/brdlist",function(req,res){
    res.render("brdlist");
});
app.get("/brduptview",function(req,res){
    res.render("brdupdateview");
});