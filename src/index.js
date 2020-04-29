import _ from "lodash";
import { getCanvas } from "../lib";
import { outer } from "../lib";
import { grid } from "../lib";
import { axis } from "../lib";
import { animated } from "../lib";
import { pos } from "../lib";

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    getCanvas("myCanvas");

    //creates the background for the canvas
    outer(getCanvas("myCanvas"), "	#ffff");

    grid(getCanvas("myCanvas"), "#4159a1", "dotx", 30);

    axis(getCanvas("myCanvas"), "#000000", 100, 150, "px", 50, "py", 30);

    //creates sine curve, ctx =  canvas, step= time , 50 = height of graph
    animated(data);
    pos();
  })
  .catch((err) => {});
