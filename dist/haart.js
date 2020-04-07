var haart =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/animated_sine.js":
/*!******************************!*\
  !*** ./lib/animated_sine.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animated(){

  var canvas = document.getElementById('movingCanvas');
  var ctx = canvas.getContext('2d');
  var width = ctx.canvas.width;
  var height = ctx.canvas.height; 
  
  //clears the animation 
  ctx.clearRect(0,0,width,height)

  //creates sine curve, ctx =  canvas, step= time , 50 = height of graph
  sineCurve(ctx,width,280,step,50,30);
  ctx.restore();
  
  step +=2;
  
  window.requestAnimationFrame(animated);
  
  }
  let step = 0
  
  //creates the sine curve
  function sineCurve(ctx,w,h,step,amplitude,frequency){
  
  //begins new line
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'red'
  //constant x axis
  var x = -1;
  
  ctx.moveTo(x,amplitude);
  
  //sine curve math --> que 
  while(x < w){
    //constant y axis
    var y = h/2 + amplitude * Math.sin((x+step)/frequency);
    ctx.lineTo(x,y);
    x++;
  }
  
  ctx.stroke();
  
  }


/* harmony default export */ __webpack_exports__["default"] = (animated);


/***/ }),

/***/ "./lib/axis.js":
/*!*********************!*\
  !*** ./lib/axis.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//function for creating the axis
function axis(ctx, axisx, axisy,xline,yline,d) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    //if axis function is below grid function 
    // and grid is dotted this removes the axis from
    // dotted back to normal line
    ctx.setLineDash([0, 0]);

    if (axisy == undefined && axisx == undefined) {

        lines(ctx, 1, h - 1, w - 1, h - 1, 1)
        lines(ctx, 1, 1, 1, h - 1, 1)

    }

    else if (axisx == w && axisy == h) {

        lines(ctx, 1, axisy - 1, axisx - 1, axisy - 1, 1)
        lines(ctx, 1, 1, 1, axisy - 1, 1)

    }

    else if (typeof axisx == 'number' && typeof axisy == 'number') {

        lines(ctx, 0, axisy, w, axisy, 3)
        lines(ctx, axisx, 0, axisx, h, 3)
    }

    else if (axisx == 'middle' && axisy == 'middle') {

        axisx = w/2;
        axisy = h/2;

        lines(ctx, (h / 2), w, (h / 2), 2);

        lines(ctx, (w / 2),(w / 2), h, 2);
    }
    // creates the x for the creation of axis points
    if(xline  == 'pointsx' && yline =='pointsy'){
        let i = axisx;
        let j = 0;

        for(i = axisx; i <= w;i += d){
            lines(ctx,i,axisy,i,axisy+10,1);
        }

        for(j = 0;j <= axisy; j+=d){
            lines(ctx,axisx-10,j,axisx,j,1)
        }

    }

}

function lines(ctx, moveto1, moveto2, lineto1, lineto2, linewidth) {
    let pix = 0.5;
    ctx.beginPath();
    ctx.moveTo(moveto1+ pix, moveto2+ pix);
    ctx.lineTo(lineto1+ pix, lineto2+ pix)
    ctx.lineWidth = linewidth;
    ctx.stroke();
}

/* harmony default export */ __webpack_exports__["default"] = (axis);

/***/ }),

/***/ "./lib/canvas.js":
/*!***********************!*\
  !*** ./lib/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//returns the context so it can be used 
function getCanvas(name) {
    var canvas = document.getElementById(name);
    var ctx = canvas.getContext('2d');

    return ctx;

}
/* harmony default export */ __webpack_exports__["default"] = (getCanvas);

/***/ }),

/***/ "./lib/grid.js":
/*!*********************!*\
  !*** ./lib/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

function grid(ctx, color, style) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    //size variable
    let i = 0;
    let s = 0;
    //finds the best number to use as the size variable
    if (h % 20 == 0 && w%20 == 0) {
        s = 20
    }
    else if (h % 30 == 0 && w%30 == 0) {
        s = 30
    }

    else{
        for(i = 40;i>=0;i--){
            if(w%i == 0 && h%i == 0){
                i = s;
                break;
            }
        }
    }

    //diferent types of grids for the canvas
    if (style == 'dotx') {
        for (var x = s; x <= h; x += s) {
            ctx.setLineDash([1, 5]);
            
            lines(ctx,color,0,x,w,x,1)
        }
    }

    //doty does not work yet
    else if (style == 'doty') {
        for (var x = s; x <= h; x += s) {
            ctx.setLineDash([1, 5]);
            ctx.strokeStyle = color;
            lines(ctx,color,x,0,x,y,2)
        }
    }
    //todo: add dot both ways

    else if (style == 'grid') {

        for (var x = 0; x <= w; x += s) {

            lines(ctx,color,x,0,x,w,1)
        }
        for (var y = 0; y <= w; y += s) {

            lines(ctx,color,0,y,w,y,1)

        }

    }

    else if (style == 'gridy') {

        for (var x = 0; x <= w; x += s) {
            lines(ctx,color,x,0,x,w,2)
        }
        ctx.stroke()
    }
    else if (style == 'gridx') {
        for (var y = 0; y <= w; y += s) {
            lines(ctx,color,0,y,w,y,2)
        }
        ctx.stroke()
    }

}

function lines(ctx, color,moveto1, moveto2, lineto1, lineto2, linewidth) {
    
    //makes the canvas lines sharper
    let pix = 0.5;

    ctx.beginPath();
    ctx.moveTo(moveto1 + pix, moveto2+0.5);
    ctx.lineTo(lineto1 + 0.5, lineto2+0.5);
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}

/* harmony default export */ __webpack_exports__["default"] = (grid);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: getCanvas, outer, grid, axis, animated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./lib/canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCanvas", function() { return _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _outer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outer.js */ "./lib/outer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "outer", function() { return _outer_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.js */ "./lib/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _grid_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _axis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axis.js */ "./lib/axis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axis", function() { return _axis_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _animated_sine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animated_sine.js */ "./lib/animated_sine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return _animated_sine_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });














 




/***/ }),

/***/ "./lib/outer.js":
/*!**********************!*\
  !*** ./lib/outer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

function outer(ctx,color,style){

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;


    if(style == undefined){
        bg(color,w,h)
    }

    if(style == 'gradient'){    
        var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(20, 20, 150, 100);

    }
}

function bg(color,w,h){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.stroke;
}

/* harmony default export */ __webpack_exports__["default"] = (outer);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./lib/index.js");








Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])('myCanvas');

Object(_lib__WEBPACK_IMPORTED_MODULE_1__["outer"])(Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])('myCanvas'),
    '#e4e7f5',
    'axisxm'
)

Object(_lib__WEBPACK_IMPORTED_MODULE_1__["grid"])(Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])('myCanvas'),
    '#4159a1',
    'dotx'
)

Object(_lib__WEBPACK_IMPORTED_MODULE_1__["axis"])(
    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])('myCanvas'), 
    90, 
    170,
    'pointsx',
    'pointsy',
    30
)

Object(_lib__WEBPACK_IMPORTED_MODULE_1__["animated"])();


//creates sine curve, ctx =  canvas, step= time , 50 = height of graph






/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })

/******/ });