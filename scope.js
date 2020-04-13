// //A variable defined using let or const keywords inside a function cannot coexist
// with global variable of the same name.
//– let and const inside function vs. global variable
const a = 'global a';
const b = 'global b';
{
	let b = 'Something';
	function x() {
		console.log('x() : global a = ' + a);

		console.log('x() : global b = ' + b);
		var a = 1;
	}
}
x();

// The let keyword doesn’t hoist definitions, and we have a global variable a, so
// logically, inside function x() variable a should be taken from global scope, before
// it is defined later with let a = 1 but that’s not what happens.
// If variable a already exists inside a function (and it’s defined using let or const
// keywords) then using a, prior its definition within the function will produce ReferenceError, even if global variable a exists!

//What is Hoisting ??
