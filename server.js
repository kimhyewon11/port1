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
    res.render("index");
});
app.get("/intro",function(req,res){
    res.render("intro");
});
app.get("/join",function(req,res){
    res.render("join");
});
app.get("/login",function(req,res){
    res.render("login");
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