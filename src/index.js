import _ from 'lodash';
import { getCanvas } from '../lib';
import { outer } from '../lib';
import { grid } from '../lib';
import { axis } from '../lib';
import { animated } from '../lib';
import { axisx } from '../lib';

getCanvas('myCanvas');

outer(getCanvas('myCanvas'),
    '#e4e7f5',
    'axisxm'
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
    30
)

animated();


//creates sine curve, ctx =  canvas, step= time , 50 = height of graph




