import _ from 'lodash';
import {getCanvas} from '../lib';
import {outer} from '../lib';
import {grid} from '../lib';

getCanvas('myCanvas');

outer(getCanvas('myCanvas'),
    '#e4e7f5', 
    400,
    240,
    'axisx'
)

grid(getCanvas('myCanvas'),
    400,
    240,
    '#4159a1',
    'dotted',
)
