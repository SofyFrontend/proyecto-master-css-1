document.addEventListener('DOMContentLoaded', (event)=>{
    let button = document.querySelector(".layout__menu-toggle");
    let icon_bars= document.querySelector(".layout__menu-toggle .fa-bars");
    let icon_xmark= document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside= document.querySelector(".header");

    button.addEventListener('click', (event)=>{
        let visible = document.querySelector(".header--visible");

        if (visible){
            // añadir la clase con los estilos para que se visible 
            aside.classList.add("header--visible");
            //modificar el valor de la opacity del elemento 
            icon_bars.style.opacity=0;
            icon_xmark.style.opacity=1;
        }else{
            //eliminar la clase 
            aside.classList.remove("header--visible");
            icon_bars.style.opacity=1;
            icon_xmark.style.opacity=0;
        }
    })
})