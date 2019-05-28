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
   let accordionHeading = document.querySelectorAll('.accordion-heading'),
       accordionBlock = document.querySelectorAll('.accordion-block');

   accordionBlock.forEach((item) => {
      item.style.display = 'none';
      item.classList.add('animated');
      item.classList.add('fadeInUp');
   });

let activePanel;
accordionHeading.forEach((item, i, accordionHeadings) => {
   item.addEventListener('click', function(e) {
   this.classList.add('ui-accordion-header-active');
   this.nextElementSibling.classList.add('ui-accordion-content-active');
   this.nextElementSibling.style.display = 'block';

   if (activePanel) {
      activePanel.classList.remove('ui-accordion-header-active');
      activePanel.nextElementSibling.classList.remove('ui-accordion-content-active');
      activePanel.nextElementSibling.style.display = 'none';
   }
   activePanel = (activePanel === this) ? 0 : this;
   });
});
};

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

/***/ "./src/js/parts/forms.js":
/*!*******************************!*\
  !*** ./src/js/parts/forms.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const forms = () => {

    const sendForm = (elem) => {

        let form = elem,
            input = elem.querySelectorAll('input'),
            statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');

        form.addEventListener('submit', (event) => {
            let innerCode;
            event.preventDefault();

        let formData = new FormData(elem),
            obj = {};

            formData.forEach((value, key) => {
                obj[key] = value;
            });

        let json = JSON.stringify(obj);

            const postData = () => {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php'); 
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    innerCode = form.innerHTML;
                    form.innerHTML = '';
                    form.appendChild(statusMessage);

                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }

                    });//request
                    request.send(json);
                });// return new Promise
            } //postData

            const clearInput = () => {
                input.forEach((elem) => {elem.value = ''})
            }
            const hideForm = (status) => {
                statusMessage.innerHTML = status;
                let timeLog = 0;
                let hideFormTimer = setInterval(function() {
                    timeLog = timeLog + 20;
                    if (timeLog == 2000) {
                        form.innerHTML = innerCode;
                        clearInput();
                        if (form.className.indexOf('popup') != -1) {
                            let popupClass = document.querySelector('.' + form.className.slice(0, -5));
                            popupClass.style.display = 'none';
                            document.querySelector('body').style.overflow = '';
                        }
                        clearInterval(hideFormTimer);
                    }
                }, 20);
            }
            postData()
                    .then(() => {
                        hideForm('<p>Отправляем...</p>');
                    })
                    .then(() => {
                        hideForm('<p>Сообщение отправлено.<br> Ожидайте звонка.</p>');
                    })
                    .catch(() => {
                        hideForm('<p>Ошибка!</p>');
                    })
        });
    }
    let popupForms = document.querySelectorAll('#form-design, #form-consult, #form-bottom');
        popupForms.forEach((elem) => {sendForm(elem)});
}
module.exports = forms;

/***/ }),

/***/ "./src/js/parts/masks.js":
/*!*******************************!*\
  !*** ./src/js/parts/masks.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const masks = () => {
    let inputTel = document.querySelectorAll('input[type="tel"]');
    let inputText = document.querySelectorAll('input[type="text"]:not([class="promocode"]), textarea');
        inputTel.forEach((elem) => {
            elem.addEventListener("input", mask, false);
        });
        inputText.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[A-Z]/gi, '');
            });
        });

    function mask() {
        let matrix = "+_ (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
}
module.exports = masks;

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
            if (current.classList.contains(click)) {
            return true;
            }
            current = current.parentElement;
        } return false;
        }

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            openPopup();
        });
    });
    close.addEventListener("click", () => {
        closePopup();
    });
    popup.addEventListener("click", (e) => {
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
        while (current != null) {
            if (current.classList.contains(click)) {
                return true;
            }
            current = current.parentElement;
        } return false;
    }
    
    btns.forEach((btn) => { 
        btn.addEventListener("click", () => {
            openPopup()
        });
    });
    close.addEventListener("click", () => {
        closePopup();
    });
    popup.addEventListener("click", (e) => {
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
        popupConsult = __webpack_require__(/*! ./parts/popupConsult.js */ "./src/js/parts/popupConsult.js"),
        forms = __webpack_require__(/*! ./parts/forms.js */ "./src/js/parts/forms.js"),
        masks = __webpack_require__(/*! ./parts/masks.js */ "./src/js/parts/masks.js");

    accordion();
    feedbackSlider();
    calc();
    filter();
    popupGift();
    popupDesign();
    popupConsult();
    forms();
    masks();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map