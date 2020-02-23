function a(){
    console.log('a');
}

function b(){
    console.log('b');
}

function c(bl, func1, func2){
    const f = bl ? func1 : func2;
    //console.log(f);
    return f;
}

c(true, a, b;
