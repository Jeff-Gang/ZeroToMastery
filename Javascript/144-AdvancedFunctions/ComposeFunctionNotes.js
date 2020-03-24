// Compose function notes - advanced functions 143

// EXAMPLE
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose (sum, sum)(5);

// so we basically have:
sum(sum(5))

// inner breakdown first
(sum(5))    //<-- here, we have 5 taking the place of a. 
            // Inner brackets first, so this is the first function to run. 
            // since sum = number + 1, you have 5+1, or 6.
5+1 is 6,

(sum(6)5)   // Now the second function runs
sum (which is num +1) Plus the last returned value (6)
sum(6) - or - (num + 1)(6) 
6 + 1 is 7  // <-- this is the sum of the sum. Remember, we're not adding the totals,
            // it's not a traditional sum. Here, "sum" is the variable, which is the number +1
            // so, sum(6) = 7.

//visually it works out like this:
7    6  5
|    |  |            
sum(sum(5)) // -- when sum = (num + 1)                    