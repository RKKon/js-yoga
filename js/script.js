
// для того что бы сначала весь HTML загрузился и только потом скрипты 
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Tabs on page ---------------------------------------------------------------------------

    let infoHeader = document.querySelector('.info-header'),
    headerTab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');  

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // делается как делегирование событий
    infoHeader.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < headerTab.length; i++) {
                if (target == headerTab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
                }
            }
        }
    });

//    -------------------//Timer ---------------------------------------------------------------

    let deadLine = '2021-12-04';

    function gitTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60), // для полученя секунд
            minutes = Math.floor((t/1000/60) % 60), // для полученя минут
            hours = Math.floor(t/(1000 * 60 * 60)); // для полученя часов
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
});