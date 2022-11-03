

    //main_cont6 (배열 객체 이용해서 데이터값 넣어 주기)
    let personboxWrap =document.querySelector('.personboxWrap')
    let person = "";

    let personlist = [
        {
            src:"/img/person1.jpg",
            pName:"Maria Blank",
            pJob:"Office Manager",
            delay:"100"
        },
        {
            src:"/img/person2.jpg",
            pName:"Karen Paran",
            pJob:"Support Manager",
            delay:"200"
        },
        {
            src:"/img/person3.jpg",
            pName:"Martin Smith",
            pJob:"Web Developer",
            delay:"300"
        },
        {
            src:"/img/person4.jpg",
            pName:"John Pitarshon",
            pJob:"Creative Director",
            delay:"400"
        }
    ]

    personlist.forEach(function(item,index){
        person += 
        `
        <div  data-aos="fade-up" data-aos-delay="${item.delay}" data-aos-duration="1000" class="person_box">
                            <div class='imgWrap'><img src=${item.src}></div>
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