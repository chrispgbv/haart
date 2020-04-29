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
function animated(data) {
  window.requestAnimationFrame(() => {
    animate(1, data);
  });
}

function animate(step, data) {
  var canvas = document.getElementById("movingCanvas");
  var ctx = canvas.getContext("2d");
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;

  //clears the animation
  ctx.clearRect(0, 0, width, height);

  //creates sine curve, ctx =  canvas, step= time , 50 = height of graph
  sineCurve(ctx, width, 280, step, 50, data);
  ctx.restore();
  window.requestAnimationFrame(() => {
    animate(step + 1, data);
  });
}

let step = 0;

//creates the sine curve
function sineCurve(ctx, w, h, step, amplitude, data) {
  //begins new line
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  //constant x axis
  var x = -1;

  ctx.moveTo(x, amplitude);

  //sine curve math --> que
  while (x < w) {
    //constant y axis
    var y = h / 2 + getData(x + step, data);
    y = ctx.lineTo(x, y);
    x++;
  }

  ctx.stroke();
}

function getData(index, data) {
  return data[index % data.length] / 100;
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
function axis(ctx, color, axisx, axisy, px, d1,py, d2) {
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;

  ctx.strokeStyle = color;

  //if axis function is below grid function
  // and grid is dotted this removes the axis from
  // dotted back to normal line
  ctx.setLineDash([0, 0]);

  //if the axis is undefined in both direction creates it at the far left corner like a normal graph
  if (axisy == undefined && axisx == undefined) {
    lines(ctx, 1, h - 1, w - 1, h - 1, 1);
    lines(ctx, 1, 1, 1, h - 1, 1);
  }

  //the same as above
  else if (axisx == w && axisy == h) {
    lines(ctx, 1, axisy - 1, axisx - 1, axisy - 1, 1);
    lines(ctx, 1, 1, 1, axisy - 1, 1);
  }

  //if axisx and axis y are numbers the axis will be created inwards to the number that has been created.
  else if (typeof axisx == "number" && typeof axisy == "number") {
    lines(ctx, 0, axisy, w, axisy, 3);
    lines(ctx, axisx, 0, axisx, h, 3);
  }

  // if axisy and axisx are inputed as middle the x and y axis will be created in the center of the canvas
  else if (axisx == "middle" && axisy == "middle") {
    axisx = w / 2;
    axisy = h / 2;

    lines(ctx, h / 2, w, h / 2, 2);

    lines(ctx, w / 2, w / 2, h, 2);
  }

  // creates the x for the creation of axis points as pf now only at the positive x axis
  if (px == "px" && py == "py") {
    let i = axisx;
    let j = 0;
    let k = 0;
    let l = 0;

    //creates positive x axis points
    for (i = axisx; i <= w; i += d1) {
      lines(ctx, i, axisy, i, axisy + 10, 1);
    }

    //create negative y axis points
    for (l = axisy; l >= 0; l -= d2) {
      lines(ctx, axisx, l, axisx - 10, l, 1);
    }

    //creates positive y axis points
    for (j = axisy; j <= h; j += d2) {
      lines(ctx, axisx - 10, j, axisx, j, 1);
    }
    //creates negative x axis points
    for (k = axisx; k >= 0; k -= d1) {
      lines(ctx, k, axisy, k, axisy + 10, 1);
    }
  }

    else if(px =='px' && py == undefined){
      let i = 0;
      let k = 0;
            //creates positive x axis points
      for (i = axisx; i <= w; i += d1) {
        lines(ctx, i, axisy, i, axisy + 10, 1);
      }

      //creates negative x axis points
      for (k = axisx; k >= 0; k -= d1) {
        lines(ctx, k, axisy, k, axisy + 10, 1);
      }
    }
}

function lines(ctx, moveto1, moveto2, lineto1, lineto2, linewidth) {
  let pix = 0.5;
  ctx.beginPath();
  ctx.moveTo(moveto1 + pix, moveto2 + pix);
  ctx.lineTo(lineto1 + pix, lineto2 + pix);
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
  var ctx = canvas.getContext("2d");

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
//creates the bg grid
function grid(ctx, color, style,d,axisx,axisy) {
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;

  //creates dotted grid for the x direction

  if(axisx == undefined && axisy == undefined){
    if (style == "dotx") {
        for (var x = d; x <= h; x += d) {
            //line dash makes small dots
          ctx.setLineDash([1, 5]);
    
          lines(ctx, color, 0, x, w, x, 1);
        }
      }
    
      //doty does not work yet
      else if (style == "doty") {
        for (var y = d; y <= w; y +=d) {
          ctx.setLineDash([1, 5]);
          lines(ctx, color, 0,y , w/2, y, 1);
        }
      }
      //todo: add dot both ways
      else if (style == "grid") {

        for (var x = d; x <= w; x +=d) {
          lines(ctx, color, 0, x, w, x, 1);
        }

        for (var y = d; y <= w; y +=d) {
          lines(ctx, color, y, 1, y, w, 1);
        }
      }
      //creates grid only in y direction
      else if (style == "gridy") {
        for (var x = 0; x <= w; x +=d) {
          lines(ctx, color, x, 0, x, w, 2);
        }
      }
    
      //creates grid only in x direction
      else if (style == "gridx") {
        for (var y = 0; y <= w; y +=d) {
          lines(ctx, color, 0, y, w, y, 2);
        }
      }
    }

  }

//function fo rcreating the canvas, created t omake codedmaller.
function lines(ctx, color, moveto1, moveto2, lineto1, lineto2, linewidth) {
  //makes the canvas lines sharper
  let pix = 0.5;

  ctx.beginPath();
  ctx.moveTo(moveto1 + pix, moveto2 + 0.5);
  ctx.lineTo(lineto1 + 0.5, lineto2 + 0.5);
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
/*! exports provided: getCanvas, outer, grid, axis, animated, pos */
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

/* harmony import */ var _pos_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pos.js */ "./lib/pos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pos", function() { return _pos_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

// imports all the js functions so that when npx webpack is run they are compiled to haart.js the library




















/***/ }),

/***/ "./lib/outer.js":
/*!**********************!*\
  !*** ./lib/outer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function outer(ctx, color) {
  //gets the height and iwdth of the canvas
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
  ctx.stroke;
}

/* harmony default export */ __webpack_exports__["default"] = (outer);


/***/ }),

/***/ "./lib/pos.js":
/*!********************!*\
  !*** ./lib/pos.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function pos(){

    console.log('hei')
    
    let canvases = document.querySelectorAll('canvas')

    canvases[0].style.position = 'absolute';
    canvases[1].style.position = 'absolute';

}

/* harmony default export */ __webpack_exports__["default"] = (pos);

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








fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])("myCanvas");

    //creates the background for the canvas
    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["outer"])(Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])("myCanvas"), "	#ffff");

    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["grid"])(Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])("myCanvas"), "#4159a1", "dotx", 30);

    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["axis"])(Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])("myCanvas"), "#000000", 100, 150, "px", 50, "py", 30);

    //creates sine curve, ctx =  canvas, step= time , 50 = height of graph
    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["animated"])(data);
    Object(_lib__WEBPACK_IMPORTED_MODULE_1__["pos"])();
  })
  .catch((err) => {});


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