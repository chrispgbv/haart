
function outer(ctx,color,style){

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;


    if(style == undefined){
        bg(color,w,h)
    }

    if(style == 'gradient'){    
        var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(20, 20, 150, 100);

    }
}

function bg(color,w,h){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.stroke;
}

export default outer;