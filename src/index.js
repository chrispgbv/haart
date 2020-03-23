import _ from 'lodash';
import {getCanvas} from '../lib';
import {outer} from '../lib';

getCanvas('myCanvas');

outer(getCanvas('myCanvas'),
    '#e4e7f5', 
    400,
    250,
    'axisx'
)
