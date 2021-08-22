var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn6 = document.getElementById("btn6");
var btn5 = document.getElementById("btn5");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var playerName =document.getElementById("playerName")


function checkFun() {
    if (btn1.innerHTML == "X" && btn2.innerHTML == "X" && btn3.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn1.innerHTML == "O" && btn2.innerHTML == "O" && btn3.innerHTML == "O") {
        alert("Player O Win");
    }
    else if (btn4.innerHTML == "X" && btn5.innerHTML == "X" && btn6.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn4.innerHTML == "O" && btn5.innerHTML == "O" && btn6.innerHTML == "O") {
        alert("Player O Win");
    }
    else if (btn7.innerHTML == "X" && btn8.innerHTML == "X" && btn9.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn7.innerHTML == "O" && btn8.innerHTML == "O" && btn9.innerHTML == "O") {
        alert("Player O Win");
    }
    else if (btn1.innerHTML == "X" && btn4.innerHTML == "X" && btn7.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn1.innerHTML == "O" && btn4.innerHTML == "O" && btn7.innerHTML == "O") {
        alert("Player O Win");
    }
    else if (btn2.innerHTML == "X" && btn5.innerHTML == "X" && btn8.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn2.innerHTML == "O" && btn5.innerHTML == "O" && btn8.innerHTML == "O") {
        alert("Player O Win");
    }
    else if (btn3.innerHTML == "X" && btn6.innerHTML == "X" && btn9.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn3.innerHTML == "O" && btn6.innerHTML == "O" && btn9.innerHTML == "O") {
        alert("Player O Win");
    }
    else if (btn1.innerHTML == "X" && btn5.innerHTML == "X" && btn9.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn1.innerHTML == "O" && btn5.innerHTML == "O" && btn9.innerHTML == "O") {
        alert("Player O Win");
    }
    else if (btn3.innerHTML == "X" && btn5.innerHTML == "X" && btn7.innerHTML == "X") {
        alert("Player X Win");
    } else if (btn3.innerHTML == "O" && btn5.innerHTML == "O" && btn7.innerHTML == "O") {
        alert("Player O Win");
    }

    else if (btn1.innerHTML == "X" && btn2.innerHTML == "O" && btn3.innerHTML == "X"
        && btn4.innerHTML == "X" && btn5.innerHTML == "O" && btn6.innerHTML == "X"
        && btn7.innerHTML == "O" && btn8.innerHTML == "X" && btn.innerHTML == "O") {
        alert("Match Draw !!");
    }
    else if (btn1.innerHTML == "X" && btn2.innerHTML == "O" && btn3.innerHTML == "X"
        && btn4.innerHTML == "X" && btn5.innerHTML == "O" && btn6.innerHTML == "O"
        && btn7.innerHTML == "O" && btn8.innerHTML == "X" && btn9.innerHTML == "X") {
        alert("Match Draw !!");
    }
    else if (btn1.innerHTML == "O" && btn2.innerHTML == "X" && btn3.innerHTML == "O"
        && btn4.innerHTML == "X" && btn5.innerHTML == "O" && btn6.innerHTML == "O"
        && btn7.innerHTML == "X" && btn8.innerHTML == "O" && btn9.innerHTML == "X") {
        alert("Match Draw !!");
    }
    else if (btn1.innerHTML == "X" && btn2.innerHTML == "O" && btn3.innerHTML == "X"
        && btn4.innerHTML == "X" && btn5.innerHTML == "O" && btn6.innerHTML == "O"
        && btn7.innerHTML == "O" && btn8.innerHTML == "X" && btn9.innerHTML == "X") {
        alert("Match Draw !!");
    }
    else if (btn1.innerHTML == "X" && btn2.innerHTML == "O" && btn3.innerHTML == "X"
        && btn4.innerHTML == "X" && btn5.innerHTML == "O" && btn6.innerHTML == "O"
        && btn7.innerHTML == "O" && btn8.innerHTML == "X" && btn9.innerHTML == "X") {
        alert("Match Draw !!");
    }
    else if (btn1.innerHTML == "O" && btn2.innerHTML == "X" && btn3.innerHTML == "O"
        && btn4.innerHTML == "X" && btn5.innerHTML == "X" && btn6.innerHTML == "O"
        && btn7.innerHTML == "O" && btn8.innerHTML == "O" && btn9.innerHTML == "X") {
        alert("Match Draw !!");
    }
}


var flag = 1;
function myFunc_1() {
    if (flag === 1) {
        btn1.innerHTML = "X";
        flag = 2;
    } else {
        btn1.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_2() {
    if (flag === 1) {
        btn2.innerHTML = "X";
        flag = 2;
    } else {
        btn2.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_3() {
    if (flag === 1) {
        btn3.innerHTML = "X";
        flag = 2;
    } else {
        btn3.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_4() {
    if (flag === 1) {
        btn4.innerHTML = "X";
        flag = 2;
    } else {
        btn4.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_5() {
    if (flag === 1) {
        btn5.innerHTML = "X";
        flag = 2;
    } else {
        btn5.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_6() {
    if (flag === 1) {
        btn6.innerHTML = "X";
        flag = 2;
    } else {
        btn6.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_7() {
    if (flag === 1) {
        btn7.innerHTML = "X";
        flag = 2;
    } else {
        btn7.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_8() {
    if (flag === 1) {
        btn8.innerHTML = "X";
        flag = 2;
    } else {
        btn8.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function myFunc_9() {
    if (flag === 1) {
        btn9.innerHTML = "X";
        flag = 2;
    } else {
        btn9.innerHTML = "O";
        flag = 1;
    }
    checkFun()
    name()
}
function name(){
    if (flag === 1){
        playerName.innerHTML = "X"
    }else{
            playerName.innerHTML = "O"
    }   
}

function reset() {
    btn1.innerHTML = "-"
    btn2.innerHTML = "-"
    btn3.innerHTML = "-"
    btn4.innerHTML = "-"
    btn5.innerHTML = "-"
    btn6.innerHTML = "-"
    btn7.innerHTML = "-"
    btn8.innerHTML = "-"
    btn9.innerHTML = "-"
}