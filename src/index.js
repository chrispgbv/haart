import _ from "lodash";
import { getCanvas } from "../lib";
import { outer } from "../lib";
import { grid } from "../lib";
import { axis } from "../lib";
import { animated } from "../lib";
import { pos } from "../lib";
//teh function has returned teh ctx, so now the othejr functions can use it and manipulate it.
getCanvas("myCanvas");

//creates the background for the canvas
outer(getCanvas("myCanvas"), "	#ffff");

grid(getCanvas("myCanvas"), "#4159a1", "dotx",30);

axis(getCanvas("myCanvas"),'#000000',100,150,'px',50,'py',30);

//creates sine curve, ctx =  canvas, step= time , 50 = height of graph
animated(); 

pos();