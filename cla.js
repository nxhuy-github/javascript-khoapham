class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    show(){
        console.log('Hello, I am ' + this.name);
    }
}

class Child extends Person{
    constructor(name, age, hob){
        super(name,age);
        this.hob = hob;
    }


    show(){     // Override
        console.log('Hi, I am ' + this.name + ', I am ' + this.age + ' year-old');
    }
    play(){
        console.log(this.name + ' is playing ' + this.hob);
    }
}

const ty = new Child('Ti', 3, 'swim');
console.log(ty);
ty.show();
ty.play();