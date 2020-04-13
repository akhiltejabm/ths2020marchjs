//for Each..., map..., filter..., find ..., some.., every..., reduce

var num = [ 1, 2, 3, 4 ];

var sum = [ 0, 1, 2, 3 ].reduce((accumulator, currentValue)=> {
	return accumulator + currentValue;
});

console.log(sum);
