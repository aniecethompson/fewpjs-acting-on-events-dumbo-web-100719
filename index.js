// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
let leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

function moveDodgerLeft() {
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
    
function moveDodgerRight() {   
   if (left > 0) {
     dodger.style.left = `${left + 1}px`;
   }
}

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
//   else (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
// })
  