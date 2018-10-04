let blueOutline = document.querySelector('.blue_move')
let headlineContainer = document.querySelector('#headline')


let bitz = document.querySelectorAll('.delay')

let delayStep = 20
let animationDelay =240


for(let l = 0; l < bitz.length; l++){
  for(let i = 0; i < bitz[l].children.length; i++){
    bitz[l].children[i].style.animationDelay = `${(l*25 + i) * delayStep}ms`
  }
}





headlineContainer.onpointerup = function(){
 blueOutline.classList.toggle('hide')
}


let blues = document.querySelectorAll('.white_hide')

for(let i = 0; i < blues.length; i++){
  blues[i].onpointerup = function(){
    blues[i].classList.toggle('hide')
  }
}

// e-o

let animationWatchDog = document.querySelector('.appl_animation')
let heyE = document.querySelector('.heyE')
console.log(heyE)
let animationStep = 0

animationWatchDog.addEventListener('animationend',function(){

  if(animationStep === 0){
    heyE.classList.remove('firstAnimation')
    heyE.classList.add('secondAnimation')
  }

  if(animationStep === 1){
    heyE.classList.remove('secondAnimation')
    heyE.classList.add('thirdAnimation')
  }

  if(animationStep === 2){
    heyE.classList.remove('thirdAnimation')
    heyE.classList.add('forthAnimation')
  }
  animationStep ++
  console.log(animationStep)
})

// e-o in pinkoutline

let animationWatchDog_E_po = document.querySelector('.appl_animation_po')
let heyE_po = document.querySelector('.heyE_po')
console.log(heyE_po)
let animationStep_E_po = 0

animationWatchDog_E_po.addEventListener('animationend',function(){

if(animationStep_E_po === 0){
  heyE_po.classList.remove('firstAnimation_E_po')
  heyE_po.classList.add('secondAnimation_E_po')
}
if(animationStep_E_po === 1){
  heyE_po.classList.remove('firstAnimation_E_po')
  heyE_po.classList.remove('thirdAnimation_E_po')
}
animationStep_E_po ++

})

// y-w in

let animationWatchDog_Y = document.querySelector('.appl_animation_Y')
let heyY = document.querySelector('.heyY')
console.log(heyY)
let animationStepY = 0

animationWatchDog_Y.addEventListener('animationend',function(){

if(animationStepY === 0){
  heyY.classList.remove('firstAnimation_Y')
  heyY.classList.add('secondAnimation_Y')
}
if(animationStepY === 1){
  heyY.classList.remove('secondAnimation_Y')
  heyY.classList.remove('thirdAnimation_Y')
}
animationStepY ++

})

// y-w in pinkoutline

let animationWatchDog_Y_po = document.querySelector('.appl_animation_Y_po')
let heyY_po = document.querySelector('.heyY_po')
console.log(heyE_po)
let animationStepY_po = 0

animationWatchDog_Y_po.addEventListener('animationend',function(){

if(animationStepY_po === 0){
  heyY.classList.remove('firstAnimation_Y_po')
  heyY.classList.add('secondAnimation_Y_po')
}
if(animationStepY_po === 1){
  heyY.classList.remove('secondAnimation_Y_po')
  heyY.classList.remove('thirdAnimation_Y_po')
}
animationStepY_po ++

})


// // h-a
//
// let animationWatchDog_H = document.querySelector('.appl_animation_H')
// let heyH = document.querySelector('.heyH')
// console.log(heyH)
// let animationStepH = 0
//
// animationWatchDog_H.addEventListener('animationend',function(){
//
// if(animationStepH === 0){
//   heyH.classList.remove('firstAnimation_H')
//   heyH.classList.add('secondAnimation_H')
// }
// if(animationStepH === 1){
//   heyH.classList.remove('secondAnimation_H')
//   heyH.classList.add('thirdAnimation_H')
// }
// if(animationStepH === 2){
//   heyH.classList.remove('thirdAnimation_H')
//   heyH.classList.add('fourthAnimation_H')
// }
// animationStepH ++
//
// })
//
//
// // h-a outline
//
// let animationWatchDog_H_po = document.querySelector('.appl_animation_H_po')
// let heyH_po = document.querySelector('.heyH_po')
// console.log(heyH_po)
// let animationStepH_po = 0
//
// animationWatchDog_H_po.addEventListener('animationend',function(){
//
// if(animationStepH_po === 0){
//   heyH_po.classList.remove('firstAnimation_H_po')
//   heyH_po.classList.add('secondAnimation_H_po')
// }
// if(animationStepH_po === 1){
//   heyH_po.classList.remove('secondAnimation_H_po')
//   heyH_po.classList.add('thirdAnimation_H_po')
// }
// if(animationStepH_po === 2){
//   heyH_po.classList.remove('thirdAnimation_H_po')
//   heyH_po.classList.add('fourthAnimation_H_po')
// }
// animationStepH_po ++
//
// })
