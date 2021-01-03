// JavaScript Document

var button = document.querySelector("#hamburger");
var navigatie = document.querySelector("#subNav");

button.addEventListener("click", uitschuiven);

function uitschuiven(){
    navigatie.classList.toggle('active')
}


/*var button = document.querySelector("button");
var navigatie = document.querySelector("nav");

navigatie.classList.add("subNav");

button.addEventListener("click"), function(){
    navigatie.classList.toggle("subNav");
}*/