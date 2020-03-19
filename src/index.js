import _ from 'lodash';
import {getCanvas} from '../lib';
import {outer} from '../lib';

console.log(getCanvas('myCanvas'));

outer(getCanvas('myCanvas'))