//ES6 EcmaScript 6 , JS after 2015
//Fat Arrow Functions

//IIFE = Immediate Invoked Function Expression

(function() {
	console.log('Hello World');
})();

(function(a, b) {
	console.log(a + b);
})(4, 5);

((a, b) => {
	console.log(a + b);
})(9, 9);
