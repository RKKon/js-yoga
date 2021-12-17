// this


/* // 1) просто вызов функции - window или undefined
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
    }
    console.log(sum());
}
showThis(3, 5);
showThis(9, 2); */

//2) метод объекта - this = объект 
/* let obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
        function check() { // уже не работает как объект
            console.log(this);
        }
    }
};
obj.sum(); */

//3) Конструктор (new) - this = новый созданный объект

/* let user = {
    name: 'Jhon'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}


// насильно привязывается контекст вызова
console.log(sayName.call(user, 'Smith')); // насильно связали функцию с данными. так же передает только стр
console.log(sayName.apply(user, ['shadow'] )); // тоже самое, но передает массив.а 
// bind так же насилньо привязывает

function count(number) {
    return this * number;
}

let double = count.bind(2); // то что в bind(2) всегда попадает в this (41 str)

console.log(double(3)); // 3 its number
console.log(double(10)); // 10 its number
 */
// 4) Указание конктретного контекста - call, apply and bind.

/* let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'green'; // как это можно использовать (this)
}); */