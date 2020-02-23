class Person {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arr = [
    new Person('Huy', 19, 180),
    new Person('Hung', 20, 150),
    new Person('Khang', 21, 115),
    new Person('Lien', 22, 200),
    new Person('Nam', 23, 165)
];

//console.log(arr);

// const isHighEnough = arr.every(function(person){
//     return person.height > 175;
// })

//const isHighEnough = arr.some(person =>  person.height > 175); // arrow function :v

// const isHighEnough = arr.some((person, index, array) =>{
//     console.log(index);
//     //console.log(array);
//     return person.height > 190;
// });

// console.log(isHighEnough);

// const person = arr.findIndex(p => p.height > 160);
// console.log(person);

//arr.forEach(e => console.log(e.name));

// const people = arr.filter(e => e.age > 20);
// console.log(people);