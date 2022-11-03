


//main _ cont4 (배열 객체 이용해서 데이터값 넣어 주기)
let placeWrap = document.querySelector(".placeWrap");
let list = "";

let placelist = [
    {
        placename :"Florida",
        properties:"14",
        src:"/img/place1.jpg",
        delay:"100"
    },
    {
        placename :"California",
        properties:"98",
        src:"/img/place2.jpg",
        delay:"200"
    },
    {
        placename :"New York",
        properties:"98",
        src:"/img/place3.jpg",
        delay:"300"
    },
    {
        placename :"BietNam ",
        properties:"80",
        src:"/img/place5.jpg",
        delay:"400"
    },
    {
        placename :"London",
        properties:"70",
        src:"/img/place4.jpg",
        delay:"500"
    },
]

    placelist.forEach(function(item,index){
        list += 
        `
        <div  data-aos="fade-up" data-aos-delay="${item.delay}" data-aos-duration="1000"  class="place">
                <img src=${item.src}>
                <div class="placetextwrap">
                    <p class="p_name">${item.placename}</p>
                    <p class="properties">${item.properties} Properties</p>
                </div>
            </div>
        `
    });

    placeWrap.innerHTML = list;

    