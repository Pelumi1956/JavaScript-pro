// document.getElementById("count-el").innerText = 5

// firstly we create somewhere to store our count so we will create a variable which "count"
// let count = 0
// console.log(count)

// Solve
// 1. Create a variable, myAge, and set its value to ur age
// let myAge = 19
// 2. Log the myAge variable
// console.log(myAge)

// BASIC MATHEMATICAL OPERATIONS


// let count = 5 * 7

// Example
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// Solve
// NOTE: 1 human year = 7 dog years
// 1. Create two variables, myAge and humanDogRatio
// let myAge = 19
// let humanDogRatio = 7
// 2. Multiply the two and store the result to myDogAge
// let myDogAge = 19 * 7
// 3. Log myDogAge to the console
// console.log(myDogAge)


// REASSIGNING AND INCREMENTING


// reassigning is to change the variable
// let count = 5
// count = 3
// NOTE: the 3 will be the one to show on the page cuz javscript start from the top and runs down and uses the latest value it can find for any variable defined with "let" key word.
// count = 10
// console.log(count)

// Example
// count +1
// this will be adding 1 to the current count 
//count = count + 2 //5 + 1
// count = count + 10
// count = count - 12
// console.log(count)

// Solve
//1. Create a variable, bonusPoint, Initialize it as 50, increase 
// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// 2. Decrease it down to 25, and then finally increase it 70
// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// 3. console.log the value after each step
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// ADDING A BUTTON (that is on the html page)

// THE ONCLICK EVENT LISTENER ()
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() { // the increment is called function
//     console.log("The button was clicked") // this is the body of the function
// }

// USING FUCTIONS TO WRITE LESS CODE

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// setting up the race
// countdown() // before the first race

// GO!
// players are racing the race
// race is finished

// Get ready for a new race
// countdown() //before the second race and this is a short hand for writting out the whole console.log(), it's alled the function

// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// WRITE YOUR FIRST FUNCTIONS
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
//  function logcount() {
//     console.log(42)
//  }

//  logcount()

// WRITE A FUNTION THAT LOGS THE SUM
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function logsum() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
    // console.log(lap1 + lap2 + lap3)
// }
// logsum()

// WRITE A FUNCTION THAT INCREMENT

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// function incrementWithOne() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// Run it three times
// incrementWithOne()
// incrementWithOne()
// incrementWithOne()

// INCREMENT ON CLICKS

// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count


//  DISPLAY THE COUNT ON PAGE

// camelCase 

// let count = 0

// function increment() {
//     count = count + 1
    // document.getElementById("count-el").innerText = count
    // countEl.innerText = count
    // console.log(count)
// }

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// THE DOCUMENT OBJECT MODEL (DOM how u use javascript to modify a website)

// let count = 0

// function increment() {
//     count = count + 1
//     document.getElementById("count-el").innerText = count
//     countEl.innerText = count
//     console.log(count)
// }

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// DISPLAY THE COUNT WITH INNERTEXT

// grab the count-el element, store it in a countEl variable
// let count = 0

// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
//     // console.log(count)
//     countEl.innerText = count
// }

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// CREATE A SAVE BUTTON 

// let count = 0

// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
//     // console.log(count)
//     countEl.innerText = count
// }

// let countEl = document.getElementById("count-el")

//  Create a function, save(), which logout the count when it's called
// My Solution for restarting the count
// let countRe = 0
// function save() {
//     countRe = countRe
//     countEl.innerText = countRe
//     // console.log(count)
// }
// function save() {
//     count = count
//     countEl.innerText = count
//     console.log(count)
// }

//  WHAT IS A STRING

// this is a data type in javascript

// let count = 0

// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
//     // console.log(count)
//     countEl.innerText = count
// }

// let countEl = document.getElementById("count-el")
// // save button
// function save() {
//     count = count
//     countEl.innerText = count
//     console.log(count)
// }

// WRITE YOUR FIRST STRING VARIABLE

// let userName = "Luxy"
// // console.log(userName)
// // Create a variable, message, that stores the string: "You have three new notifications"
// let message = "You have three new notifications"
// console.log(message + ", " + userName + "!")

// Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = message + ", " + userName + "!"
// console.log(messageToUser)

// LOG A GREETING TO THE CONSOLE

// create 


// create two variables, name and greeting. The name variable should store your name, and the greeting should store e.g. "Hi, my name is"
// let greeting = "Hi, my name is" 
// let name = "Pelumi"

// let myGreeting = greeting + " " + name
// console.log(myGreeting)

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// STRINGS VS. NUMBERS

// let greeting = "Hi, my name is" 
// let name = 42

// let myGreeting = greeting + name
// // console.log(myGreeting)

// let points = 4
// let bonusPoints = 10

// let totalPoint = points + bonusPoints
// console.log(totalPoint)

// console.log(4 + 5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

// RENDER A WELCOME MESSAGE

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
// let name = "Sodiq"
// let greeting = "Welcome back"

// Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + " " + name

//  IMPROVE THE MESSAGE WITH STRING CONCATENATION

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Sodiq"
// let greeting = "Welcome back"
// welcomeEl.innerText = greeting + " " + name 
// welcomeEl.innerText = welcomeEl.innerText + "👋"
// or
// welcomeEl.innerText += 👋

// Add an emoji to the end! 👋
// Write Your Code Below Here
// HINT: count = count + 1

// USE PLUS EQUAL FOR COUNT

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     // change this to use the plus equal technique you've learned
//     // count = count + 1
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }

