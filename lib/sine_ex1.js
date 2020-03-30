//creates the sine curve
function sineCurve1(ctx,step,amplitude,frequency){

  ctx.strokeStyle = 'red'
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    //begins new line
    ctx.beginPath();
    ctx.lineWidth = 2;
    //constant x axis
    var x = -1;
  
    ctx.moveTo(x,amplitude);
  
    //sine curve math --> que 
    while(x < w){
      //constant y axis
      let y = h/2 + amplitude * Math.sin((x+step)/frequency);
      ctx.lineTo(x,y);
      x++;
    }
  
    ctx.stroke();
  }

export default sineCurve1;
