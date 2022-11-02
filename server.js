const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const moment = require("moment");
const port = process.env.PORT || 8000;
const multer  = require('multer') ; // 파일업로드 라이브러리 multer

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
    
    db.collection("port1_join").findOne({joinid:req.body.useremail},function(err,result){
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
    res.render("mypage",{userdata:req.user});
});

app.post("/myupdate",function(req,res){
    if(req.body.prepass === req.user.joinpass){
        db.collection("port1_join").updateOne({joinemail:req.user.joinemail},{$set:{
            joinpass:req.body.uptpass,
            jointitle:req.body.title,
            joinphone:req.body.phone
        }},function(err,result){
            res.send("<script>alert('마이페이지 수정 완료'); location.href='/'; </script>",)
        });
    }
    else { 
        res.send("<script>alert('기존 비번과 일치하지 않음'); location.href='/mypage'; </script>")
    }
});



app.get("/blog",function(req,res){
    res.render("blog",{userdata:req.user});
});
app.get("/brdinsert",function(req,res){
    res.render("brdinsert",{userdata:req.user});
});



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8'));// = 이후 --> 한글로 된 파일이름 그대로 인식하는 코드
}
  });
  
  const upload = multer({ storage: storage });


app.post("/add",upload.single('filetest'),function(req,res){
    let times = moment().format("YYYY.MM.DD");

    db.collection("port1_count").findOne({name:"게시판"},function(err,result){
        db.collection("port1_board").insertOne({
            brdid:result.boardcount+1,
            brdname:req.body.name,
            brdtitle:req.body.subject,
            brdemail:req.body.email,
            brdcontext:req.body.msg,
            brdnumber:req.body.number,
            brddate : times,
            brdfile:req.file.originalname
        },function(err,result){
            db.collection("port1_count").updateOne({name:"게시판"},{$inc:{boardcount:1}},function(err,result){
                res.redirect("/brdlist");
            });
        });
    });
})


app.get("/brddetail/:no",function(req,res){
    db.collection("port1_board").findOne({brdid:Number(req.params.no)},function(err,result){
        res.render("brddetail",{brddata:result,userdata:req.user});
    });
});


app.get("/brdlist",function(req,res){
    db.collection("port1_board").find().toArray(function(err,result){
        res.render("brdlist",{brddata:result,userdata:req.user});
    })
});

//게시글 검색 기능
app.get("/search",function(req,res){
    let test = [
        {
          $search: {
            index: "searchport1",
            text: {
              query: req.query.searchResult,
              path: req.query.searchCategory
            }
          }
        },
        {
            $sort:{brdid:1 }
        },
      ]

      db.collection("port1_board").aggregate(test).toArray(function(err,result){
        res.render("brdlist",{brddata:result,userdata:req.user});
     });
});



app.get("/brduptview/:no",upload.single('filetest'),function(req,res){
    db.collection("port1_board").findOne({brdid:Number(req.params.no)},function(err,result){
        res.render("brdupdateview",{brddata:result,userdata:req.user});
    })
});

//수정한 데이터 post요청으로 db에 생성
app.post("/update",upload.single('filetest'),function(req,res){
    db.collection("port1_board").updateOne({brdid:Number(req.body.id)},{$set:{
        brdtitle:req.body.subject,
        brdname:req.body.name,
        brdcontext:req.body.msg,
        brdemail:req.body.email,
        brdnumber:req.body.number,
        brdfile:req.file.originalname
    }},function(err,result){
        res.redirect("/brddetail/"+req.body.id);
    });
});

app.get("/delete/:no",function(req,res){    
    //데이터베이스에 접근해서 ex6_board에 해당 게시글 번호에 객체만 지움. 
    db.collection("port1_board").deleteOne({brdid:Number(req.params.no)},function(err,result){
        res.redirect("/brdlist");//데이터 삭제후 게시글 목록페이지로 이동
    });
});