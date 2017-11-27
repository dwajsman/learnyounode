
process.argv[0] = 0;
process.argv[1] = 0;


let arr = process.argv.map(Number);


let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum = sum + arr[i]
};

console.log(sum); 