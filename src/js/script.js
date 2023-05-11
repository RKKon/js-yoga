'use strict';
import calc from './parts/calc.js';
import form from './parts/form.js';
import slider from './parts/slider.js';
import tabs from './parts/tabs.js';
import timer from './parts/timer.js';

window.addEventListener('DOMContentLoaded', function() {
    //const calc = import('./parts/calc.js');
    // const form = import('./parts/form.js');
    // const slider = import('./parts/slider.js');
    // const tabs = import('./parts/tabs.js');
    // const timer = import('./parts/timer.js');

    slider();

    calc();

    form();
    
    tabs();
    
    timer();
});