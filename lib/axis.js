//function for creating the axis
function axis(ctx, axisx, axisy,xline,yline,d) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    //if axis function is below grid function 
    // and grid is dotted this removes the axis from
    // dotted back to normal line
    ctx.setLineDash([0, 0]);

    if (axisy == undefined && axisx == undefined) {

        lines(ctx, 1, h - 1, w - 1, h - 1, 1)
        lines(ctx, 1, 1, 1, h - 1, 1)

    }

    else if (axisx == w && axisy == h) {

        lines(ctx, 1, axisy - 1, axisx - 1, axisy - 1, 1)
        lines(ctx, 1, 1, 1, axisy - 1, 1)

    }

    else if (typeof axisx == 'number' && typeof axisy == 'number') {

        lines(ctx, 0, axisy, w, axisy, 3)
        lines(ctx, axisx, 0, axisx, h, 3)
    }

    else if (axisx == 'middle' && axisy == 'middle') {

        axisx = w/2;
        axisy = h/2;

        lines(ctx, (h / 2), w, (h / 2), 2);

        lines(ctx, (w / 2),(w / 2), h, 2);
    }
    // creates the x for the creation of axis points
    if(xline  == 'pointsx' && yline =='pointsy'){
        let i = axisx;
        let j = 0;

        for(i = axisx; i <= w;i += d){
            lines(ctx,i,axisy,i,axisy+10,1);
        }

        for(j = 0;j <= axisy; j+=d){
            lines(ctx,axisx-10,j,axisx,j,1)
        }

    }

    //TODO add so that the d that is inputted will be resized, if it does not match with the x and y cordinate axis 

}

function lines(ctx, moveto1, moveto2, lineto1, lineto2, linewidth) {
    let pix = 0.5;
    ctx.beginPath();
    ctx.moveTo(moveto1+ pix, moveto2+ pix);
    ctx.lineTo(lineto1+ pix, lineto2+ pix)
    ctx.lineWidth = linewidth;
    ctx.stroke();
}

export default axis;