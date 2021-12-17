function calc() {
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
}

module.exports = calc;