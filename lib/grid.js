
function grid(ctx, color, style) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    //size variable
    let s = 0;
    //finds the best number to use as the size variable
    if (h % 20 == 0 && w%20 == 0) {
        s = 20
    }
    else if (h % 30 == 0 && w%30 == 0) {
        s = 30
    }

    else{
        for(var i = 40;i>0;i--){
            if(w%i == 0 && h%i == 0){
                i = s;
                console.log(i)
                break;
        
            }
        }
    }

    function lines(ctx, color,moveto1, moveto2, lineto1, lineto2, linewidth) {
        ctx.beginPath();
        ctx.moveTo(moveto1, moveto2);
        ctx.lineTo(lineto1, lineto2)
        ctx.lineWidth = linewidth;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    //diferent types of grids for the canvas
    if (style == 'dotx') {
        for (var x = s; x <= h; x += s) {
            ctx.setLineDash([1, 5]);
            
            lines(ctx,color,0,x,w,x,1)
        }
    }

    //doty does not work yet
    else if (style == 'doty') {
        for (var x = s; x <= h; x += s) {
            ctx.setLineDash([1, 5]);
            ctx.strokeStyle = color;
            lines(ctx,color,x,0,x,y,2)
        }
    }
    //todo: add dot both ways

    else if (style == 'grid') {

        for (var x = 0; x <= w; x += s) {

            lines(ctx,color,x,0,x,w,2)
        }
        for (var y = 0; y <= w; y += s) {

            lines(ctx,color,0,y,w,y,2)

        }

    }

    else if (style == 'gridx') {

        for (var x = 0; x <= w; x += s) {
            lines(ctx,color,x,0,x,w,2)
        }
        ctx.stroke()
    }
    else if (style == 'gridy') {
        for (var y = 0; y <= w; y += s) {
            lines(ctx,color,0,y,w,y,2)
        }
        ctx.stroke()
    }

    window.requestAnimationFrame(grid)

}

export default grid