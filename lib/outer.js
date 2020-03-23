
function outer(ctx,color,w,h,axis){

    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.stroke;

    if (axis == 'axis'){
        ctx.beginPath();
        ctx.moveTo(1, h-1);
        ctx.lineTo(w-1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();

    }
    else if(axis == 'axisx'){
        ctx.beginPath();
        ctx.moveTo(1, h-1);
        ctx.lineTo(w-1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    else if(axis == 'axisy'){
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    }


    console.log(ctx.canvas.width)
}

export default outer;