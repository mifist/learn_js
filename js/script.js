const arr = ['1', '2', '3', '4'];
const res = arr
.map( (el) => parseInt(el) ) // преопразовние в числа
.filter( (num) => num%2 ) // не четные
.reduce( (max, val) => Math.max(max, val), 0 ); // поиск большего числа
console.log(res);

// testing 'Rest' param
function max( ... num ) {
    console.log(num);
}
max(1,4,6,7,8);

// Testing 'Spread' param for arrays
const arr2 = ['1', '2', '3'];
const arr3 = ['5', '8', '10'];
const res2 = Math.max( ... arr2, ... arr3 );
console.log(res2);

// Testing shallow copy arrays
const shallowCopy = [ ... arr2, ... arr3, 568 ];
console.log(shallowCopy);

/*------- Destructuring - Деструктуризация -------*/

