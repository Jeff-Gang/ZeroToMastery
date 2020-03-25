// New in ES 8:
1. .padstart()
2. .padend()

3. trailing commas
4. Object.values // returns the value of each listed object
5. Object.entries
6. async await

//ES 10
flat // flattens nested arrays - use [list_number_here] to specify how many levels to flatten
flatMap // uses map function, flattens to result to 1 level
trimstart() // trims the empty spaces at beginning of strings
trimend() // trims the empty spaces at end  of strings
.fromEntries//transforms a list of key value pairs into a object
try {       // allows you to try a piece of code and catch it.

} catch {

}

// ES 6 New Looping
for of 
for in

//

//START: trailing commas
const fun = (a,b,c,d,) => {
    console.log(a);
}
fun(1,2,3,4,)
// return-->
1

//useful if you have long strings 
                    a,
                    b,
                    c,
                    d,
                    e,
                    //the last (trailing) comma will not affect 
                    // the output of the function, will not throw error 

4. Object.values // returns the value of each listed object
5. Object.entries

Object.keys

// Example:
let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr. Grinch'
}
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
//console return -->
VM35:7 username0 Santa
VM35:7 username1 Rudolph
VM35:7 username2 Mr. Grinch

//--

// NOW try with Object.values:
Object.values(obj).forEach(value => {
    console.log(value);
})
//console return-->
VM41:2 Santa
VM41:2 Rudolph
VM41:2 Mr. Grinch

// NOW try with Object.entries:
Object.entries(obj).forEach(value => {
    console.log(value);
})
//console return-->
VM70:2 (2) ["username0", "Santa"]
VM70:2 (2) ["username1", "Rudolph"]
VM70:2 (2) ["username2", "Mr. Grinch"]

/* If you wanted to return username lists and 
    display them as usernames and the number, but exclude "username" from each 
    (because it's redundant), and you wanted it to look like Santa0, Rudolph1, 
    etc. you could do:
*/
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
//console return-->
(3) ["Santa0", "Rudolph1", "Mr. Grinch2"]


// 
userProfiles = [['commanderTom', 23], ['hansel', 18], ['commanderBob', 22]]
Object.fromEntries(userProfiles);
//console return -->
{commanderTom: 23, hansel: 18, commanderBob: 22}

// ES 6 New Looping //
for of  // works for strings and arrays
for in // works for objects

//example-->
const basket = ['apples', 'ornages', 'bananas', 'grapes']

//old way of returning an array or string
for ( let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//new way of returning an array or string
for (item of 'basket') {
    console.log(item);
}                            //iterating
//console return-->
VM327:3 apples
VM327:3 ornages
VM327:3 bananas
VM327:3 grapes


const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in detailedBasket) {
    console.log(item);
}
                    //enumerating