// function Person(name, age){
//     this.name = name;
//     //let myage = age; => tự private "age" :v cảm thấy không hay lắm :v

//     this.getAge = () => age;

//     // this.setAge = function(newAge){
//     //     age = age + newAge;
//     // }
//     this.setAge = newAge => {age = newAge;};
// }

// const per1 = new Person('Huy', 18);
// console.log(JSON.stringify(per1));
// console.log(per1.getAge());

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     show(){
//         console.log(this);
//     }
// }

// const huy = new Person('Huy', 19);
// console.log(huy);
// huy.show();

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Line {
    
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    mylength(){
        let dx = this.a.x - this.b.x;
        let dy = this.a.y - this.b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

class Triangle {
    
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;     

        this.hi = () => console.log('hi');   
    }

    static compare(triangle1, triangle2){
       // return triangle1.chuVi() > triangle2.chuVi() ? 'CV Tam giac 1 Lon hon' : 'CV Tam giac 1 Nho hon';

    //    if(triangle1.chuVi() > triangle2.chuVi()){
    //        return 'CV Tam giac 1 Lon hon';
    //    }else if(triangle1.chuVi() < triangle2.chuVi()){
    //        return 'CV Tam giac 1 Nho hon';
    //    }else{
    //        return 'CV 2 Tam giac bang nhau';
    //    }

        const cv1 = triangle1.chuVi();
        const cv2 = triangle2.chuVi();
        let msg;
        msg = cv1 > cv2 ? 'TG1 1 lon hon' : 'TG 2 nho hon';
        msg = cv1 === cv2 ? 'Hai TG bang nhau' : msg;
        return msg;

    }

    chuVi(){
        let ab = new Line(this.a, this.b);
        let bc = new Line(this.b, this.c);
        let ac = new Line(this.a, this.c);
        return ab.mylength() + bc.mylength() + ac.mylength();
    }

    show(){
        console.log(this.chuVi());
    }
}

const a = new Point(0,0);
const b = new Point(0,1);
const c = new Point(1,0);


// const ab = new Line(a, b);
// console.log(ab.mylength());
const abc = new Triangle(a, b, c);
// console.log(abc.chuVi());

// abc.hi();

const d = new Point(0,0);
const e = new Point(0,2);
const f = new Point(2,0);
const def = new Triangle(d, e, f);

console.log(Triangle.compare(abc, def));