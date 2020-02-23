function add(){
    return function(){ console.log('Child function')};
}

function addWith(n){
    return function(x){return n + x;}
}


// const child = add();
// child();
// add()();

const addWith100 = addWith(100);
console.log(addWith100(10));


