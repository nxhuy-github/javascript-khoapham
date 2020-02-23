class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
}

const huy = new Person('Huy', 20);

huy.height = 180;

//console.log(console);
console.time();

//console.name = 'CON SOL E';
//console.log(console.name);

// function a (){
//     console.log('I am a function');
// }

// a.name1 = 'AAA';
// console.log(a.name1);
// a();

Person.prototype.show = function() {
    console.log(this.name, this.age);
};

huy.show();

