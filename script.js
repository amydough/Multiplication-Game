// let x = Math.floor(Math.random() * 13);
// let y = Math.floor(Math.random() * 13);

// document.getElementById("myBtn").addEventListener("click", function () {
//     playGame(x, y);
// });

function playGame() {
    let a = Math.floor(Math.random() * 13);
    let b = Math.floor(Math.random() * 13);
    document.getElementById("num1").innerHTML = a;
    document.getElementById("num2").innerHTML = b;
    // document.getElementById("answ").innerHTML = a * b;
}