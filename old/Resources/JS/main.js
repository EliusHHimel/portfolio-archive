var open=document.querySelector("#open-nav");
var close=document.querySelector("#close-nav");
var navMenu=document.querySelector("nav");

function openNav(){
    open.style.display="none";
    close.style.display="block";
    navMenu.style.width="100%";
}
function closeNav(){
    open.style.display="block";
    close.style.display="none";
    navMenu.style.width="0%";
}