console.time('First Snippet');
const tt = (yy) => {
	if (yy <= 1) {
		return 1;
	} else {
		return yy * tt(yy - 1);
	}
};
console.log(tt(55));
console.timeEnd('First Snippet');

console.time('Second Snippet');
const aa = (aaa) => {
	return bb(aaa);
};
function bb(lulu) {
	return lulu ** lulu;
}

console.log(aa(9));
console.timeEnd('Second Snippet');

//Recursion
//A function calling itself is a Recursive Function
