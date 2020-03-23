
function grid(ctx,color,style) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    if(style == 'dotted'){
        for (var x = 40; x <= h; x += 40) {
            ctx.beginPath();
            ctx.setLineDash([1, 5]);
            ctx.moveTo(0, x);
            ctx.lineTo(w, x);
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

    else if(style == 'grid'){

        let s = 20
        let nX = Math.floor(w / s) - 2
        let nY = Math.floor(h / s) - 2
        let pX = w - nX * s
        let pY = h - nY * s
        let pL = pX / 2
        let pR = pX / 2
        let pT = pY / 2
        let pB = pY / 2
        
        ctx.strokeStyle = color;
        ctx.beginPath()
        for (var x = 0; x <= w; x += s) {
           ctx.moveTo(x, pT)
           ctx.lineTo(x, w)
        }
        for (var y = 0; y <= w; y += s) {
           ctx.moveTo(0, y)
           ctx.lineTo(w, y)
        }
        ctx.stroke()
    }

}

export default grid