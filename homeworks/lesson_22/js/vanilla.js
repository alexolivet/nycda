//one way to return number divisible by 2
// console.log([1, 2, 3, 4, 5, 6, 7].filter(function(a){return a%2===0;}));


//outputs an array if only divisible by given number x;
// push will simply push the values divisible by 2 
// to the empt result array
var values = [1, 20, 30, 42, 51, 61, 71, 82, 91, 104];

function twos() {
	var result = [];
	for (i = 0; i < values.length; i++) {
		if (values[i] % 2 === 0) {
			result.push(values[i]); 											
		}
	}
	return result;
}

twos();