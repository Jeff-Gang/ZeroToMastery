/* by reference vs. by value
primitive types are immutable. 
in order to change them, we need o remove the type and move it from memory and 
create something new. This is called pass by value.*/
var a = 5;
var b = a;

b++;

console.log(a)
console.log(b)
//returns-->
5
6
//<-- the "5" got copied from a to b.

/*Objects on the other hand, pass by reference.
What this means is that :*/
let obj1 = {name: 'yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)
//returns -->
{ name: 'Yao', password: 'easypeasy' }
{ name: 'Yao', password: 'easypeasy' }
/* both object passwords were changed, becuse obj1 and obj2 share the same reference.
you can clone an object if you don't want the referenced password to change when changing 
obj2 vs. obj1.*/
let obj = {a: 'a', b: 'b', c: 'c', d: 'd'};
let clone = Object.assign({}, obj);

obj.c = 5;
console.log(clone)
//returns -->
clone = {a: 'a', b: 'b', c: 'c', d: 'd'};

console.log(obj)
//returns -->
clone = {a: 'a', b: 'b', c: 5, d: 'd'};
// you can also do this by:
let clone2 = {...obj}; //nice and clean.