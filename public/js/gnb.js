const gnbM = document.querySelectorAll(".gnb > li > a ");


for(let i = 0; i < gnbM.length ; i++){
    gnbM[i].addEventListener("click",function(e){
        console.log(gnbM[i])
        for(let j=0; j<gnbM.length ;j++){
            gnbM[j].classList.remove("on");
        }
        gnbM[i].classList.add("on");
    })
}
 