const arr = ['1', '2', '3', '4'];
const res = arr
.map( (el) => parseInt(el) )
.filter( (num) => num%2 )
.reduce( (max, val) => Math.max(max, val), 0 );

console.log(res);

