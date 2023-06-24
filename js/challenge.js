//See the timer increment every second once the page has loaded.

document.addEventListener("DOMContentLoaded", startCount)
let count = document.querySelector("#counter")



function startCount(){
    if(count.innerText === 4) clearInterval(count.innerText)// why doesn't this work?
    else count.innerText++
    console.log(count.innerText)
}

setInterval(startCount, 1000);



// Plus and Minus buttons that increment or decrement the counter
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")

// minus - decrease the displayed count number
function decreaseNum(){
  minusBtn.addEventListener('click', () => {
    count.innerText--
    console.log(count.innerText)
  })
}
decreaseNum()


// plus - increasing the displayed count number
function increaseNum(){
    plusBtn.addEventListener('click', () => {
      count.innerText++
      console.log(count.innerText)
    })
  }
  increaseNum()


// A "like" button (❤️) that adds a "like" for the number that is currently 
//displayed by the timer

const heart = document.querySelector("#heart");
console.log(heart)
const likes = document.querySelector(".likes");
console.log(likes)
heart.addEventListener('click', () => {
     likes.innerText++
})

/*         
Pause the counter, which should:
 1. pause the counter
 2. disable all buttons except the pause button
 3. switch the label on the button from "pause" to "resume"

*/

const pause = document.querySelector("#pause")
console.log(pause)

pause.addEventListener('click', () => console.log('clicked'))


