// let a = 5;
// let b = a;   // truyền tham trị
// a++;
// console.log(b); // => 5

let a = {value: 5};
let b = a;      // truyền tham chiếu
//a.value++;
//a = {value: 10}; // khởi gán lại => a và b không còn liên quan đến nhau 
b.value++;
//console.log(b); // => 6
console.log(a);