import _ from 'lodash';
import { getCanvas } from '../lib';
import { outer } from '../lib';
import { grid } from '../lib';
import { axis } from '../lib';
import { animated } from '../lib';
import { axisx } from '../lib';


//teh function has returned teh ctx, so now the othejr functions can use it and manipulate it.
getCanvas('myCanvas');


//creates the background for the canvas 
outer(getCanvas('myCanvas'),
    '#e4e7f5'
)

grid(getCanvas('myCanvas'),
    '#4159a1',
    'dotx'
)

axis(
    getCanvas('myCanvas'), 
    90, 
    170,
    'pointsx',
    'pointsy',
    30,
    40
)

animated();


//creates sine curve, ctx =  canvas, step= time , 50 = height of graph




