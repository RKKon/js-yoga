// function конструктор версия ES6
class User { // через большую первую букву!!!
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hi() {
    console.log(`Hi! ${this.name}`);
  }
  exit() {
    console.log(`User ${this.name} Left`);
  }
}

let dmitri = new User('Dmitri', 646);
let alex = new User('Alex', 224);

console.log(dmitri);
console.log(alex);

dmitri.hi();
alex.exit();

/* // function конструктор старая версия ES5
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hi = function() {
        console.log('Hi! ' + this.name);
    };
}

User.prototype.exit = function (name) {
    console.log('User ' + this.name + ' Left');
};

let dmitri = new User('Dmitri', 646),
    alex = new User('Alex', 224);

console.log(dmitri); 
console.log(alex);

alex.exit(); */