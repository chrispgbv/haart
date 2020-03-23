import _ from 'lodash';
import {getCanvas} from '../lib';
import {outer} from '../lib';
import {grid} from '../lib';

getCanvas('myCanvas');

outer(getCanvas('myCanvas'),
    '#e4e7f5', 
    'axisx'
)

grid(getCanvas('myCanvas'),
    '#4159a1',
    'dotted',
)
