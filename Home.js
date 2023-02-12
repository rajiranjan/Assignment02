
// start zoom in zoom out
function increase(){
    document.getElementById("pict").style.transform = "scale(1.5)";
}

function decrease(){
    document.getElementById("pict").style.transform = "scale(1)";
}

// end zoom in zoom out


// start image filter
const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");
const searchBox = document.querySelector("#search");

buttons.forEach((button) => {
    button.classList.remove('btn-clicked');
});
buttons[0].classList.add('btn-clicked');

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter = e.target.dataset.filter;
        
        boxes.forEach((box => {
            if(btnfilter == 'all'){
                box.style.display = 'block';
            }else{
                const boxfilter = box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
            }
        }));

    });
});


function setActiveBtn(e){
    buttons.forEach((button) => {
       button.classList.remove('btn-clicked') 
    });
    e.target.classList.add('btn-clicked');
}
// end image filter
// set carousel
const images = ["images/curry01.jpeg","images/food02.jpg","images/pizza04.jpg"];
const carousel = document.querySelector(".carousel");
const intervel = setInterval(function(){
    startCarousel();
}, 3000);
var index = 1;

startCarousel = () =>{
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index > images.length-1) index = 0;
}

// end carousel

function togglePopup(){
    document.getElementById("open").classList.toggle("active");
}

// popup window

function openPopup(){
    newwin = window.open('loader.html');
}






// function myFunction() {
//     alert("keep working");
//   }


//   function triggerBtnClick(){
//     document.getElementById('btn').click();
//   }









//     window.open('about.php', 'About us', 'width = 800, height=500');

//     document.onmousedown=focusPopup;
//     document.onkeyup=focusPopup;
//     document.onmousemove=focusPopup;
// }
// function focusPopup(){

// }