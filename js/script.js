"use strict";
import Calc from "./parts/calc.js";
import Form from "./parts/form.js";
import Slider from "./parts/slider.js";
import Tabs from "./parts/tabs.js";
import Timer from "./parts/timer.js";
import Modal from "./parts/modal.js";

window.addEventListener("DOMContentLoaded", function () {
  Slider();
  Calc();
  Form();
  Tabs();
  Timer("2024-12-12");
  Modal();
});
