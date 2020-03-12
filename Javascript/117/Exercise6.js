var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("kiwi");

// 4. Remove "Apples" from the array.
array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);

// The whole exercise breaks down to this:

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
undefined
array.shift();
"Banana"
array
(3) ["Apples", "Oranges", "Blueberries"]
array.sort();
(3) ["Apples", "Blueberries", "Oranges"]
array.push("kiwi");
4
array
(4) ["Apples", "Blueberries", "Oranges", "kiwi"]
array.shift();
"Apples"
array
(3) ["Blueberries", "Oranges", "kiwi"]
array.reverse();
(3) ["kiwi", "Oranges", "Blueberries"]
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
undefined
array2
(2) ["Banana", Array(3)]
	0: "Banana"
	1: Array(3)
		0: "Apples"
		1: Array(1)
			0: "Oranges"
			length: 1
			__proto__: Array(0)
		2: "Blueberries"
		length: 3
		__proto__: Array(0)
	length: 2
__proto__: Array(0)

console.log(array2[1] [1] [0]);
VM1894:1 Oranges
undefined