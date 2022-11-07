

//main cont3 box 객체 생성 
let listdata = [
    {
        imgsrc:"/portimg/cont3.jpg",
        title:"Jin yul jae",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/portimg/cont3-2.jpg",
        title:"Love ya",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/portimg/cont3-3.jpg",
        title:"한림우주(翰林宇宙)",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/portimg/cont3-4.jpg",
        title:"대기만성(大器晩成)",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/portimg/cont3-5.jpg",
        title:"Geumma House",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/portimg/cont3-6.jpg",
        title:"적재(赤齋)",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/portimg/cont3-7.jpg",
        title:"Cheongdo House",
        address:"123 Kathal St.Tampa City",
        bed:"3 Beds",
        bath:"2 Baths",
        sq:"sqft"
    },
    {
        imgsrc:"/portimg/cont3-8.jpg",
        title:" Starry Village",
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
