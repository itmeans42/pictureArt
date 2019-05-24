window.addEventListener('DOMContentLoaded', function () {

    'use strict'
    
    let accordion = require('./parts/accordion.js'),
        feedbackSlider = require('./parts/feedbackSlider.js');

    accordion();
    feedbackSlider();
});
