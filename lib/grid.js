 //creates the bg grid
function grid(ctx, color, style) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    //size variable
    let i = 0;
    let s = 0;
    //finds the best number to use as the size variable
    if (h % 20 == 0 && w%20 == 0) {
        s = 20
    }
    else if (h % 30 == 0 && w%30 == 0) {
        s = 30
    }

    else{
        for(i = 40;i>=0;i--){
            if(w%i == 0 && h%i == 0){
                i = s;
                break;
            }
        }
    }

    //diferent types of grids for the canvas
    
    //creates dotted grid for the x direction
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

            lines(ctx,color,x,0,x,w,1)
        }
        for (var y = 0; y <= w; y += s) {

            lines(ctx,color,0,y,w,y,1)

        }

    }
    //creates grid only in y direction
    else if (style == 'gridy') {

        for (var x = 0; x <= w; x += s) {
            lines(ctx,color,x,0,x,w,2)
        }
    }

    //creates grid only in x direction
    else if (style == 'gridx') {
        for (var y = 0; y <= w; y += s) {
            lines(ctx,color,0,y,w,y,2)
        }
    }

}

//function fo rcreating the canvas, created t omake code smaller. 
function lines(ctx, color,moveto1, moveto2, lineto1, lineto2, linewidth) {
    
    //makes the canvas lines sharper
    let pix = 0.5;

    ctx.beginPath();
    ctx.moveTo(moveto1 + pix, moveto2+0.5);
    ctx.lineTo(lineto1 + 0.5, lineto2+0.5);
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}

export default grid