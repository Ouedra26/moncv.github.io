const text = document.querySelector('.prenomNom');
console.log(text);
const strText = text.textContent;
console.log(strText);
const splitText = strText.split("");
console.log(splitText);
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span>' + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 1000);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('mariam');
    char++
    if (char === splitText.length) {
        ouedraogo();
        return;
    }
}

function ouedraogo() {
    clearInterval(timer);
}