// JavaScript Document

var button = document.querySelector("#hamburger");
var navigatie = document.querySelector(".subNav");

button.addEventListener("click", uitschuiven);

function uitschuiven(){
    navigatie.classList.toggle('active');
}

