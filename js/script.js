const sliderContainer = document.querySelector('.slider-container');
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const buttonDown = document.querySelector('.button-down');
const buttonUp = document.querySelector('.button-up');
const slidesLength = rightSide.querySelectorAll('.right-slide').length
let activeSlideIndex = 0

leftSide.style.top = `-${(slidesLength - 1) * 100}vh` //разворот слайдов слева
buttonUp.addEventListener('click', ()=> changeSlide('up'))
buttonDown.addEventListener('click', ()=> changeSlide('down'))
// leftSide.addEventListener("click", changeBackground)// смена цвета по клику
document.querySelectorAll('.left-slide').forEach(function(elem){
  elem.style.background = getRandomColor()
})

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
 if(direction === 'up') {
   activeSlideIndex++
   if(activeSlideIndex > slidesLength - 1) {
     activeSlideIndex = 0
   }
   }else if(direction === 'down') {
     activeSlideIndex --
     if(activeSlideIndex < 0) {
       activeSlideIndex = slidesLength - 1
     }
   }
 rightSide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
 leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

// function getRandomColor() {
//   let letters = '0123456789ABCDEF'.split('');
//   let color = '#';
//   for (let i = 0; i < 6; i++ ) {
//       color += letters[Math.round(Math.random() * 16)];
//   }
//   return color;
// }
function getRandomColor() {
  let color = "#" + Math.floor(Math.random()*16777215).toString(16); 
  return color;
}

// const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
// Math.floor(Math.random()*16777215).toString(16); //16777215 десятичное число старшего шестнадцатеричного числа цветов: rgb(255, 255, 255) в шестнадцатеричном формате — это «FFFFFF», что равно 16777215 при преобразовании в десятичное число.

document.documentElement.style.setProperty('--main-bg-color', getRandomColor());