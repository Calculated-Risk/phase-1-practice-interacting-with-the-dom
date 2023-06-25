//See the timer increment every second once the page has loaded.

document.addEventListener("DOMContentLoaded", startCount)
let count = document.querySelector("#counter")



function startCount(){
    count.innerText++
    console.log(count.innerText)
}

const setInter = setInterval(startCount, 1000);


// minus func - decrease the displayed # in the counter 
 const minusBtn = document.querySelector("#minus")
  minusBtn.addEventListener('click', () => {
    count.innerText--
    console.log(count.innerText)
  })




// plus func- increasing the displayed # in the counter
  const plusBtn = document.querySelector("#plus")
    plusBtn.addEventListener('click', () => {
      count.innerText++
      console.log(count.innerText)
    })




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

 pause.addEventListener('click', () => {
    const buttons = document.getElementsByTagName("button")
    for(const button of buttons){
        if (pause.id !== button.id){
        button.disabled = true;
    } 
  }
    clearInterval(setInter) 
    pause.innerText = 'resume' 
})



// Click the "resume" button to restart the counter and re-enable the buttons.
// target the #pause button with value of 'resume'


// target pause button labeled 'resume'




// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
// Then innerText or append child to div with Comments with #list .comments


const commentList = document.getElementById("list")
const paraList = document.createElement("p")


const form = document.getElementById('comment-form')
form.addEventListener("submit", (e) => {
     e.preventDefault();
    let commentValue = document.querySelector("#comment-input").value
    paraList.innerText = commentValue
    commentList.appendChild(paraList)
    console.log(commentValue)
})



