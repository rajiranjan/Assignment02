document.getElementById("spacei").addEventListener("mouseover", changeimage);
document.getElementById("spacei").addEventListener("mouseleave", changeimage2);

function changeimage() {
    var image = document.getElementById("spacei").src = "images/ice05.jpg";

}

function changeimage2() {
    var image = document.getElementById("spacei").src = "images/pizza04.jpg";
    
}

// add popup for service
function openPopup(){
    newwin = window.open('loader.html');
}

function openNew(){
    newwin = window.open('Map.html');
}