window.addEventListener('DOMContentLoaded', function () {

    let accordion = require('./parts/accordion.js'),
        feedbackSlider = require('./parts/feedbackSlider.js'),
        calc = require('./parts/calc.js'),
        filter = require('./parts/filter.js'),
        popupGift = require('./parts/popupGift.js')

    accordion();
    feedbackSlider();
    calc();
    filter();
    popupGift();
});
