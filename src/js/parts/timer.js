function timer() {
    let deadLine = '2021-12-19';

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
}

module.exports = timer;