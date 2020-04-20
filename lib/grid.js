//creates the bg grid
function grid(ctx, color, style,d,axisx,axisy) {
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;

  //creates dotted grid for the x direction

  if(axisx == undefined && axisy == undefined){
    if (style == "dotx") {
        for (var x = d; x <= h; x += d) {
            //line dash makes small dots
          ctx.setLineDash([1, 5]);
    
          lines(ctx, color, 0, x, w, x, 1);
        }
      }
    
      //doty does not work yet
      else if (style == "doty") {
        for (var y = d; y <= w; y +=d) {
          ctx.setLineDash([1, 5]);
          lines(ctx, color, 0,y , w/2, y, 1);
        }
      }
      //todo: add dot both ways
      else if (style == "grid") {

        for (var x = d; x <= w; x +=d) {
          lines(ctx, color, 0, x, w, x, 1);
        }

        for (var y = d; y <= w; y +=d) {
          lines(ctx, color, y, 1, y, w, 1);
        }
      }
      //creates grid only in y direction
      else if (style == "gridy") {
        for (var x = 0; x <= w; x +=d) {
          lines(ctx, color, x, 0, x, w, 2);
        }
      }
    
      //creates grid only in x direction
      else if (style == "gridx") {
        for (var y = 0; y <= w; y +=d) {
          lines(ctx, color, 0, y, w, y, 2);
        }
      }
    }

  }

//function fo rcreating the canvas, created t omake codedmaller.
function lines(ctx, color, moveto1, moveto2, lineto1, lineto2, linewidth) {
  //makes the canvas lines sharper
  let pix = 0.5;

  ctx.beginPath();
  ctx.moveTo(moveto1 + pix, moveto2 + 0.5);
  ctx.lineTo(lineto1 + 0.5, lineto2 + 0.5);
  ctx.lineWidth = linewidth;
  ctx.strokeStyle = color;
  ctx.stroke();
}

export default grid;
