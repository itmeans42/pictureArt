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

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const calc = () => {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        calcPrice = document.querySelector('.calc-price')
        promocode = document.querySelector('.promocode');

    let sizeValues = {1: 1000, 2: 2000, 3: 3000, 4: 4000};

    let materialValues = {1: 1000, 2: 2000, 3: 3000};

    let optionsValues = {1: 500, 2: 500, 3: 500};
    
    const countPrice = () => {
        if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
            
            let price = sizeValues[size.options.selectedIndex] + materialValues[material.options.selectedIndex];

            if (options.options.selectedIndex > 0) {
                price = price + optionsValues[options.selectedIndex];
            }
            if (promocode.value === "IWANTPOPART") {
                price = price * 0.7;
            }
            calcPrice.textContent = price;
        } else {
            calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
        }
    }
        
    size.addEventListener('change', () => {
        countPrice();
    });
    material.addEventListener('change', () => {
        countPrice();
    });
    options.addEventListener('change', () => {
        countPrice();
    });
    promocode.addEventListener('input', () => {
        countPrice();
    });
}

module.exports = calc;

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
    const plusSlides = (n, auto=false) => {
        showSlides(slideIndex += n);
        if (!auto) { 
            clearInterval(sliderInterval);
            sliderInterval = timer();
        }
        items[slideIndex - 1].classList.remove(n>0?"slideInRight":"slideInLeft");
        items[slideIndex - 1].classList.add(n>0?"slideInLeft":"slideInRight");  
    }
    showSlides(slideIndex);
    prev.addEventListener("click", () => { plusSlides(-1 ) });
    next.addEventListener("click", () => { plusSlides( 1 ) });
    const timer = () => setInterval(()=> { plusSlides(1,1) }, 5000);
    let sliderInterval = timer();
    }
module.exports = feedbackSlider;

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const filter = () => {
    let menuItems = document.querySelectorAll('.portfolio-menu li'),
        allItems = document.querySelector('.portfolio-menu .all'),
        lovers = document.querySelector('.portfolio-menu .lovers'),
        chef = document.querySelector('.portfolio-menu .chef'),
        girl = document.querySelector('.portfolio-menu .girl'),
        guy = document.querySelector('.portfolio-menu .guy'),
        grandmother = document.querySelector('.portfolio-menu .grandmother'),
        granddad = document.querySelector('.portfolio-menu .granddad'),

        allPictures = document.querySelectorAll('.portfolio-wrapper .all'),
        loversPictures = document.querySelectorAll('.portfolio-wrapper .lovers'),
        chefPictures = document.querySelectorAll('.portfolio-wrapper .chef'),
        girlPictures = document.querySelectorAll('.portfolio-wrapper .girl'),
        guyPictures = document.querySelectorAll('.portfolio-wrapper .guy'),
        noPictures = document.querySelector('.container .portfolio-no');

    const hideAll = () => {
        allPictures.forEach((elem) => {
            elem.style.display = 'none';
        });
        noPictures.style.display = 'none';
        menuItems.forEach((elem2)=> {
            elem2.classList.remove('active');
        }); 
    }

    const chooseItem = (btn, picturesType) => {
        btn.addEventListener('click', () => {
            hideAll();
            picturesType.forEach((elem) => {   
                btn.classList.add('active');
                elem.style.display = 'block';
            });
        });
    }

    const emptyBlock = (btn, block) => {
        btn.addEventListener('click', ()=> {
            hideAll();
            btn.classList.add('active');
            block.style.display = 'block';
        });
    }

    chooseItem(allItems,allPictures);
    chooseItem(lovers,loversPictures);
    chooseItem(chef,chefPictures);
    chooseItem(girl,girlPictures);
    chooseItem(guy,guyPictures);
    emptyBlock(grandmother, noPictures);
    emptyBlock(granddad, noPictures);
}
module.exports = filter;

/***/ }),

