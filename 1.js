//Object : Multiple Name,Value Pairs
var bootcamp = {
	a: 1,
	b: 2,
	class: 2020,
	stack: 'MERN',
	language: 'JavaScript'
};
console.log(bootcamp['a']);
console.log(bootcamp.a);
console.log(bootcamp['language']);
//2Ways of js object properties
//dot operator
// [] operator

var obj = {
	1: 2,
	teja: 'prash'
};

//obj.teja
//obj.1
//obj[1]
//Unlearning and Learning
//Arrays - Group of Elements
var pp = [ 1, 2, 'prash', { a: 1, b: 2 } ];

var tt = [ 1, 2, 'prash', { a: 1, b: 2 }, 'I am Alive' ];

var qq = [ 1, 2, 'prash', { a: 1, b: 2 }, 'I am Alive', [ 1, 2, 3, 4 ] ];
var qqq = [ 1, 2, 'prash', { a: 1, b: 2 }, 'I am Alive', [ 1, 2, 3, 4 ] ];

//Nested Arrays = Multi Dimensional
//1d Array = Group of Elements
var tuktuk = [ 1, 2, 'i m sleeping', 'dont sleep' ];
//2d array = Group of 1d is called 2d

var d2 = [ [ 1, 2, 'i m sleeping', 'dont sleep' ], [ 9, 8, 7, 6 ], [ 11, 12, 44, 100 ] ];

//3d array = group of 2d will be 3d
var d3 = [ [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], [ [ 11, 12, 13 ], [ 14, 15, 16 ] ] ];

// Nested Objects
var doing = {
	a: 1,
	b: [ [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], [ [ 11, 12, 13 ], [ 14, 15, 16 ] ] ],
	hhh: 'Go Corona Go',
	gg: {
		a: 'Cry out loud',
		b: 'Eat and Sleep',
		c: {
			hello: 'world'
		}
	}
};


//Functions

function students(name,age,city){
    console.log(name);
    console.log(age);
    console.log(city);
}
//Invoking - Calling a function with inputs
students('Prash',88,"Hyd");
students("Dax Code", 15, "China");

// console.log("Prashanth");
// console.log(55);
// console.log("Hyd");
