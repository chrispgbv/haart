function animated(data) {
  window.requestAnimationFrame(() => {
    animate(2, data);
  });
}

function animate(step, data) {
  var canvas = document.getElementById("movingCanvas");
  var ctx = canvas.getContext("2d");
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;

  //clears the animation
  ctx.clearRect(0, 0, width, height);

  //creates sine curve, ctx =  canvas, step= time , 50 = height of graph
  sineCurve(ctx, width, 280, step, 50, data);
  ctx.restore();
  window.requestAnimationFrame(() => {
    animate(step + 1, data);
  });
}

let step = 0;

//creates the sine curve
function sineCurve(ctx, w, h, step, amplitude, data) {
  //begins new line
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  //constant x axis
  var x = -1;

  ctx.moveTo(x, amplitude);

  //sine curve math --> que
  while (x < w) {
    //constant y axis
    var y = h / 2 + getData(x + step, data);
    y = ctx.lineTo(x, y);
    x++;
  }

  ctx.stroke();
}

function getData(index, data) {
  return data[index % data.length] / 100;
}

export default animated;