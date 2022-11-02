


//카운트업 함수 정의
function countUp (increase,sel,desti,speed){
    moveChk = false;
    let num = 0;
    let desChange = "";

    let autoCount = setInterval(function(){
        num += increase ;
        document.querySelector(sel).innerHTML = num;

        if (num >= desti){
            clearInterval(autoCount);
            desChange = desti;
            document.querySelector(sel).innerHTML = desChange;
        }
    },speed);
}

//스크롤 이벤트 구간 
let cont5Start = document.querySelector(".main_cont5").offsetTop;
let moveChk = true;


window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    console.log(cont5Start)
    if(scTop >= cont5Start ){
        if(moveChk == true){
            countValue.forEach(function(e){
                countUp(
                    e.plus,
                    e.tag,
                    e.complete,
                    e.loop
                )
            });
        }
    }
});




let countValue = [
    {
        plus:30,
        tag:".count1",
        complete:967,
        loop:20
    },
    {
        plus:70,
        tag:".count2",
        complete:1276,
        loop:25
    },
    {
        plus:15,
        tag:".count3",
        complete:396,
        loop:15
    },
    {
        plus:10,
        tag:".count4",
        complete:177,
        loop:5
    },
    
]