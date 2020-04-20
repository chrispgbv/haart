//function for creating the axis
function axis(ctx, color, axisx, axisy, px, d1,py, d2) {
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;

  ctx.strokeStyle = color;

  //if axis function is below grid function
  // and grid is dotted this removes the axis from
  // dotted back to normal line
  ctx.setLineDash([0, 0]);

  //if the axis is undefined in both direction creates it at the far left corner like a normal graph
  if (axisy == undefined && axisx == undefined) {
    lines(ctx, 1, h - 1, w - 1, h - 1, 1);
    lines(ctx, 1, 1, 1, h - 1, 1);
  }

  //the same as above
  else if (axisx == w && axisy == h) {
    lines(ctx, 1, axisy - 1, axisx - 1, axisy - 1, 1);
    lines(ctx, 1, 1, 1, axisy - 1, 1);
  }

  //if axisx and axis y are numbers the axis will be created inwards to the number that has been created.
  else if (typeof axisx == "number" && typeof axisy == "number") {
    lines(ctx, 0, axisy, w, axisy, 3);
    lines(ctx, axisx, 0, axisx, h, 3);
  }

  // if axisy and axisx are inputed as middle the x and y axis will be created in the center of the canvas
  else if (axisx == "middle" && axisy == "middle") {
    axisx = w / 2;
    axisy = h / 2;

    lines(ctx, h / 2, w, h / 2, 2);

    lines(ctx, w / 2, w / 2, h, 2);
  }

  // creates the x for the creation of axis points as pf now only at the positive x axis
  if (px == "px" && py == "py") {
    let i = axisx;
    let j = 0;
    let k = 0;
    let l = 0;

    //creates positive x axis points
    for (i = axisx; i <= w; i += d1) {
      lines(ctx, i, axisy, i, axisy + 10, 1);
    }

    //create negative y axis points
    for (l = axisy; l >= 0; l -= d2) {
      lines(ctx, axisx, l, axisx - 10, l, 1);
    }

    //creates positive y axis points
    for (j = axisy; j <= h; j += d2) {
      lines(ctx, axisx - 10, j, axisx, j, 1);
    }
    //creates negative x axis points
    for (k = axisx; k >= 0; k -= d1) {
      lines(ctx, k, axisy, k, axisy + 10, 1);
    }
  }

    else if(px =='px' && py == undefined){
      let i = 0;
      let k = 0;
            //creates positive x axis points
      for (i = axisx; i <= w; i += d1) {
        lines(ctx, i, axisy, i, axisy + 10, 1);
      }

      //creates negative x axis points
      for (k = axisx; k >= 0; k -= d1) {
        lines(ctx, k, axisy, k, axisy + 10, 1);
      }
    }
}

function lines(ctx, moveto1, moveto2, lineto1, lineto2, linewidth) {
  let pix = 0.5;
  ctx.beginPath();
  ctx.moveTo(moveto1 + pix, moveto2 + pix);
  ctx.lineTo(lineto1 + pix, lineto2 + pix);
  ctx.lineWidth = linewidth;
  ctx.stroke();
}

export default axis;
