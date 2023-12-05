// LET'S BUILD A CHROME EXTENSION

// ADD A BUTTON AND INPUT TAG

// STYLE THE BUTTON AND INPUT TAG

// MAKE TH INPUT BUTTON WORK WITH ONCLICK
// function saveLead() {
//     console.log("Button Clicked onclick")
// }
// REFRACTOR TO addEventListener
// const inputBtn = document.getElementById("input-btn")
// // Google-> "get value from input field javascript"
// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLeads()
// })

// WRITE UR FIRST addEventListener

// inputBtn.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })

// CREATE THE myLeads array and inputEl
// let myLeads = []
// const inputEl = document.getElementById("input-el")

// NOTE: different btw let and const is that const can not be reassign so whatever we assign it to should be constant


// WHEN TO SAY LET AND CONST
// const playerName = "per"
// let credits = 45

// credits += -10
// console.log(credits)

// which of the variable below should be changed from let to const

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// shippingCost = 15
// shippingTime = "7-14 days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// PUSH TO THE myLeads ARRAY

// PUSH THE VALUE FROM THE INPUT FIELD TO  myLeads ARRAY

// USE A FOR LOOP TO LOG OUT LEADS
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.textContent = myLeads[i]
// }


// CREATE THE UNORDERED LIST 
// const ulEl = document.getElementById("ul-el")
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.textContent += "<li>" + myLeads[i] + " " + "</li>"
// }
// const ulEl = document.getElementById("ul-el")
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + " " + "</li>"
// function renderLeads() {
//     let listItems = ""
// const ulEl = document.getElementById("ul-el")
// for (let i = 0; i < myLeads.length; i++) {
//     // listItems += "<li> <a target='_blank' href='" + myLeads + "'>" + myLeads[i] + " " + "</a></li>" // this is for opening a new tab and making the link look like this {<li><a target='_blank' href=''></a></li>}
//     // template string
//     listItems += `
//     <li>
//         <a target='_blank' href='${myLeads[i]}'>
//            ${myLeads[i]}
//         </a>
//     </li>` 
//     // console.log(listItems)
//     // Or
//     // create element
//     // const li = document.createElement("li")
//     // // set text content
//     // li.textContent = myLeads[i]
//     // // append to ul
//     // ulEl.append(li)
// }
// ulEl.innerHTML = listItems
// }
// RENDER THE LEADS IN THE UNORDERED LIST

// HOW TO RENDER <LI> ELEMENT WITH INNERHTML

// WRITE UR FIRST INNERHTML
// let containerEl = document.getElementById("container") 
// containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

// // MORE INNERHTML PRACTICE
// function buy() {
//     containerEl.innerHTML += "<p>Thank you for buying!</p>"
// }

// RENDER THE <LI> ELEMENTS WITH INNERHTML

// IMPROVING THE PERFORMANCE OF OUR APP

// CREATE THE RENDER FUNCTION

// CLEAR THE INPUT FIELD

// ADDING THE <A> TAG

// TEMPLATE STRINGS

// WRITE UR FIRST TEMPLATE STRINGS
// const recipient = "james"

// const email = `Hey  ${recipient}! How is it going? Cheers Per`

// console.log(email)

// MAKE THE TEMPLATE STRING EVEN MORE DYNAMIC
// const recipient = "james"
// let sender = "Pelumhi"

// const email = `Hey  ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)

// TEMPLATE STRING ON MULTIPLE LINES
// const recipient = "james"
// let sender = "Pelumhi"

// const email = `Hey  ${recipient}! 
// How is it going? 
// Cheers ${sender}`

// console.log(email)

// RREFRACTOR THE APP TO USE TEMPLATE STRING

// STYLE THE LIST

// PREPARING THE DEPLOYMENT

// DEPLOYING THE CHROME EXTENSION
// chrome://extension

// WHAT IS localStorage

// YOUR FIRST localStorage
// Local storage

// localStorage.setItem("myName", "Pelumhi")
// let name = localStorage.getItem("myName")
// console.log(name)

// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

// STORING ARRAYS IN LOCAL STORAGE

// SAVE THE LEADS TO LOCAL STORAGE

// GET THE LEADS FROM LOCALSTORAGE 

// TRUTHY AND FALSY STATEMENT

// const credits = 0
// if (credits) {
//     console.log("Let's play")
// } else {
//     console.log("Sorry you have no credits")
// }
// truthy
//{
    // "yolo"
    // (["hdhfu","guyfth"])
// }

// falsy
// {
    // ("")
    // 0
    // null -> how you as a developer signalize emptiness
    // undefined -> how javaScript signalize emptiness
    // NaN
    // falsy
// }
// let currentViewers = null

// currentViewers = ["jane", "nick"]

// currentViewers = null
// // currentViewers = []

// if (currentViewers) {
//     console.log("we have veiwers")
// }

