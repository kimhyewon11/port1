//main cont3 box 객체 생성
let listdata = [
    {
        imgsrc:"/img/ho2.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/img/ho3.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/img/ho4.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/img/ho5.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/img/ho6.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/img/ho7.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/img/ho8.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/img/ho9.jpg",
        title:"Luxury Villa",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
]

let viewWrap = document.querySelector(".view");
let box = "";

listdata.forEach(function(el){
    box += ` <div class="s_box">
                    <img src="${el.imgsrc}">
                    <p class="s_title">${el.title}</p>
                    <p class="s_address">${el.address}</p>
                    <div class="room">
                        <p>${el.bed}</p>
                        <p>${el.bath}</p>
                        <p>980 ${el.sq}</p>
                    </div>
                </div>`
});

viewWrap.innerHTML = box;

//cont3 slide 
const view = document.querySelector(".view");
const sbox = document.querySelectorAll(".s_box");
const circlebtn = document.querySelectorAll(".cir")

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
        view.style.marginLeft = -100* index+"%";
    })
});


//cont4
let placeWrap = document.querySelector(".placeWrap");
let list = "";

let placelist = [
    {
        placename :"Florida",
        properties:"14",
        src:"/img/place1.jpg"
    },
    {
        placename :"California",
        properties:"98",
        src:"/img/place2.jpg"
    },
    {
        placename :"New York",
        properties:"98",
        src:"/img/place3.jpg"
    },
    {
        placename :"BietNam ",
        properties:"80",
        src:"/img/place5.jpg"
    },
    {
        placename :"London",
        properties:"70",
        src:"/img/place4.jpg"
    },
]

    placelist.forEach(function(item,index){
        list += 
        `
        <div class="place">
                <img src=${item.src}>
                <div class="placetextwrap">
                    <p class="p_name">${item.placename}</p>
                    <p class="properties">${item.properties} Properties</p>
                </div>
            </div>
        `
    });

    placeWrap.innerHTML = list;
