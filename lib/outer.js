
function outer(ctx,color,axis){

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.stroke;

}

export default outer;