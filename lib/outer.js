
function outer(ctx,color,w,h){

    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.stroke;

}

export default outer;