let personboxWrap =document.querySelector('.personboxWrap')
let person = "";

let personlist = [
    {
        src:"/img/person1.jpg",
        pName:"Maria Blank",
        pJob:"Office Manager",
    },
    {
        src:"/img/person2.jpg",
        pName:"Karen Paran",
        pJob:"Support Manager",
    },
    {
        src:"/img/person3.jpg",
        pName:"Martin Smith",
        pJob:"Web Developer",
    },
    {
        src:"/img/person4.jpg",
        pName:"John Pitarshon",
        pJob:"Creative Director",
    },
]

personlist.forEach(function(item,index){
    person += 
    `
    <div class="person_box">
                        <img src=${item.src}>
                        <p class="p_name">${item.pName}</p>
                        <p class="p_job">${item.pJob}</p>
                        <div class="iconWrap">
                            <a href="#"><span class="material-symbols-outlined"> mouse</span></a>
                            <a href="#"><span class="material-symbols-outlined">flight_takeoff</span></a>
                            <a href="#"><span class="material-symbols-outlined"> photo_camera</span></a>
                            <a href="#"><span class="material-symbols-outlined">format_size</span></a>
                        </div>
                    </div>
    `
});

personboxWrap.innerHTML = person;