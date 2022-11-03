const joinbtn = document.querySelector("#joinbtn");
const users = document.querySelectorAll(".users");
 
const cancelbtn = document.querySelector("#cancelbtn") ;

cancelbtn.addEventListener("click",function(){
    location.href="/";
});

//정규 표현식 배열에 객체형태로 담기 
let datalist = [
    {
        regexCheck:/^[ㄱ-힣]{2,4}$/,
        okMessage:"이름 제대로 입력하였음",
        noMessage:"2-4자리까지 한글만 가능합니다.",
        yesOrno: false
    },
    {
        regexCheck:/^[\w]+\@+[a-z]+\.[a-z]{2,3}$/,
        okMessage:"이메일 제대로 입력하였음",
        noMessage:"이메일 형식에 맞게 입력하세요" ,
        yesOrno: false
    },
    {
        regexCheck:/^[\w\#\$\!\*]{8,10}$/,
        okMessage:"비밀번호 제대로 입력하였음",
        noMessage:"4자리부터 6자리까지 영문,숫자,_,#$!*만 가능합니다." ,
        yesOrno: false
    }
]

let lastChk = false;

    //키보드 이벤트 
    users.forEach(function(e,index){
        e.addEventListener("keyup",function(){
            inputChk(e,datalist[index]);
        })
    });

    //inputchk 함수 정의 
    function inputChk (tag,data) {
        let values = tag.value;
        let chkComp = data.regexCheck.test(values);

        if(chkComp){
            tag.nextElementSibling.innerHTML =data.okMessage;
            tag.nextElementSibling.style.color ="green";
            data.yesOrno = true;
        }
        else{
            tag.nextElementSibling.innerHTML =data.noMessage;
            tag.nextElementSibling.style.color ="red";
            data.yesOrno = false;
        }
    }

    joinbtn.addEventListener("click",function(e){
        lastChk = datalist.every(element => element.yesOrno == true);
        if(lastChk){
            
        }
        else { 
            alert("모든 항목 형식에 맞는지 확인하세요")
            e.preventDefault();
        }
    });


