//const arr = [1, 3, 2, 6, 5];

//const arrSort = arr.sort();

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


const arrSort = arr.sort((a, b) => {
    return b.age - a.age;
});

console.log(arrSort);