
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elems = document.querySelector("#elem-container");

var fixedI = document.querySelector("#fixed-image");
elems.addEventListener("mouseenter", function () {
    fixedI.style.display = "block"
})
elems.addEventListener("mouseleave", function () {
    fixedI.style.display = "none"
});
var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixedI.style.backgroundImage = `url(${image})`
    })
});
let loader = document.getElementById("loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)




