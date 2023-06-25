document.addEventListener("DOMContentLoaded", counterUp);
let count = document.querySelector("#counter");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const heartButton = document.querySelector("#heart");
const pauseButton = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const commentList = document.getElementById("list");
const listItem = document.createElement("li");
const unorgList = document.createElement('ul')
const form = document.getElementById('comment-form')



//See the timer increment every second once the page has loaded.
function startCount(){
    count.innerText++
    console.log(count.innerText)
}
function counterUp(){
 setInterID = setInterval(startCount, 1000);
}


//pause timer interval
function stopCount(){
  clearInterval(setInterID);
}

// minus func - decrease the displayed # in the counter 
  minusBtn.addEventListener('click', () => {
    count.innerText--
    console.log(count.innerText)
  })


// plus func- increasing the displayed # in the counter
    plusBtn.addEventListener('click', () => {
      count.innerText++
      console.log(count.innerText)
    })



// A "like" button (❤️) that adds a "like" for the number that is currently 
//displayed by the timer
  
heartButton.addEventListener('click', () => {
  const li = document.createElement("li")
   li.innerText = `${count.innerText}`
   likes.appendChild(li)
})

/*         
Pause the counter, which should:
 1. pause the counter
 2. disable all buttons except the pause button
 3. switch the label on the button from "pause" to "resume"
// Click the "resume" button to restart the counter and re-enable the buttons.
// target the #pause button with value of 'resume'
*/


 pauseButton.addEventListener('click', () => {
    if(pauseButton.innerText == "pause"){
      stopCount();
      pauseButton.innerText = "resume"
    }else if (pauseButton.innerText == "resume"){
      counterUp();
      pauseButton.innerText = "pause"
      ;
    }
  })




// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
// Then innerText or append child to div with Comments with #list .comments





form.addEventListener("submit", (e) => {
     e.preventDefault();
    let commentValue = document.querySelector("#comment-input").value
    listItem.innerText = commentValue
    commentList.appendChild(listItem)
    console.log(commentValue)
})

