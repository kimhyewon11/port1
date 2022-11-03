//main_cont1 슬라이드 기능
const mainview = document.querySelector(".mainview");
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");

let count1 = 0;
nextbtn.addEventListener("click",function(){
    nextSlides();
});
prevbtn.addEventListener("click",function(){
    prevSlides();
});



//슬라이드 2초마다 넘어감
let slides = setInterval(function(){
    nextSlides();
},2000);

//마우스 올리면 멈춤 
mainview.addEventListener("mouseenter",function(){
    clearInterval(slides);
});

mainview.addEventListener("mouseleave",function(){
    slides = setInterval(function(){
        nextSlides();
    },2000);
});


//슬라이드 넘어가는 함수 생성 
function nextSlides(){
    if(count1 == 2){
        count1= 0;
    }
    else{
        count1++
    }
    
    mainview.style.marginLeft = -100 * count1 +"%";
}

//슬라이드 이전 함수 
function prevSlides(){
    if(count1 == 0){
        count1= 2;
    }
    else{
        count1--
    }
    
    mainview.style.marginLeft = -100 * count1 +"%";
}




