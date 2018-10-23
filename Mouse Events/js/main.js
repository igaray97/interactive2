

let moon = document.querySelector('.moon')
let sky = document.querySelector('.sky')
let face = document.querySelector('.face')

document.addEventListener('mousemove',function(event){
  // console.log(event)
  let x = event.clientX
  let y = event.clientY

  let a = Math.atan2(
    x - window.innerWidth / 2,
    y - window.innerHeight / 2
  )

  let spin = -a + Math.PI

  moon.style.transform = 'rotate('+(spin)+'rad)'
  face.style.transform = 'rotate('+(-spin)+'rad)'

  console.log(a)

})

let star = document.querySelector('.star1')
let Sstar = document.querySelector('.Sstar')
let circle = document.querySelector('.circle')

sky.addEventListener('click',function(){
  star.classList.add('show')

})

star.addEventListener('click',function(){
  Sstar.classList.add('show2')

})

star.addEventListener('click',function(){
  circle.classList.add('show2')

})

let meteor = document.querySelector('.meteor')

Sstar.addEventListener('click',function(){
  meteor.classList.add('move')

})

let cloud = document.querySelector('.cloud')

meteor.addEventListener('click',function(){
 cloud.classList.add('show4')

})

let rocket = document.querySelector('.rocket')

cloud.addEventListener('click',function(){
 rocket.classList.add('show5')

})

let alien = document.querySelector('.alien')

rocket.addEventListener('click',function(){
 alien.classList.add('show6')

})






// let animationStep = 0
//
// animationWatchDog.addEventListener('animationend',function(){
//
//   if(animationStep === 0){
//     heyE.classList.remove('firstAnimation')
//     heyE.classList.add('secondAnimation')
//   }
//
//   if(animationStep === 1){
//     heyE.classList.remove('secondAnimation')
//     heyE.classList.add('thirdAnimation')
//   }
//
//   if(animationStep === 2){
//     heyE.classList.remove('thirdAnimation')
//     heyE.classList.add('forthAnimation')
//   }
//   animationStep ++
//   console.log(animationStep)
// })
