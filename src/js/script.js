window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let calc = require('./parts/calc.js');
    let form = require('./parts/form.js');
    let slider = require('./parts/slider.js');
    let tabs = require('./parts/tabs.js');
    let timer = require('./parts/timer.js');

    slider();

    calc();

    form();
    
    tabs();
    
    timer();
});