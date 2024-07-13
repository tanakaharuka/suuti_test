const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');
// 描画領域の設定
const width = canvas.width;
const height = canvas.height;
const xMin = -3;
const xMax = 3;
const yMin = -3;
const yMax = 3;

// x座標をキャンバスの座標に変換
function xToCanvas(x) {
    return (x - xMin) / (xMax - xMin) * width;
}
// y座標をキャンバスの座標に変換
function yToCanvas(y) {
    return height - (y - yMin) / (yMax - yMin) * height;
}

// キャンバスをクリア
function drow_canvas(){
    ctx.clearRect(0, 0, width, height);
    // x軸とy軸を描画
    ctx.beginPath();
    ctx.moveTo(xToCanvas(xMin), yToCanvas(0));
    ctx.lineTo(xToCanvas(xMax), yToCanvas(0));
    ctx.moveTo(xToCanvas(0), yToCanvas(yMin));
    ctx.lineTo(xToCanvas(0), yToCanvas(yMax));
    ctx.strokeStyle = '#000';
    ctx.stroke();
}
// 3次式のグラフを描画
function drow_cubic(){
    drow_canvas();

    ctx.beginPath();
    ctx.moveTo(xToCanvas(xMin), yToCanvas(func3(xMin)));
    for (let x = xMin; x <= xMax; x += 0.01) {
        ctx.lineTo(xToCanvas(x), yToCanvas(func3(x)));
    }
    ctx.strokeStyle = '#B22222';
    ctx.stroke();
}

function drow_nibun(a, b, c){
    drow_cubic();
    ctx.beginPath();
    ctx.moveTo(xToCanvas(a), yToCanvas(yMin));
    ctx.lineTo(xToCanvas(a), yToCanvas(yMax));
    ctx.strokeStyle = '#f00';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xToCanvas(b), yToCanvas(yMin));
    ctx.lineTo(xToCanvas(b), yToCanvas(yMax));
    ctx.strokeStyle = '#00f';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xToCanvas(c), yToCanvas(yMin));
    ctx.lineTo(xToCanvas(c), yToCanvas(yMax));
    ctx.strokeStyle = '#0f0';
    ctx.stroke();
}

function drow_newton(x){
    drow_cubic();
    ctx.beginPath();
    ctx.moveTo(xToCanvas(xMin), yToCanvas(func2(x) * (xMin - x) + func3(x)));
    ctx.lineTo(xToCanvas(xMax), yToCanvas(func2(x) * (xMax - x) + func3(x)));
    ctx.strokeStyle = '#f00';
    ctx.stroke();
}