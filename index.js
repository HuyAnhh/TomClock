const timeEle = document.querySelectorAll(".times")
const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

setInterval(() => {
    const date = new Date;
    timeEle[0].innerHTML = Day[date.getDay()];
    timeEle[1].innerHTML = date.getDate();
    timeEle[2].innerHTML = date.getMonth() + 1;
    timeEle[3].innerHTML = date.getFullYear();
    timeEle[4].innerHTML = date.getHours();
    timeEle[5].innerHTML = date.getMinutes();
    timeEle[6].innerHTML = date.getSeconds();
}, 1000)

const handleChangeMe = document.querySelector(".btnChangeMe")
const background = document.querySelector(".Tom--clock")


handleChangeMe.addEventListener("click", () => {
    let y = Math.floor((Math.random() * 7) + 1)
    background.style.backgroundImage = 'url(Mai'+y+'.jpg)'
})

let i = 0;
let txt = "Chúc bạn Tôm luôn vui tươi và cười xinh như trong ảnh. Ký tên: Nho";
let speed = 50;

const handleTyping = document.querySelector(".btnTyping")

handleTyping.addEventListener("click", function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})
