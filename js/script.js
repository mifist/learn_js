'use strict'; // ES6 - строгий режим

var a = 5;
console.log(a);
var leftBorderWidth = 1;
let _new = 2;
const pi = 3.14;

let persone = {
    name: 'John',
    age: 25,
    isMarried: false
};

function start() {
    console.log('js is working');
    console.log(leftBorderWidth);
    console.log( _new );
    console.log( pi );
}
//start();
function start2($obj) {
    console.log($obj);
   // alert('how are you?');
}
// start2(persone.name);
