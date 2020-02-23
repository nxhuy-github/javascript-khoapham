function Person(name, age, address){
    this.name = name;
    //this.age = age;
    let objAge = age; // private attr age
    this.address = address;

    this.getAge = function(){
        return objAge;
    }

    this.setAge = function(newAge){
        objAge = newAge;
    }
}

const huy = new Person('Huy', 20, 'Quan 5');
console.log(huy);
// huy.age = 21;
// console.log(huy);
console.log(huy.getAge());
huy.setAge(21);
console.log(huy.getAge());