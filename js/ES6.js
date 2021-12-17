/* let yourName = 'Alex', // это прием интерполяция.
    age = 25,
    email = 'Alex@mail.ru'; // `` используется для переноса строк, для добавления ${}
console.log(`User ${yourName} ${age} years old have email ${email}`);  */



/* // через var не работает цикл!!!!
function makeArray() {
    var items = []; 

    for (let i = 0; i < 10; i++) { // через var не работает цикл!!!! (var i = 0; i < 10; i++)
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }   
    return items; 
}
var test = makeArray();

test[1]();
test[5](); */


/* // стрелочная функция. --------------------------------

//1) она анонимна, мы не можем задать ей ни какого имени.(нету имени функции) можно поместить в переменую
//2) не сможем управлять обработчиками событий и не сможем запускать эту функцию внутри себя(рекурсия) 
let fun = () => {
    console.log(this);
};
fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {      // this покажет родителя (sayNumber)
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let test = () => {
        console.log(this);
    };
    test();
}); */

/* // можно задать параметры по умолчанию (basis = 2)
function calcOrDouble(number, basis = 2) {

    console.log(number*basis);
} 
calcOrDouble(2,6);
calcOrDouble(3,4); */


/* // Class Классы ES6 -------------------------------

class Rectangle {
    constructor(height, width = 15) {
        this.height = height;
        this.width = width;

    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 20);
console.log(square.calcArea()); */


// операторы разворачивания / Spread (разворачивает массивы)---------------------------------------

let video = ['youtube', 'rutube', 'anidub'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'facebook', 'twitter']; // ... оператор разворачивания. тут всё вывело

console.log(internet);

function logSpread(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 6];

logSpread(...numbers); // работает только благодаря ... (Spread оператору)