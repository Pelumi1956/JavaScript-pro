// ADD THE FIRSTCARD, SECONDCARD, AND SUM
// let firstCard = 5
// let secondCard = 10

// let sum = firstCard + secondCard
// console.log(sum)

// // IF...ELSE CONDITIONALS

// // Ace = 11
// // King = 12
// if (sum < 21) {
//     console.log("Do you want to draw a new card? 😊")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 😍")
// // } else if (sum > 21) {
// //     console.log("You're out of the game! 😌")
// } else {
//     console.log("You're out of the game! 😌")
// } // and this is for any other cases

// MY FIRST IF...ELSE STATEMENT

// let age = 21
// if (age <= 20) {
//     console.log("You can not enter the club! 😌") // so this is saying if the person is less than 20 or equals to 20 the person is not welcome
// } else {
//     console.log("Welcome! 😍")
// }

// IF/ELSE..IF/ELSE STATEMENT

// let age = 100
// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) // the thing with two equal to is that is going to work normally as the triple equal to but if mistakenly add string it will still work(ie it basically turn string into a number and ignores that it's a string)
//  {
//     console.log("Here is ur birthday card from the king")
// }  else {
//     console.log("Not eligible, you have already gotten one")
// }

// THE IF..ELSE STATEMENT FOR OUR GAME

// let firstCard = 10
// let secondCard = 11

// let sum = firstCard + secondCard

// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 😊")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 😍")
// // } else if (sum > 21) {
// //     console.log("You're out of the game! 😌")
// } else {
//     console.log("You're out of the game! 😌")
// } // and this is for any other cases

//  ADD THE HASBLACKJACK VARIABLE

// let firstCard = 10
// let secondCard = 11
// let hasBlackJack = false

// let sum = firstCard + secondCard

// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 😊")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 😍")
//     hasBlackJack = true
// } 
// //else if (sum > 21) {
// //     console.log("You're out of the game! 😌")
// //} 
// else {
//     console.log("You're out of the game! 😌")
// } // and this is for any other cases

// // Cash Out!
// console.log(hasBlackJack)

// ADD THE ALIVE VARIABLE

// let firstCard = 10
// let secondCard = 11
// let hasBlackJack = false
// let isAlive = true
// let sum = firstCard + secondCard + 5

// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 😊")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 😍")
//     hasBlackJack = true
// } 
// //else if (sum > 21) {
// //     console.log("You're out of the game! 😌")
// //} 
// else {
//     console.log("You're out of the game! 😌")
//     isAlive = false
// } // and this is for any other cases

// // Cash Out!
// // console.log(hasBlackJack)
// console.log(isAlive)

// LET'S PRACTICE BOOLEAN CONDITION

// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) // false

// ADD THE MESSAGE VARIABLE

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

// LINK TO STYLESHEET
// this will be in the html and css

// ADD BASIC STYLING

// MAKE THE START BUTTON WORK


function renderGame() {
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game!"
        isAlive = false
    }

    // Cash Out!
    // console.log(hasBlackJack)
    // console.log(isAlive)
    // console.log(message)

    // Display the message on the page
    messageEl.textContent = message

    // Display the sum
    sumEl.textContent = "Sum:" + sum

    // Display the cards: this render out first and the secondCard
    cardsEl.textContent = "Cards:" + cards[0] + " " + cards[1]
}

// DISPLAY THE MESSAGE ON THE PAGE

let messageEl = document.getElementById("message-el")
// console.log(messageEl)

// DISPLAY THE SUM 

// let sumEl = document.getElementById("sum-el")
// or use the query selector and when this is use u should add a hash tag to identify id selector
let sumEl = document.querySelector("#sum-el")
// NB: what is with the querySelector is that it also grab class also ie ".sum-el" and u can also use the name of an element also "button", "p" etc

// DISPLAY THE CARDS
let cardsEl = document.getElementById("cards-el")

// NEW CARD BUTTON
function newCard() {
    console.log("Drawing a new card from the deck")
    // Add to the sum
    let card1 = 7
    sum += card1
    renderGame()
}

// ADD TO THE SUM WHEN NEWCARD IS CLICKED

// RENAME STARTGAME() 
function startGame() {
    renderGame()
}

// ARRAY: this is list of items (ie to store all our cards) []. NB: Array start at zero [0]
let cards = [firstCard, secondCard] //array list of item

// INTRO TO ARRAY





