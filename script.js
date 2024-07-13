const EPS= 0.01; // 許容誤差
const title = document.querySelector("#title");
let clickCount = 0;
// 3次式の係数を設定 (例: f(x) = ax^3 + bx^2 + cx + d)
let a, b, c, d;
let stepButton;
let ai, bi, f; //初期値
const ans = document.querySelector("#answer");

function setGraph(){
    a = document.querySelector("#a").value;
    b = document.querySelector("#b").value;
    c = document.querySelector("#c").value;
    d = document.querySelector("#d").value;
    console.log(a, b, c, d);
    drow_cubic();
}

// 3次式の値を計算
function func3(x) {
    return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + parseInt(d);
}
//微分関数
function func2(x){
    return 3 * a * Math.pow(x, 2) + 2 * b * x + parseInt(c);
}

function calc_nibun(){
    stepButton = document.querySelector("#drawNibun");
    document.querySelector("#drawNewton").style.visibility = "hidden";
    title.textContent = "2分法による計算";
    stepButton.style.visibility = "visible";
    clickCount = 0;
    ai = document.querySelector("#ai").value;
    bi = document.querySelector("#bi").value;
    f = (ai + bi) / 2.0;
    f = nibun_main();
}
function calc_newton(){
    stepButton = document.querySelector("#drawNewton");
    document.querySelector("#drawNibun").style.visibility = "hidden";
    title.textContent = "ニュートン法による計算";
    stepButton.style.visibility = "visible";
    clickCount = 1;
    ai = document.querySelector("#an").value;
    ai = newton_main();
}

drow_canvas();