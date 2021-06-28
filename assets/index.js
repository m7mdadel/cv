document.getElementById("photo_cv").addEventListener("click", function () {
    document.getElementById("myphoto").style.display = "block";
})

document.getElementById("myphoto").addEventListener("click", function () {
    document.getElementById("myphoto").style.display = "none";
})

/*
document.getElementById("open-map").addEventListener("click", function () {
    document.getElementById("map-model").style.display = "block";
})
document.getElementById("map-model").addEventListener("click", function () {
    document.getElementById("map-model").style.display = "none";
})
*/
document.getElementById("print_icon").addEventListener("click", function () {
    window.print();
})