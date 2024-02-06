const Slider = () => {
  let slideIndex = 1, // Параметр текущего слайда
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  const hideSlides = () => [...slides].map(slide => slide.style.display = 'none');

  function showSlide(index) {
    if (index > slides.length) slideIndex = 1
    if (index < 1) slideIndex = slides.length
    hideSlides();
    dots.forEach((item) => item.classList.remove("dot-active"));
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }
  showSlide(slideIndex);

  const slideFocus = () => {
    slides.forEach((slide, index) => {
      slide.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          slidesPlus(1);
          setTimeout(() => slides[(index + 1) % slides.length].focus(), 0);
        } else if (e.key === 'ArrowLeft') {
          slidesPlus(-1);
          setTimeout(() => slides[(index - 1 + slides.length) % slides.length].focus(), 0);
        }
      })

      if (slide.classList.contains('slider-item')) {
        slide.addEventListener('focus', () => slide.classList.add('slider_focus'))
      }
      slide.addEventListener('blur', () => slide.classList.remove('slider_focus'));
    })
  }
  slideFocus();

  function slidesPlus(n) {
    showSlide((slideIndex += n));
  }

  function currentSlide(n) {
    showSlide((slideIndex = n));
  }

  prev.addEventListener("click", function () {
    slidesPlus(-1);
  });

  next.addEventListener("click", function () {
    slidesPlus(1);
  });

  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
};

export default Slider;
