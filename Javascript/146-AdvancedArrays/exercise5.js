// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

// My ATTEMPT::
let newArrayUserNames = []
let newArray = array.forEach(user => {
  newArray.push(username + "!");
})
console.log(newArrayUserNames);
// // WRONG!

// //Andrei's answer:
// let newArray = []
// array.forEach(user => {
// 	let { username } = user;
// 	username = username + "!";
// 	newArray.push(username);
// })
// console.log(newArray);

// // this solution also errored in my Chrome browser: 
// // VM235:1 Uncaught SyntaxError: Identifier 'array' has already been declared
// //     at <anonymous>:1:1
// ???? // Don't know the real solution here....


//Create an array using map that has all the usernames with a "? to each of the usernames
// MY ATTEMPT
const mapArray = array.map((username) => {
  return username + "?";
})
console.log(mapArray);

// Andrei's answer:
// let newArray = []
// array.forEach(user => {
// 	let { username } = user;
// 	username = username + "!";
// 	newArray.push(username);
// })
// console.log(newArray);

//Filter the array to only include users who are on team: red
//My REWORKED solution
const filterArray = array.filter(user => {
  return.user.team === "red";
})
console.log(filterArray)

//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator, user) => {
  return accumulator + user.score
}, 0);
console.log(reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
