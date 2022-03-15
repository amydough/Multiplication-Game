let x = Math.floor(Math.random() * 13);
let y = Math.floor(Math.random() * 13);

document.getElementById("num1").innerHTML = x;
document.getElementById("num2").innerHTML = y;

// displayMath(x, y);

function playGame(a, b) {
    // let a = Math.floor(Math.random() * 13);
    // let b = Math.floor(Math.random() * 13);
    document.getElementById("answ").innerHTML = a * b;
}

// function displayMath(a, b) {
//     document.getElementById("num1").innerHTML = a;
//     document.getElementById("num2").innerHTML = b;
// }