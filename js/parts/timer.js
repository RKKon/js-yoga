const Timer = (deadLine) => {
  function gitTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60), // для полученя секунд
      minutes = Math.floor((t / 1000 / 60) % 60), // для полученя минут
      hours = Math.floor((t / (1000 * 60 * 60)) % 24), // для полученя часов вместе с днем
      days = Math.floor(t / (1000 * 60 * 60 * 24)); // для полученя дней
    //   hours = Math.floor(t / (1000 * 60 * 60)), // для полученя чисто часов
    // экспортировать несколько переменных из функции мы не может для этого надо объект

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  // превращаем в динамическую верстку( не статичная (двигается))

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      days = timer.querySelector(".days"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = gitTimeRemaining(endtime);

      function addZero(num) {
        if (num <= 9) {
          return "0" + num;
        } else {
          return num;
        }
      }

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
    updateClock(); // for fast update
  }

  setClock("timer", deadLine);
};

export default Timer;
