document.getElementById("spacei").addEventListener("mouseover", changeimage);
document.getElementById("spacei").addEventListener("mouseleave", changeimage2);

function changeimage() {
    var image = document.getElementById("spacei").src = "images/ice05.jpg";

}

function changeimage2() {
    var image = document.getElementById("spacei").src = "images/pizza04.jpg";
    
}