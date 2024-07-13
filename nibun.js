/**
 * 2分法による根の計算
 */
function nibun_main() {
    if(func3(f) * func3(ai) < 0) {
        bi = f; // 式(1.2)
    }else {
        ai = f; // 式(1.3)
    }
    clickCount++;

    f = nibun(ai, bi); // 解の計算
    ans.textContent = "計算回数：" + clickCount + "　　x = " + f;
    console.log(Math.abs(ai - bi));
    drow_nibun(ai, bi, f);
    if(Math.abs(ai - bi) < EPS ){
        stepButton.style.visibility = "hidden";
    }
    return f;
}

/**
 * 実際の計算部分
 * @param {number} a 計算範囲
 * @param {number} b 計算範囲
 * @return {number} 近似解
 */
function nibun(a, b) {
  let c;

  //do {
    c = (a + b) / 2.0; // 2分計算
    console.log(c);
    if(func3(c) * func3(a) < 0) {
        b = c; // 式(1.2)
    }else {
        a = c; // 式(1.3)
    }
  //} while (Math.abs(a - b) > EPS); // 収束判別　式(1.4)の変形
  return c;
}