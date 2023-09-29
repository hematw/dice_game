const winner = document.querySelector("h1");
const firstDice = document.querySelector("#first_dice");
const secondDice = document.querySelector("#second_dice");
const btn = document.querySelector("button");


// console.log(first);

btn.addEventListener("click", ()=> {
    let first = Math.floor(Math.random() * 6)+1;
    let second = Math.floor(Math.random() * 6)+1;
    console.log(first);
    console.log(`images/dice${second}.png`);

    firstDice.setAttribute('src', `images/dice${first}.png`)
    secondDice.setAttribute('src', `images/dice${second}.png`)
    if(first>second) {
        winner.innerHTML = " 🚩 Player 1 Won"
    }else if(first<second) {
        winner.innerHTML = "Player 2 Won 🚩 "
    } else {
        winner.innerHTML = "Draw 🤷‍♂️"
    }
})