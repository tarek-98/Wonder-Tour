//up
let up = document.querySelector(".up")

window.onscroll = function()
{
  if(this.scrollY >= 500)
  {
    up.classList.add("show")
  }
  else
  {
    up.classList.remove("show")
  }
}
up.onclick = function()
{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}


//random background option
let backgroundOption = true;
//change background img
let landingPage = document.querySelector(".landing");
let imgArray = ["img01.jpg", "img02.jpg", "img03.jpg"];

let landText = document.querySelector(".landing .box h1");
let textArray = ["Explore The World", "Test Our Experience", "Create Your Tour"];

let landPar = document.querySelector(".landing .box p");
let parArray = ["Enjoy the Best Destinations with Our Travel Agency","A team of professional Travel Experts", "Build your Next Holiday Trip with Us"];

// function to randomize imgs
function randomizeImg()
{
    if(backgroundOption === true)
    {
        backgroundInterval = setInterval(()=>{
        //get random num
        let randNum = Math.floor(Math.random() * imgArray.length);
        //change background img
        landingPage.style.transition = "1s"
        landingPage.style.backgroundImage = `url(../img/` + imgArray[randNum] +`)`;

        //change text 
        landText.style.transition = "1s"
        landText.innerHTML = textArray[randNum];

        //change text 
        landPar.style.transition = "1s"
        landPar.innerHTML = parArray[randNum];

        },4000)
    }
}
randomizeImg();

//discover
let tab = document.querySelectorAll(".discover .title span");
let tabArray = Array.from(tab);
let content = document.querySelectorAll(".discover .info p");
let contentArray = Array.from(content);

console.log(contentArray)

tabArray.forEach((ele) => {
  ele.addEventListener("click", function(e){
    
    tabArray.forEach((ele) => {
      ele.classList.remove("active")
      this.classList.add("active")
    });

    contentArray.forEach((cont) => {
      cont.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.info).style.display = "block"
  })
})


//gallary
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}