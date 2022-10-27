
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