/***/ "./src/js/parts/popupConsult.js":
/*!**************************************!*\
  !*** ./src/js/parts/popupConsult.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupConsult() {
    let btns = document.querySelectorAll(".button-consultation"),
        popup = document.querySelector(".popup-consultation"),
        popupDesign = document.querySelector(".popup-design"),
        popupGift = document.querySelector(".popup-gift"),
        close = popup.querySelector(".popup-close"),
        elemsIn = popup.querySelector("form").children;

    const openPopup = () => {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
        for(let i = 0; i < elemsIn.length; i++){
            if(elemsIn[i] != status){
            elemsIn[i].style.display = "block";
            }
        }
    }

    const closePopup = () => {
    popup.style.display = "none";
    document.body.style.overflow = "";
    }

    const parentsOfElements = (elem, click) => {
    let current = elem;
        while (current != null){
            if (current.classList.contains(click)){
            return true;
            }
            current = current.parentElement;
        } return false;
        }

    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            openPopup();
        });
    });
    close.addEventListener("click", function () {
        closePopup();
    });
    popup.addEventListener("click", function (e) {
        if (!parentsOfElements(e.target, "popup-content") &&
        !e.target.classList.contains("popup_close")) {
            closePopup();
        }
    });
}
module.exports = popupConsult;

/***/ }),

/***/ "./src/js/parts/popupDesign.js":
/*!*************************************!*\
  !*** ./src/js/parts/popupDesign.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const popupDesign = () => {
    let btns = document.querySelectorAll(".button-design"),
        popup = document.querySelector(".popup-design"),
        close = popup.querySelector(".popup-close"),
        elemsIn = popup.querySelector("form").children;

    const openPopup = () => {
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
        for(let i = 0; i < elemsIn.length; i++) {
            if(elemsIn[i] != status) {
                elemsIn[i].style.display = "block";
            }
        }
    }

    const closePopup = () => {
        popup.style.display = "none";
        document.body.style.overflow = "";
    }

    const parentsOfElements = (elem, click) => {
    let current = elem;
        while (current != null){
            if (current.classList.contains(click)){
                return true;
            }
            current = current.parentElement;
        } return false;
    }
    
    btns.forEach((btn) => { 
        btn.addEventListener("click", function () {
            openPopup()
        });
    });
    close.addEventListener("click", function () {
        closePopup();
    });
    popup.addEventListener("click", function (e) {
        if (!parentsOfElements(e.target, "popup-content") &&
        !e.target.classList.contains("popup_close")) {
            closePopup();
    }
    });
}
module.exports = popupDesign;

/***/ }),

/***/ "./src/js/parts/popupGift.js":
/*!***********************************!*\
  !*** ./src/js/parts/popupGift.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const popupGift = () => {
    let gift = document.querySelector(".fixed-gift"),
        popup = document.querySelector(".popup-gift"),
        close = popup.querySelector(".popup-close");

    const openPopup = () => {
        pressedBtn = true;
        popup.style.display = "block";
        gift.style.display = "none";
        document.body.style.overflow = "hidden";
    }

    const closePopup = () => {
        popup.style.display = "none";
        document.body.style.overflow = "";
    }

    const parentsOfElements = (elem, click) => {
        let current = elem;
            while (current != null){
            if (current.classList.contains(click)){
                return true;
            }
            current = current.parentElement;
            } return false;
    }

    gift.addEventListener("click", () => {
    openPopup();
    });

    close.addEventListener("click", () => {
    closePopup();
    })

    popup.addEventListener("click", (e) =>  {
        if (!parentsOfElements(e.target, "popup-content") &&
            !e.target.classList.contains("popup_close")) {
                closePopup();
        }
    });
}
module.exports = popupGift;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    let accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
        feedbackSlider = __webpack_require__(/*! ./parts/feedbackSlider.js */ "./src/js/parts/feedbackSlider.js"),
        calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        filter = __webpack_require__(/*! ./parts/filter.js */ "./src/js/parts/filter.js"),
        popupGift = __webpack_require__(/*! ./parts/popupGift.js */ "./src/js/parts/popupGift.js"),
        popupDesign = __webpack_require__(/*! ./parts/popupDesign.js */ "./src/js/parts/popupDesign.js"),
        popupConsult = __webpack_require__(/*! ./parts/popupConsult.js */ "./src/js/parts/popupConsult.js");

    accordion();
    feedbackSlider();
    calc();
    filter();
    popupGift();
    popupDesign();
    popupConsult();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map