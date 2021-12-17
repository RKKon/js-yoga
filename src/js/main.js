// для того что бы сначала весь HTML загрузился и только потом скрипты 
window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // Tabs on page ---------------------------------------------------------------------------

    let infoHeader = document.querySelector('.info-header'),
        headerTab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let descriptionBtn = document.querySelector('.description-btn');    
    function tabMore() {
        descriptionBtn.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('.more-splash');
            document.body.style.overflow = 'hidden';
        });
    }
    tabMore();

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // делается как делегирование событий
    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < headerTab.length; i++) {
                if (target == headerTab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    
    //Timer -------------------------------------------------------

    let deadLine = '2021-12-04';

    function gitTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60), // для полученя секунд
            minutes = Math.floor((t / 1000 / 60) % 60), // для полученя минут
            hours = Math.floor(t / (1000 * 60 * 60)); // для полученя часов
        //hours = Math.floor(t/(1000/60/60) % 24); // для полученя часов вместе с днем
        //hours = Math.floor(t/(1000 * 60 * 60 * 24)); // для полученя дней

        // экспортировать несколько переменных из функции мы не может для этого надо объект

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // превращаем в динамическую верстку( не статичная (двигается))

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = gitTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }

    setClock('timer', deadLine);

    // Modal in timer -------------------------------------------------------------------------

    let btnMore = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');
 
    btnMore.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('.more-splash');
        document.body.style.overflow = 'hidden'; //при модальном окне нельзя прокручивать стр на сайте(if need
    });

    popupClose.addEventListener('click', function () {
        overlay.style.display = 'none';
        btnMore.classList.remove('.more-splash');
        document.body.style.overflow = '';
    });


    // Form -----------------------------------------------

    let message = {
        loading: 'Loading...',
        success: 'Thank you! Soon we will call you.',
        failure: 'Sorry something went wrong', 
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formContacts = document.querySelector('#form');
        
        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //вместо JSON
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 

        let formData = new FormData(form);

        let obj = {}; // используется при др манипуляциях но и для JSON
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); 

        request.send(json);

        // Для наблюдения за изменениями сос-ния нашего запроса
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
                //     let data = JSON.parse(request.response); 
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    // Contacts form -----------------------------------------------
    formContacts.addEventListener('submit', function(event) {
        event.preventDefault();
        formContacts.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //вместо JSON
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 

        let formData = new FormData(form);

        let obj = {}; // используется при др манипуляциях но и для JSON
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); 

        request.send(json);

        // Для наблюдения за изменениями сос-ния нашего запроса
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
                //     let data = JSON.parse(request.response); 
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    // Slider ------------------------------------------------------

    let slideIndex = 1, // Параметр текущего слайда
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(n) {

        if(n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        // slides.forEach((item) => item.style.display = 'none'); // newest and better way to do
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    showSlides(slideIndex);

    function slidesPlus(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        slidesPlus(-1);
    });

    next.addEventListener('click', function() {
        slidesPlus(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        totalSum = 0;

        totalValue.innerHTML = 0;
 
    persons.addEventListener('input', function() {
        personsSum = +this.value; // можно personsSum.value;
        totalSum = (personsSum + daysSum) * 4000; // 4000 от заказчика

        if (restDays.value == '' || restDays.value == 0 || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        totalSum = (personsSum + daysSum) * 4000; // 4000 от заказчика

        if (persons.value == '' || restDays.value == 0 || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    place.addEventListener('change', function() {
        if(persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = totalSum; // если не делать этого то при переключении будет увеличиваться сумма
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }

    });



});




    /* // Modal in Tabs -----------------------------------------------------------

    //let descriptionBtn = document.querySelectorAll('.description-btn');
    let infoTabContent = document.querySelectorAll('.info-tabcontent');
    

       
    
    function showOverlay() {
        overlay.style.display = 'block';
        overlay.classList.add('.more-splash');
        document.body.style.overflow = 'hidden'; //при модальном окне нельзя прокручивать стр на сайте(if need
    } 

    function hideOverlay() {
        overlay.style.display = 'block';
        overlay.classList.remove('.more-splash');
        document.body.style.overflow = '';
    }

    descriptionBtn.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            for (let i = 0; i < infoTabContent.length; i++ ) {
                if (target == infoTabContent[i]) {
                    showOverlay(i);
                    hideOverlay(0); 
                    break;
                }
            }
        }
    }); */