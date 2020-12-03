const mainImage = document.querySelector("#img");
const button = document.querySelector (".btn");

const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]; // <-- это массив картинок

button.addEventListener ('click', ()=>{         // <-- создаем действие для кнопки
    console.log("hello from script file!");
    let rnd = Math.floor (Math.random() * images.length); // <-- создали "великий" рандом, от нуля до края массива
    mainImage.src = images[rnd];
    console.log (" Random number:", rnd);  // <--  пишет в консоль, какая картинка выпала рандомом
});