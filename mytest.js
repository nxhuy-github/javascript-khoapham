// [1,2,3,4].forEach(function(i){
//     console.log('processing sync ', i);
// });

// function asyncForEach(arr, cb){
//     arr.forEach(function(){
//         setTimeout(cb, 1000);
//     });
// }

// asyncForEach([1,2,3,4], function(i){
//     console.log('processing async ', i);
// });

// function almostIncreasingSequence(sequence) {
//     return sequence.filter((e, i) => e >= sequence[i+1]).length
// }

// let sequence = [1, 3, 2, 1];

// console.log(almostIncreasingSequence(sequence));

const clickme = {a: ()=>{console.log("Hello")}};

clickme.a();