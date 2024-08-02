const puzzles = [
   {
      images:[
         "set2img1.jpg",
         "set2img2.jpg",
         "set2img3.jpg",
         "set2img4.jpg"

      ],
      answer:"jump"
   },
   {
      images:[
         
         "set3img1.jpg",
         "set3img2.jpg",
         "set3img3.jpg",
         "set3img4.jpg"
      ],
      answer:"girl"
   },
   {
      images:[
         "ghost.jpg",
         "grave.jpg",
         "sunset.jpg",
         "img1.jpg"
      ],
      answer:"anime"
   }
];
let currentpuzzleindex = 0;
const imgelements = [
  
   document.getElementById('img1'),
   document.getElementById('img2'),
   document.getElementById('img3'),
   document.getElementById('img4')

];
const guessinput = document.getElementById('guess-input');
const submitbtn = document.getElementById('submit-btn');
const nextbtn = document.getElementById('next-btn');
const resultdiv = document.getElementById('result');

function loadpuzzle(index){
   const puzzle=puzzles[index];
   for(let i=0; i<imgelements.length;i++){
      imgelements[i].src = puzzle.images[i];
   }
   resultdiv.textContent = '';
   guessinput.value = '';
   
}
document.addEventListener('DOMContentLoaded', () => {
   loadpuzzle(currentpuzzleindex);
});
function checkanswer() {
   const userguess = guessinput.value.trim().toLowerCase();
   if (userguess === puzzles[currentpuzzleindex].answer.toLowerCase()) {
       resultdiv.textContent = "Correct! You guessed the word.";
       resultdiv.style.color = "green";
   } else {
       resultdiv.textContent = "Incorrect. Try again.";
       resultdiv.style.color = "red";
   }
}

submitbtn.addEventListener('click', checkanswer);

nextbtn.addEventListener('click',() => {
   currentpuzzleindex = (currentpuzzleindex + 1)%puzzles.length;
   loadpuzzle(currentpuzzleindex);
});
