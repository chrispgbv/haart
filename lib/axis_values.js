function axis_values(ctx){

var grid_size = 25;
var x_axis_distance_grid_lines = 5;
var y_axis_distance_grid_lines = 5;
var x_axis_starting_point = {number: 1 };
var y_axis_starting_point = {number: 1 };

var w = canvas.width;
var h = canvas.height;

var num_lines_x = Math.floor(h/grid_size);
var num_lines_y = Math.floor(w/grid_size);

// Draw grid lines along X-axis

var i  = 0; 
for(i=0; i<=num_lines_x; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;

    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines)
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#e9e9e9";

    if(i == num_lines_x) {
        ctx.moveTo(0, grid_size * i);
        ctx.lineTo(w, grid_size*i);
    }
    else {
        ctx.moveTo(0, grid_size * i + 0.5);
        ctx.lineTo(w, grid_size*i+0.5);
    }
    ctx.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;

    // If line represents X-axis draw in different color
    if(i == y_axis_distance_grid_lines)
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#e9e9e9";

    if(i == num_lines_y) {
        ctx.moveTo(grid_size * i, 0);
        ctx.lineTo(grid_size*i, h);
    }
    else {
        ctx.moveTo(grid_size * i + 0.5, 0);
        ctx.lineTo(grid_size*i+0.5, h);
    }
    ctx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=1; i<){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(grid_size*i+0.5, -3);
    ctx.lineTo(grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(x_axis_starting_point.number*i, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-grid_size*i+0.5, -3);
    ctx.lineTo(-grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'end';
    ctx.fillText(-x_axis_starting_point.number*i , -grid_size*i+3, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, grid_size*i+0.5);
    ctx.lineTo(3, grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(-y_axis_starting_point.number*i, 8, grid_size*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<x_axis_distance_grid_lines){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -grid_size*i+0.5);
    ctx.lineTo(3, -grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(y_axis_starting_point.number*i, 8, -grid_size*i+3);
}

}

export default axis_values;