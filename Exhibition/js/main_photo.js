
$('button').click(function () {

  $('.box').toggleClass('box-rotate');

});


let firstPhoto = document.querySelector('#photo')
let 

firstPhoto.addEventListener('click',function(){
  document.body.classList.add('secondImage')
  document.body.classList.remove('firstImage')
  // document.body.classList.remove('secondImage')
})


var range = document.getElementById("range");
var imgOne = document.getElementsByClassName("img1")[0];
var imgTwo = document.getElementsByClassName("img2")[0];

range.addEventListener("change", function() {
    imgOne.style.opacity = this.value / this.max;
    imgTwo.style.opacity = (this.max - this.value) / this.max;
});
