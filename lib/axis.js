function axis(ctx,axisx,axisy){

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    if(axisy == undefined){
        ctx.beginPath();
        ctx.moveTo(1, h-1);
        ctx.lineTo(w-1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    else if(axisx == w && axisy == h){
        ctx.beginPath();
        ctx.moveTo(1, axisy-1);
        ctx.lineTo(axisx-1, axisy-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(1, axisy-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    else if(typeof axisx == 'number' && typeof axisy == 'number'){
        ctx.beginPath();
        ctx.moveTo(0, axisy);
        ctx.lineTo(w, axisy)
        ctx.lineWidth = 2;
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(axisx,0);
        ctx.lineTo(axisx, h)
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    else if(axisx == 'middle' && axisy == 'middle'){
        ctx.beginPath();
        ctx.moveTo(0, h/2);
        ctx.lineTo(w, h/2)
        ctx.lineWidth = 2;
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(w/2,0);
        ctx.lineTo(w/2, h)
        ctx.lineWidth = 2;
        ctx.stroke();

    }
}

export default axis;