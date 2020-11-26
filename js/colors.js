const button = document.querySelector(".btn");
const mainBox = document.querySelector(".main-box");
const text = document.querySelector(".text");
const colors = ["red", "green", "blue","yellow"];


button.addEventListener("click", (event)=> {
    let rnd = Math.floor(Math.random() * colors.length);
    let randomColor = colors[rnd];
    mainBox.style.backgroundColor = randomColor;
    text.textContent = randomColor;

    event.preventDefault();
});