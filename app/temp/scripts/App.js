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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SmoothScroll = __webpack_require__(1);

var _SmoothScroll2 = _interopRequireDefault(_SmoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var about = document.querySelectorAll("a[href='#about']");
var portfolio = document.querySelector("a[href='#portfolio']");
var contact = document.querySelector("a[href='#contact']");

about.forEach(function (element) {
  element.addEventListener("click", function () {
    var target = document.querySelector(".section_about");
    var topPos = target.offsetTop - 40;
    (0, _SmoothScroll2.default)(document.body, topPos, 1000);
  });
});
portfolio.addEventListener("click", function () {
  var target = document.querySelector(".section_portfolio");
  var topPos = target.offsetTop - 40;
  (0, _SmoothScroll2.default)(document.body, topPos, 1000);
});
contact.addEventListener("click", function () {
  var target = document.querySelector(".section_contact");
  var topPos = target.offsetTop - 40;
  (0, _SmoothScroll2.default)(document.body, topPos, 1000);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var smooth_scroll_to = function smooth_scroll_to(element, target, duration) {
  /**
    https://coderwall.com/p/hujlhg/smooth-scrolling-without-jquery
    Smoothly scroll element to the given target (element.scrollTop)
    for the given duration
      Returns a promise that's fulfilled when done, or rejected if
    interrupted
  */
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject("bad duration");
  }
  if (duration === 0) {
    element.scrollTop = target;
    return Promise.resolve();
  }

  var start_time = Date.now();
  var end_time = start_time + duration;

  var start_top = element.scrollTop;
  var distance = target - start_top;

  // based on http://en.wikipedia.org/wiki/Smoothstep
  var smooth_step = function smooth_step(start, end, point) {
    if (point <= start) {
      return 0;
    }
    if (point >= end) {
      return 1;
    }
    var x = (point - start) / (end - start); // interpolation
    return x * x * (3 - 2 * x);
  };

  return new Promise(function (resolve, reject) {
    // This is to keep track of where the element's scrollTop is
    // supposed to be, based on what we're doing
    var previous_top = element.scrollTop;

    // This is like a think function from a game loop
    var scroll_frame = function scroll_frame() {
      if (element.scrollTop != previous_top) {
        reject("interrupted");
        return;
      }

      // set the scrollTop for this frame
      var now = Date.now();
      var point = smooth_step(start_time, end_time, now);
      var frameTop = Math.round(start_top + distance * point);
      element.scrollTop = frameTop;

      // check if we're done!
      if (now >= end_time) {
        resolve();
        return;
      }

      // If we were supposed to scroll but didn't, then we
      // probably hit the limit, so consider it done; not
      // interrupted.
      if (element.scrollTop === previous_top && element.scrollTop !== frameTop) {
        resolve();
        return;
      }
      previous_top = element.scrollTop;

      // schedule next frame for execution
      setTimeout(scroll_frame, 0);
    };

    // boostrap the animation process
    setTimeout(scroll_frame, 0);
  });
};
exports.default = smooth_scroll_to;

/***/ })
/******/ ]);