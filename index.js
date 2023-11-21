let firstCard = 3
let secondCard = 10

let sum = firstCard + secondCard
console.log(sum)

let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)

function startGame() {
    renderGame()

}


function renderGame() {
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    }
    
    else if (sum === 21) {
        message = "Woohoo! You've got blackjack"
    }
    
    else {
        message = "You're out of the game"
    }
    messageEl.innerText = message
    sumEl.innerText = "Sum: " + sum
    cardsEl.innerText = "Cards: " + firstCard + " " + secondCard
}

function newCard() {
    console.log("Drawing a new card from the Deck")
    let card = 10
    sum += card
    renderGame()
}

