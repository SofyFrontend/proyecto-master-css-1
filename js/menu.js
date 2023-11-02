document.addEventListener('DOMContentLoaded', (event)=>{
    let button = document.querySelector(".layout__menu-toggle");
    let aside= document.querySelector(".header");

    button.addEventListener('click', (event)=>{
        let visible = document.querySelector(".header--visible");

        if (visible){
            aside.classList.add("header--visible");
        }else{
            aside.classList.remove("header--visible");
        }
    })
})