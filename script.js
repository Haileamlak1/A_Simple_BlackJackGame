let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardEl = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')
let messageEl = document.getElementById('message-el')

let playerEl = document.getElementById('player-el')
  
let player = {
     name: "Haile",
     chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips

  function getRandomCard(){

 let randomNum = Math.floor(Math.random() * 13) + 1
 if(randomNum === 1){
   return 11
  }
  else if(randomNum > 10)
  {
    return 10
  }

  else{
  return randomNum
}

}
   function startGame(){
    isAlive = true
let firstCard = getRandomCard()
let secondCard  = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard

    renderGame()
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 

    for(let i=0; i<cards.length; i++){

    cardEl.textContent += cards[i] + " "
    
    }

    if(sum <=20){
        message = "Do you want to draw a new card?"
        }
        else if(sum === 21){
           message = "You got the BlackJack!"
         hasBlackJack = true
        }
        else{
            message = "You're out of the game!"
            isAlive = false
        }

     messageEl.textContent = message
}
function newCard(){
if(isAlive ===true && hasBlackJack === false){
let card = getRandomCard()
sum += card
cards.push(card)
renderGame()
}
}