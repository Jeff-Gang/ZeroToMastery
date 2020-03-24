// Advanced Arrays 
// map, filter, reduce <-- when you want to do some sort of loop, you probably want to use one of these

//start with this array:
const array = [1, 2, 10, 16];

// MAP ARRAY: //loop over each element, and return a new array. It is solely concerned about returning a value, or a result.
const mapArray = array.map((num) => {   // }
    return num * 2;                     //  A CLEANER WAY: const mapArray = array.map(num => num * 2)
});                                     // }
console.log('map', mapArray);
// log: map -> [2,4,20,32] 

// if you tried to do this with a forEach statement, it would look like:
const double [];
const newArray = array.forEach((num) => {
    double.push(num *2);
})
// note: every time I use Andrei's code, I get a console error. Nothing runs in my window. 

// FILTER ARRAY - put in a condition to return a filtered array
const filterArray = array.filter(num => {
    return num > 5;
});

// REDUCE ARRAY
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
console.log('reduce', reduceArray);
/ log: reduce 29                                // accumulator is something where you can store 
                                                // what happens in the body of the function 
                                                //  -- every time you iterate, accumulator remembers 
                                                // what was there previously - in reduce, after the 
                                                // function, you have a 2nd parameter and here we can 
                                                // specify what we want the accumulator to start with 
                                                //(like 0) for example