// // CREATE THE SAVE FEATURE

// // grab the save-el paragraph and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0


// function increment() {
//     count += 1
//     countEl.textContent = count
// }
// // save
// let saveEl = document.getElementById("save-el")

// console.log(saveEl)

// function save() {
//     // create a variable that contains both the count and the dash seperator, ie "12-"
//     let countStr = " " + count + " - "
//     // render the variable in the saveEl using innerText
//     // saveEl.innerText = saveEl.innerText + countStr
//     // or 
//     saveEl.textContent += countStr
//     // NB: Make sure to not delete the existing content of the paragraph

// }

// // SET THE COUNT TO 0

// // My Solution for restarting the count
// let restartEl = document.getElementById("count-el")

// function restart() {
//     // console.log(countRe)
//     restartEl.innerText = count
//     count = 0
// }

// CONGRAT & RECAP
// let count = 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment() {
//     count = count + 1
//     countEl.textContent = count
// }

// function save() {
//     countStr = " " + count + " - "
//     saveEl.textContent =saveEl.textContent + countStr
//     countEl.textContent = 0
//     count = 0 // So all this will save and restart the count when cliked on

// }
// console.log("Let's count people on the subway!")



// PRACTICE
// 1 variables
// let firstName = "Pelumi"
// let lastName = "Sidiq"

// let fullName = firstName + " " + lastName
// console.log(fullName)

// 2 contatenate two strings in a function
// let name = "linda"
// let greeting = "Hey Sup"
// function greetingLinda() {
//    console.log(greeting + ", " + name + "!")
// }
// greetingLinda()

// 3 incrementing and decrementing
// let myPoint = 3

// function add3Points() {
//     myPoint += 3
// }
// add3Points()
// add3Points()
// add3Points()


// function remove1Point() {
//     myPoint += -1
// }
// remove1Point()
// remove1Point()


// console.log(myPoint)

// TODAY

// 4 Strings and numbers
// let no1 = 5
// let no2 = 9
// let bothNo = no1 + no2
// console.log(bothNo)

// console.log("My points:" + " " + bothNo)

// 5 rendering an error message
// let errorParag = document.getElementById("error")
// console.log(errorParag)
// function purchase() {
//     // console.log("button clicked")
//     let click1 = "Something went wrong, please try again"
//     errorParag.textContent = click1
// }





