// const aFunction = function(){
//     console.log('Het gio');
// };

// setTimeout(aFunction, 5000);

function add(a, b, callback){
    setTimeout(function(){
        if(typeof(a) != 'number' || typeof(b) != 'number'){
            callback('Tam so phai co kieu number', undefined);
        }else{
            callback(undefined, a+b);
        }
    }, 3000);
}

add(4, 5, function(err, total){
    if(err) return console.log(err);
    console.log('Ket qua: ', total);
});



