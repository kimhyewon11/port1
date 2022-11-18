
//cont3 더보기 기능
let readMore =document.querySelector(".readMore");
let box = document.querySelectorAll(".chooseBoxes > .box")
let startIndex = 3;

readMore.addEventListener("click",function(e){
    e.preventDefault();
    for(let i = startIndex ; i < startIndex +3 ; i ++){
        box[i].style.display = "flex";
    }

    startIndex = startIndex + 3;

    if(startIndex >= box.length){
        readMore.style.display="none";
    }
    else {
        readMore.style.display = " block";
    }
});



//cont4 슬라이드 기능 
const view = document.querySelector(".view");
const circlebtn = document.querySelectorAll(".cir");

console.log(circlebtn);
let count = 0;

//슬라이드 2초마다 넘어감
let slide = setInterval(function(){
    nextSlide();
},2000);

//마우스 올리면 멈춤 
view.addEventListener("mouseenter",function(){
    clearInterval(slide);
});

view.addEventListener("mouseleave",function(){
    slide = setInterval(function(){
        nextSlide();
    },2000);
});


//슬라이드 넘어가는 함수 생성 
function nextSlide(){
    if(count == circlebtn.length -1){
        count= 0;
    }
    else{
        count++
    }
    circlebtn.forEach(function(e,index){
        e.classList.remove("on");
    });
    circlebtn[count].classList.add("on");
    view.style.marginLeft = -100 * count +"%";
}

circlebtn.forEach(function(el,index){
    el.addEventListener("click",function(){
        circlebtn.forEach(function(e,index){
            e.classList.remove("on");
        });
        el.classList.add("on");
        view.style.marginLeft = -100 *index+"%";
    })
});