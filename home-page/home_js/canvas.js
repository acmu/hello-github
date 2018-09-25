var setFaceHeight = function() {
  var faceWrapEle = document.querySelector('.face_wrap');
  var faceEle = document.querySelector('.face');
  console.log(faceEle);
  faceWrapEle.style.height = window.innerHeight+'px';
  faceEle.style.top = '50%';
}

var loadInit = function() {
  setFaceHeight();
}

//main
loadInit();
let canvas = document.querySelector('#canvas');
var ballList = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.onresize = function () {
  setFaceHeight();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
let ctt = canvas.getContext('2d');

window.onload = function () {
  requestAnimationFrame(render);
}

function random(min, max) {
  return (max - min) * Math.random() + min;
}

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(18, 45);
  this.a = 1;
  this.colorList = ['#FF00CC', '#FF3333', '#33FFCC', '#FFCC66', '#FFC0CB', '#33B5E5', '#0099CC', '#AA66CC', '#9933CC', '#99CC00', '#669900', '#FFBB33', '#FF8800', '#FF4444', '#CC0000'];
  this.color = this.colorList[Math.floor(random(0, this.colorList.length - 1))];
  this.vx = random(-5, 5);
  this.vy = random(-5, 5);
  this.va = 0.97;
  this.vr = -0.6;
}
Ball.prototype = {
  draw: function () {
    ctt.beginPath();
    ctt.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctt.fillStyle = this.color;
    ctt.globalAlpha = this.a;
    ctt.globalCompositeOperation = 'lighter';
    ctt.fill();
    this.updata();
  },
  updata: function () {
    this.x += this.vx;
    this.y += this.vy;
    this.a *= this.va;
    if (this.r + this.vr > 3) {
      this.r += this.vr;
    }
  }

}
var mouseListener = function (e) {
  for (let i = 0; i < Math.floor(random(1, 3)); i++) {
    ballList.push(new Ball(e.clientX, e.clientY));
  }
}
document.querySelector('.face_wrap').addEventListener('mousemove', mouseListener);
//document.querySelector('.canvas_mouse').addEventListener('mousemove', mouseListener);
//document.querySelector('.canvas_mouse').addEventListener('mousemove', mouseListener);

function render() {
  ctt.clearRect(0, 0, canvas.width, canvas.height);
  ballList.forEach(function (item) {
    item.draw();
  })
  if (ballList.length > 600) {
    var tem = ballList.length - 100;
    ballList.splice(0, tem);
  }
  if (ballList.length > 600)
    console.log(ballList.length);
  requestAnimationFrame(render);
}
