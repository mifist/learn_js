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
console.log('Destructuring - Деструктуризация');
/*=---- Objects ----=*/

const person = {
    name : {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27
};
const { 
    name: { 
        first: firstNane, 
        last: lastName 
    } 
} = person;
console.log( firstNane, lastName );

function connect( {
    host = 'localhost',
    port = 12345,
    user = 'guest'
} = {} ) {
    console.log( 'user:', user, 'port:', port, 'host:', host);
}
// console.log --> user: guest port: 12345 host: localhost
connect( { host: 'local1234' } );
// console.log --> user: guest port: 12345 host: local1234

//----------------------------
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};

const { duck, ... otherAnimals } = dict;
console.log(otherAnimals);
// console.log --> { dog: 'wuff', mouse: 'squeak' }

/*=---- Arrays ----=*/

const fib = [1, 1, 2, 3, 5, 8, 13];
const [, a, , b] = fib;
console.log( a, b );
// console.log --> 1 3

//----------------------------
const line = [ [10, 17], [14, 7] ];
const [ [p1x, p1y], [p2x, p2y] ] = line;
console.log(p1x, p1y, p2x, p2y);
// console.log --> 10 17 14 7

//----------------------------
const people = ['percone 01', 'persone 02'];
const [q, w, e = 'persone 03'] = people;
console.log(q, w, e);
// console.log --> percone 01 persone 02 persone 03

//----------------------------
const people2 = ['percone 01', 'persone 02', 'persone 03', 'persone 04'];
const [r, ... others] = people2;
console.log(others);
// console.log --> [ 'persone 02', 'persone 03', 'persone 04' ]

/* TEST =1= */
console.log('--TEST--');

const dict2 = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    humster: 'squeak'
};

const res_dict = Object.entries(dict2) // -1-
.filter( ([ , value]) => value === 'squeak') // -2-
.map( ([key]) => key ); // -3-

console.log(res_dict);
/* -1- */
// console.log --> [ [ 'duck', 'quack' ],
//  [ 'dog', 'wuff' ],
//  [ 'mouse', 'squeak' ],
//  [ 'humster', 'squeak' ] ]
/* -2- */
// console.log --> [ [ 'mouse', 'squeak' ], [ 'humster', 'squeak' ] ]
/* -3- */
// console.log --> [ 'mouse', 'humster' ]


/*------- Template Literals - Шаблонные строки -------*/
console.log('Template strings - Шаблонные строки');

const user = 'Bob';
const num = 34;
const txt = 'Lorem ipsum '+user+' dolor sit amet consectetur adipisicing elit. '+num;
const txt2 = `Hello ${user} you are have the ${num}$`;
console.log(txt);
console.log(txt2);

//----------------------------
const items = ['tes', 'coffee', 'other'];
const tmplHTML = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
        <li>${items[3]}</li>
    </ul>
`;
console.log(tmplHTML);
/* console.log -->
    <ul>
        <li>tes</li>
        <li>coffee</li>
        <li>undefined</li>
    </ul>
*/

/*------- Objects - Объекты -------*/
console.log('Objects - Объекты');

// add prefix in the name of object keys
const prefix = 'pr_';
const obj = {
    [prefix + 'name'] : 'Bob',
    [prefix + 'age'] : 27
};
console.log(obj);
// console.log --> { pr_name: 'Bob', pr_age: 27 }

// copy data from first object to the anothe with highest priority
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};
const admin = {
    user: 'daria',
    pasword: 'qwerty'
};

//Object.assign(defaults, admin);
/* console.log -->
    defaults = { host: 'localhost',
    dbName: 'blog',
    user: 'daria',
    pasword: 'qwerty' }
*/

const assignRes = Object.assign({}, defaults, admin);
console.log(defaults);
// console.log --> { host: 'localhost', dbName: 'blog', user: 'admin' }
console.log(assignRes);
/* console.log -->
    { host: 'localhost',
    dbName: 'blog',
    user: 'daria',
    pasword: 'qwerty' }
*/