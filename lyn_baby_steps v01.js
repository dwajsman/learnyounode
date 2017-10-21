let a0 = process.argv[0];
let a1 = process.argv[1];

let a = process.argv.map(Number);

a[0] = a0;
a[1] = a1;

console.log(a);
//console.log(a[2]+a[3]);