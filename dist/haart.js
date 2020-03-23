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
    var con = document.getElementById(name);
    var ctx = con.getContext('2d');
    return ctx
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

function grid(ctx,w, h,color,style) {


    if(style == 'dotted'){
        for (var x = 25; x <= h; x += 25) {
            ctx.beginPath();
            ctx.setLineDash([1, 5]);
            ctx.moveTo(0, x);
            ctx.lineTo(w, x);
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

    else if(style == 'grid'){

        let s = 20
        let nX = Math.floor(w / s) - 2
        let nY = Math.floor(h / s) - 2
        let pX = w - nX * s
        let pY = h - nY * s
        let pL = pX / 2
        let pR = pX / 2
        let pT = pY / 2
        let pB = pY / 2
        
        ctx.strokeStyle = color;
        ctx.beginPath()
        for (var x = 0; x <= w; x += s) {
           ctx.moveTo(x, pT)
           ctx.lineTo(x, w)
        }
        for (var y = 0; y <= w; y += s) {
           ctx.moveTo(0, y)
           ctx.lineTo(w, y)
        }
        ctx.stroke()
    }

}

/* harmony default export */ __webpack_exports__["default"] = (grid);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: getCanvas, outer, grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./lib/canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCanvas", function() { return _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _outer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outer.js */ "./lib/outer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "outer", function() { return _outer_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.js */ "./lib/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _grid_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });












/***/ }),

/***/ "./lib/outer.js":
/*!**********************!*\
  !*** ./lib/outer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

function outer(ctx,color,w,h,axis){

    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.stroke;

    if (axis == 'axis'){
        ctx.beginPath();
        ctx.moveTo(1, h-1);
        ctx.lineTo(w-1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();

    }
    else if(axis == 'axisx'){
        ctx.beginPath();
        ctx.moveTo(1, h-1);
        ctx.lineTo(w-1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    else if(axis == 'axisy'){
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(1, h-1)
        ctx.lineWidth = 1;
        ctx.stroke();
    }


    console.log(ctx.canvas.width)
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
    400,
    240,
    'axisx'
)

Object(_lib__WEBPACK_IMPORTED_MODULE_1__["grid"])(Object(_lib__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])('myCanvas'),
    400,
    240,
    '#4159a1',
    'dotted',
)


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