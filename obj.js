//truc tiep

const global = this;
const name = 'KhoaPham';

const obj = {
    name,
    age: 30,
    // show: function(){
    //     console.log(this.name + ' ' + this.age);
    // }

    show: () => {
        console.log(this === global);
        return 123;
    }

};

//console.log(obj.show());

// const name = obj.name;
// const age = obj.age;
// const {name, age} = obj;
// const {salary} = obj;

// console.log(name, age, salary);

console.log(obj);

//tao qua lop doi tuong
    //truoc nam 2015: function class

// function Employee(ten, tuoi){
//     this.name = ten;
//     this.age = tuoi;

//     this.addAge = function(){
//         this.age++;
//     }
// }

// const pho = new Employee('PHO', 18);
// console.log(pho.age);
// pho.addAge();
// console.log('Sau khi tang tuoi:' + pho.age);

// function Point(x, y){
//     this.x = x;
//     this.y = y;

//     this.show = function(){
//         console.log('Chao ' + x + ' ' + y); // x, y la tham so truyen vao 
//     }
// }

// const point1 = new Point(4, 3);
// console.log(point1);
// point1.show();

// function Line(a, b){
//     this.a = a;
//     this.b = b;

//     this.length = function(){
//         let dtx = this.a.x - this.b.x;
//         let dty = this.a.y - this.b.y;
//         return Math.sqrt(Math.pow(dtx, 2) + Math.pow(dty, 2));
//     }
// }

// const pointA = new Point(1, 2);
// const pointB = new Point(3, 4);
// const lineAB = new Line(pointA, pointB);
// console.log(lineAB);

// console.log(JSON.stringify(lineAB));

// const length = lineAB.length();
// console.log(length);

// function Triangle(a, b, c){
//     this.a = a;
//     this.b = b;
//     this.c = c;

//     this.chuVi = function(){
//         let lineab = new Line(this.a, this.b);
//         let linebc = new Line(this.b, this.c);
//         let lineac = new Line(this.a, this.c);
//         return lineab.length() + linebc.length() + lineac.length();
//     }
// }

// const pointC = new Point(0, 0);
// const tri = new Triangle(pointA, pointB, pointC);
// console.log('Chu vi tam giac: ' + tri.chuVi());