// const imgs = [
//     "images/prof.JPG",
//     "images/ghost 2 - Copy.jpg",
//     "images/IMG_0957.JPG"
// ]
// let container = document.getElementById("container")
// console.log(container)

// function renderImg() {
//     let imgDom = ""
//     for (let i = 0; i < imgs.length; i++) {
//         container.innerHTML += `<img class="team-img" src="${imgs[i]}"`
//     }
// }
// renderImg()

const imgs = [
    "prof.JPG",
    "ghost 2 - Copy.jpg",
    "IMG_0957.JPG"
];
const container = document.getElementById("container")
// console.log(container)

function renderImg() {
    let imgDom = ""
    for (let i = 0; i < imgs.length; i++) {
        imgDom += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}" width="100" height="100">`
    }
    container.innerHTML = imgDom
}
renderImg()

// imgDom += `<img  class="team-img" src="${imgs[i]}"`
// container.innerHTML = imgDom
//let imgDom = ""