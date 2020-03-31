//function for creating the axis
function axis(ctx, axisx, axisy) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    ctx.strokeStyle = 'black'
    //if axis function is below grid function 
    // and grid is dotted this removes the axis from
    // dotted back to normal line
    ctx.setLineDash([0, 0]);

    function lines(ctx, moveto1, moveto2, lineto1, lineto2, linewidth) {
        ctx.beginPath();
        ctx.moveTo(moveto1, moveto2);
        ctx.lineTo(lineto1, lineto2)
        ctx.lineWidth = linewidth;
        ctx.stroke();
    }

    if (axisy == undefined) {

       lines(ctx,1,h-1,w-1,h-1,1)

    }

    else if (axisx == w && axisy == h) {

        lines(ctx,1,axisy-1,axisx-1,axisy-1,1)
        lines(ctx,1,1,1,axisy-1,1)

    }

    else if (typeof axisx == 'number' && typeof axisy == 'number') {

        lines(ctx, 0, axisy, w, axisy, 2)
        lines(ctx, axisx, 0, w, axisy, 2)
    }

    else if (axisx == 'middle' && axisy == 'middle') {

        lines(ctx, 0, h / 2, w, h / 2, 2)

        lines(ctx, w / 2, 0, w / 2, h, 2)

    }
}


export default axis;