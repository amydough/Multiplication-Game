x = 0
y = 0

// document.getElementById("num1").innerHTML = x;
// document.getElementById("num2").innerHTML = y;


function displayMath() {
    x = Math.floor(Math.random() * 13);
    y = Math.floor(Math.random() * 13);
    document.getElementById("num1").innerHTML = x;
    document.getElementById("num2").innerHTML = y;
    document.getElementById("answ").innerHTML = " ";
    return x, y;
}

function checkAns(a, b) {
    // let a = Math.floor(Math.random() * 13);
    // let b = Math.floor(Math.random() * 13);
    document.getElementById("answ").innerHTML = a * b;
}