


//main _ cont4 (배열 객체 이용해서 데이터값 넣어 주기)
let placeWrap = document.querySelector(".placeWrap");
let list = "";

let placelist = [
    {
        placename :"Mijang-6 Residence",
        properties:"14",
        src:"/portimg/cont4-1.jpg",
        delay:"100"
    },
    {
        placename :"Geochang Residence",
        properties:"98",
        src:"/portimg/cont4-2.jpg",
        delay:"200"
    },
    {
        placename :"Damyang Residence",
        properties:"98",
        src:"/portimg/cont4-3.jpg",
        delay:"300"
    },
    {
        placename :"Cheongdo Residence ",
        properties:"80",
        src:"/portimg/cont4-4.jpg",
        delay:"400"
    },
    {
        placename :"Hampyeong Residence",
        properties:"70",
        src:"/portimg/cont4-7.jpg",
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

    