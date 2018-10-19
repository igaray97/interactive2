

let moon = document.querySelector('.moon')
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
