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
