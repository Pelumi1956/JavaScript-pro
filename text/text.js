// WRITE UR FIRST FUNCTION PARAMETER


// const welcomeEl = document.getElementById("welcome-el")
// console.log(welcomeEl)
// function greetUser(name) {
//     welcomeEl.textContent = "welcome back, " + name
// }

// greetUser(name)
const welcomeEl = document.getElementById("welcome-el")
// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name}, ${emoji}`
// }

// greetUser("Howdy", "james", "emoji")


// function add(num1, num2) {
//     return num1 + num2
// }


// console.log( add(3,4) )
// console.log( add(9,102) )

// ARGUMENTS VS PARAMETERS
//            parameter  //while this are created inside of the function
function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting}, ${name}`
}
//            argument  // this are created outside of the function
let hi = "Howdy"
greetUser(hi, "james")


function add(num1, num2) {
    return num1 + num2
}

add(3,4)

// console.log( add(3,4) )
// console.log( add(9,102) )
