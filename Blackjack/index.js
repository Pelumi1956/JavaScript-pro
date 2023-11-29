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

let firstCard = getRandomCard()
let secondCard = getRandomCard()
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
    cardsEl.textContent = "Cards:"

    // LOOP
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }
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
    let card3 = getRandomCard()
    sum += card3
    renderGame()

    cards.push(card3)
    // console.log(cards)
    cardsEl.textContent = "Cards:" + cards + " "
}

// ADD TO THE SUM WHEN NEWCARD IS CLICKED

// RENAME STARTGAME() 
function startGame() {
    renderGame()
}

// ARRAY: this is list of items (ie to store all our cards) []. NB: Array start at zero [0]
let cards = [firstCard, secondCard] //array list of item



// INTRO TO ARRAY
// Arrays are ordered list of items

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// let experience = [
//     "Computer programmer",
//     "Html expert",
//     "Css expert",
//     "Still learning javaScript"
// ]
// // Array indexes

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// console.log(featuredPosts.length)

// Array with multiple data types
// Array - ordered list of items - composite / complex data type
// let mySelf = [
//     "Sodiq",
//     19,
//     true
// ]

// Adding and removing items form arrays
// let card = [7, 4]
// If we want to add anything to an array u use a method called push
// card.push(6)
// console.log(card)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here"
// messages.push(newMessage)
// console.log(messages)

// How to remove the last item in an array
// messages.pop()
// console.log(messages)
// You can do this multiple times to remove the last item of an array

// COUNTING IN JAVASCRIPT

// Count to ten

// We need to Specify...

// Where should we START counting?
// Where is the finish line?
// What's the STEP SIZE we should use?


//       START              FINISH              STEP SIZE
// for (let count = 10;         count < 21;        count += 1) {
//     console.log(count)
// }

// WRITE YOUR FIRST LOOP

// for (let count = 0; count < 6; count += 1) {
//     console.log(count)
// }
// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }


// FOR LOOPS AND ARRAYS
// And this is how u can console.log each message on it own
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "sup u",
//     "cul man",
//     "ok man"
// ]
// // DRY - Don't rerpeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }

// WRITE UR FIRST ARRAY-BASED LOOP
// let card = [7, 3, 9, 4]
// for (let i = 0; i < card.length; i += 1) {
//     console.log(card[i])
// }

//  FOR LOOPS, ARRAYS AND DOM

// let sentence = ["Hello", " my ", "is ", "per"]

// for (let i = 0; i < sentence.length; i += 1) {
//     console.log(sentence[i])
// }

// let greetingEl = document.getElementById("greeting-el")

// greetingEl.textContent = sentence
// Or

// let sentence = ["Hello", "my", "name", "is", "per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i += 1) {
//     greetingEl.textContent += sentence[i] + " " //this apply space after each word
// }

// USE A LOOP TO RENDER CARDS

// HOW CAN WE AVOID TO HARD-CODE CARD VALUES
// function getRandomCard() {

// }
// RETURNING VALUES IN FUNCTION

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()

// console.log(totalTime)

// USING FUNCTION TO SET THE CARD VALUES
function getRandomCard() {
    return 5
}

// GENERATING RANDOM NUMBERS WITH MATH.RANDOM()
// let randomNumber = Math.random()
// console.log(randomNumber)

// what does Math.random() do?

// Your answer: it generate a random number between 0 and 1 (not inclusive of 1)

// MATH.RANDOM()*6
// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// FLOORING THE NUMBER WITH MATH.RANDOM()
// let flooredNumber = Math.floor(3.45632) // this remove the decimals
// console.log(flooredNumber) 

// USING MATH.RANDOM() AND MATH.FLOOR() TO CREATE A DICE
let randomNumber = Math.floor (Math.random() * 6)
console.log(randomNumber)


