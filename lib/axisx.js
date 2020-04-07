
let numx = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

function xaxis(ctx, distance) {

    let w = ctx.canvas.width;
    let h = ctx.canvas.height;

    let i = 0;
    for(i = 0; i <= w+2;i += distance){
        lines(ctx,i,(h/2),i,(w-310),1);
    }

    let j = 0
    for (j = 0; j<=w;j += distance + distance){
        if(j <=w/2){
            ctx.font = "10.5px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText('-'+j, j-3, w-300);
        }
        else{
            ctx.font = "10.5px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText(j, j-3, w-300);
        }
    }
}

function lines(ctx, moveto1, moveto2, lineto1, lineto2, linewidth) {

    let pix = 0.5;
    ctx.beginPath();
    ctx.moveTo(moveto1 + 0.5 , moveto2 + 0.5);
    ctx.lineTo(lineto1 + 0.5, lineto2 + 0.5)
    ctx.lineWidth = linewidth;
    ctx.stroke();
}

function axisnum(){
    
}

export default xaxis
