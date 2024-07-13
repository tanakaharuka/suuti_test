/**
 * ニュートン法による根の計算
 */
function newton_main() {
    let b;

    b = ai - func3(ai) / func2(ai); // 式(1.9)
    console.log(b);
    drow_newton(b);
    ans.textContent = "計算回数：" + clickCount + "　　x = " + b;
    if (Math.abs(ai - b) < EPS) stepButton.style.visibility = "hidden";  // 収束判定
    else ai = b;
    if (clickCount++ > 20) return; //解が発散する場合
    console.log("近似解 x = " + b);
    return b;
}