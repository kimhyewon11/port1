
const subMenu = document.querySelector(".subMenu");
const subgnbwrap = document.querySelector(".subgnbwrap");

subMenu.addEventListener("click",function(){
    subMenu.classList.toggle("on");
    subgnbwrap.classList.toggle("active");
});
