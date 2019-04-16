var menu = document.getElementById("js-menu");
var navBar = document.getElementById("js-navBar");

menu.addEventListener("click", function () {
    navBar.classList.toggle("is-opened");
});