// GUESS THE EXPRESSION TRUTHY OR FALSY
// To check if a value is truthy or falsy
// let trueOfFalse = Boolean("")
// console.log(trueOfFalse)
// false
// true
// true
// false
// true
// false

// CHECKING LOCALSTORAGE BEFORE RENDERING

//  STYLE THE DELETE BUTTON

// MAKE THE DELETE BUTTON WORK

// HOW FUNCTION PARAMETERS CAN IMPROVE OUR CODE

// WRITE UR FIRST FUNCTION PARAMETER

// NUMBER AS FUNCRION PARAMITER

// ARGUMENTS VS PARAMETERS

// ARRAYS AS PARAMETER

// function getFirst(arr) {
//     return arr[2]
// }
// let firstCard = getFirst([10, 2, 5])

// console.log(firstCard)

// REFRACTOR RENDERLEADS() TO USE A PARAMETER 

// CREATE A tabBtn

// SAVE THE TAB URL

// HOW TO GET THE CURRENT TAB

// USE THE CHROME API TO GET THE TAB
// Api: Application programming interface

// DEPLOY THE FINAL VERSION

//       CONGRATS AND RECAP
// const
// addEventListener()
// innerHTML
// input.value
// function parameter
// template string
// localStorage
// the JSON object (javaScript Object Notation) this is a very common way of storing data in web dev.
// object arrays

// Short Note: firstly u addEventListener to a button, fetch out the input.value, take the value store it in an object, convert it to a JSON using JSON.stringify(), Shoving it to localStorage is not big deal u just fetch it out using: JSON.parse() to get it back to js array, u render it out in a function shoving in as parameter, and just use template strings innerHTML to display it on the screen.






//    START AGAIN
// function saveLead() {
//     console.log("button clicked from onclick attribute")
// }
// let myLeads =  `["www.example.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epic.com")
// console.log(myLeads)

let myLeads = []
let oldLeads = []
// turn to array
// myLeads = JSON.parse(myLeads)
// // console.log(myLeads)
// //push the new value to array
// myLeads.push("www.epic.com")
// // console.log(myLeads)
// // turn both pushed array and the one in the array to string
// myLeads = JSON.stringify(myLeads)
// // console.log(myLeads)
// // console.log to no its a string
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

// console.log(ulEl)

const deleteBtn = document.getElementById("delete-btn")
// console.log(deleteBtn)

// tabBtn
const tabBtn = document.getElementById("tab-btn")
// console.log(tabBtn)
// const tabs = [
//     {url: "https://www.linkedin.com/in/pelumhi-sidiq/"}
// ]
tabBtn.addEventListener("click", function() {
    // console.log(tabs[0].url)
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     let activeTab = tabs[0];
    //     let activeTabId = activeTab.id
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
})

    }) 

deleteBtn.addEventListener("dblclick", function() {
    // console.log("Double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
}
)



// localStorage.clear()
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads) //this means when this data is called with the array.this array will become the variable(leads) which accessible to the body of the function
}

function render(leads) {
    let listItems = ""

for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
    <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
    </li>`
    // console.log(listItems)
}
ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    // myLeads.push("www.awesomelead.com")
    // to push value from the inputEl into the myLeads array
    myLeads.push(inputEl.value) //this is to push the inputEl to the myLeads
    inputEl.value = "" //this is to clear the input after the save button is clicked
    // console.log(myLeads)
    render(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    console.log(localStorage.getItem("myLeads"))
    
})

// Local storage

// localStorage.setItem("myName", "Pelumhi")
// let name = localStorage.getItem("myName")
// console.log(name)

// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()


//              PRACTICE

// 1 let & const
// let player = "Pelumhi"
// let opponent = "Nick"
// let game = "AmazingFighter"

// let points = 0
// let hasWon = false

// // playing the game
// points = 100
// hasWon = true

// // announcing the winner
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// 2 log out items in an array
// let myCourse = ["learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function course(log) {
//     for (let i = 0; i < log.length; i++) {
//         console.log(log[i])
//     }
// }
// course(myCourse)

//3 SAVE TO localStorage
// localStorage.setItem("myCredit", "100")
// let myCredit = localStorage.getItem("myCredit")
// console.log(myCredit)

// 4 addEventListener AND OBJECT IN ARRAY
// let data = [
//     {
//         player: "jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]
// let logEl = document.getElementById("log-el")
// logEl.addEventListener("click", function() {
//     console.log(data[0].score)
// })

// 5 GENERATE SENTENCE
// const sentence = generateSentence("Highest Mountain", ["Mountain Everest", "k2"])
// console.log(sentence)

// function generateSentence(desk, arr) {
//     const lastIndex = arr.length - 1
//     let baseString = `The ${arr.length} ${desk} are `
//     for (i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseString += arr[i]
//         } else {
//         baseString += arr[i] + ", "
//         }
//     }
//     return baseString
// }

//  this takes two parameter: a description and an array.

// 6 RENDER IMAGE
// Brooklyn

//  LEARN JAVASCRIPT-OUTRO