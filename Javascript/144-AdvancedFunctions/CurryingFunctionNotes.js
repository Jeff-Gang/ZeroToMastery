//Currying function notes
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

// This runs a function consecutively, so when we run 
// the above example of curriedMultiply(3), we get:
(b) => a * b ;

// -- explanation:
function (a) // gets run first, so it returns
(b) => a * b ;

// then, 
a * b //gets run.

// so if you wrote:
curriedMultiply(3)(4);  // you would get:
12
                        // because,
(a) =>  runs
(b) => which runs a * b // so,

3 * 4 = 12

(a) => (b) // which is 3 * 4