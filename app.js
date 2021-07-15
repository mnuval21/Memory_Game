const gameContainer = document.getElementById("game");
let cardsFlipped =[];
let cardsWon =[];
let noClicking = false;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

const allDivs = document.querySelectorAll('div');
const divCards = Array.from(allDivs);

function handleCardClick(e){
  if(noClicking) return;
  if(e.target.classList.contains('flipped')) return;

  let flippedCard = e.target;
  console.log('flippedCard', flippedCard);
  flippedCard.style.backgroundColor = flippedCard.classList[0];
  flippedCard.classList.add('flipped');

  cardsFlipped.push(
    {
      card: flippedCard,
      card_color: flippedCard.className
    }
  );

  console.log('cardsFlipped array', cardsFlipped);
  
  if(cardsFlipped.length === 2){
    console.log('you flipped 2 cards');
    noClicking = true;
    if(cardsFlipped[0].card_color === cardsFlipped[1].card_color){
      console.log("match!");
      console.log('cardsflipped array after two card', cardsFlipped)
      cardsWon.push(cardsFlipped[0]);
      cardsWon.push(cardsFlipped[1]);
      cardsFlipped.splice(0,2);
      console.log('cardsWon array', cardsWon);
      console.log('cardsFlipped array', cardsFlipped);
      noClicking = false;
    } else {
      console.log('try again');
      setTimeout(function(){
        console.log(cardsFlipped[0].card.style.backgroundColor);
        console.log(cardsFlipped[1].card.style.backgroundColor);
        cardsFlipped[0].card.style.backgroundColor="";
        cardsFlipped[0].card.classList.remove('flipped');
        cardsFlipped[1].card.style.backgroundColor="";
        cardsFlipped[1].card.classList.remove('flipped'); 
        cardsFlipped.splice(0,2);
        noClicking = false;
      }, 500);
    }
  }
  if (cardsWon.length === COLORS.length){
    alert("YOU WON!")
  }


}


    
    

         
      
        
        
        
        
        
        
        
//     }
   
  
// }

// if(cardsWon.length === 10){
//   window.alert("You Won!");
// }


// when the DOM loads
createDivsForColors(shuffledColors);



