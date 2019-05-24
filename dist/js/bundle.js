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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const accordion = () => {

   let accordion = document.querySelectorAll('#accordion div'),
      accordionBlock = document.querySelectorAll('.accordion-block'),
      accordionHeading = document.querySelectorAll('.accordion-heading');

   accordionBlock.forEach((elem) => {
      setAccord(elem, 'add');  
   });
   
   accordionHeading.forEach((elem2, index) => {
      let accordionHeadingSpan = elem2.querySelector('span');     

      elem2.addEventListener('click', () => {
         setAccord(accordion[index], 'toggle');
         accordion[index].style.marginBottom = '15px';
         accordion[index].style.marginTop = '15px';

         let currentIndex = index;
         accordionHeadingSpan = accordionHeading[currentIndex].querySelector('span');
         accordionHeadingSpan.classList.toggle('active');

         accordionBlock.forEach((elem3, index2) => {
               if(index2 != currentIndex) {
                  setAccord(elem3, 'add');
                  accordionHeadingSpan = accordionHeading[index2].querySelector('span');
                  accordionHeadingSpan.classList.remove('active');    
               }
         });
      });   
   });  

   function setAccord (element, action) {
      if (action == 'add') {
         element.classList.add('hidden-lg');
         element.classList.add('hidden-md');   
         element.classList.add('hidden-sm');   
         element.classList.add('hidden-xs'); 
      }
      
      if (action == 'toggle') {
         element.classList.toggle('hidden-lg');
         element.classList.toggle('hidden-md');   
         element.classList.toggle('hidden-sm');   
         element.classList.toggle('hidden-xs'); 
      }
   }
}

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/feedbackSlider.js":
/*!****************************************!*\
  !*** ./src/js/parts/feedbackSlider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const feedbackSlider = () => {
    let slideIndex = 1,
        items = document.querySelectorAll(".feedback-slider-item"),
        prev = document.querySelector(".main-prev-btn"),
        next = document.querySelector(".main-next-btn");

    const showSlides = (n) => {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }
        items.forEach((item) => {
            item.classList.add("animated");
            item.style.display = "none";
        });
        items[slideIndex - 1].style.display = "block";
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    showSlides(slideIndex);

    prev.addEventListener("click", () => {
        clearInterval(sliderInterval);
        plusSlides(-1);
        items[slideIndex - 1].classList.remove("slideInLeft");
        items[slideIndex - 1].classList.add("slideInRight");
        }),

        next.addEventListener("click", () => {
        clearInterval(sliderInterval);
        plusSlides(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
        });

    let sliderInterval = setInterval (() => {
        plusSlides(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
        }, 6000);
    

    }
module.exports = feedbackSlider;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    let accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
        feedbackSlider = __webpack_require__(/*! ./parts/feedbackSlider.js */ "./src/js/parts/feedbackSlider.js");

    accordion();
    feedbackSlider();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map