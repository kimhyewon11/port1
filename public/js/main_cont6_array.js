

    //main_cont6 (배열 객체 이용해서 데이터값 넣어 주기)
    let personboxWrap =document.querySelector('.personboxWrap')
    let person = "";

    let personlist = [
        {
            src:"/portimg/icon1.jpg",
            pName:"문의하기",
            pJob:"당신의 집에 대한 이야기를 들려주세요 메일로 문의 주시면 2~3일 이내에 연락 드립니다.",
            delay:"100"
        },
        {
            src:"/portimg/icon2.jpg",
            pName:"상담하기",
            pJob:"가족의 라이프 스타일과 어떠한 공간의 분위기를 원하는지 예산의 범위 등 공간기록이 함께 방향을 잡아갑니다.",
            delay:"200"
        },
        {
            src:"/portimg/icon3.jpg",
            pName:"설계계약",
            pJob:"꼼꼼한 맞춤 상담 후 계약을 진행합니다.",
            delay:"300"
        },
        {
            src:"/portimg/icon4.jpg",
            pName:"건축 설계",
            pJob:"라이프 스타일과 원하는 컨셉에 맞도록 건축 설계에 들어갑니다.",
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