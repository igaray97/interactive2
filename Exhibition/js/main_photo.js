
$('button').click(function () {

  $('.box').toggleClass('box-rotate');

});


// let firstPhoto = document.querySelector('#photo')
//
// firstPhoto.addEventListener('click',function(){
//   document.body.classList.add('secondImage')
//   document.body.classList.remove('firstImage')
//   // document.body.classList.remove('secondImage')
// })


var range = document.getElementById("range");
var imgOne = document.getElementsByClassName("img1")[0];
var imgTwo = document.getElementsByClassName("img2")[0];
var imgThree = document.getElementsByClassName("img3")[0];
var imgFour = document.getElementsByClassName("img4")[0];
var imgFive = document.getElementsByClassName("img5")[0];
var imgSix = document.getElementsByClassName("img6")[0];

range.addEventListener("change", function() {
    imgOne.style.opacity = this.value / this.max;
    imgThree.style.opacity = this.value / this.max;
    imgFour.style.opacity = this.value / this.max;
    imgTwo.style.opacity = (this.max - this.value) / this.max;
    imgFive.style.opacity = (this.max - this.value) / this.max;
    imgSix.style.opacity = (this.max - this.value) / this.max;

});
