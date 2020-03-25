// reference type
// reference type: OBJECTS are reference types, and each object has its own container that stores information and properties separate and discreet from other objects.


// context
    // context vs. scope 
        
    // this is scope:
        function b() {
            let a = 4;
        }
        // you can console log a within the function, but "a" does not 
        // exist at the parent scope, it is only usable within 
        the function (child scope);

    // This is context: context teels you where we are within the object.
    // When you console log "this" for example:
        console.log(this);
        // You get: 
        Window {parent: Window, opener: null, top: Window, length: 3, frames: Window, …}

        //Because 
        console.log(this === window);
        true
        // in this case, "this" is part of the window object. So this === window (parent)
        "'this' means what is the object environment we are in right now"
        "it is the object that it is inside of"


// instantiation - when you make a copy of the code and re-use it. In this case,
// you see here that I can make multiple instances (or objects) of wizard, referencing 
// the functions of the Player & Wizard object & functions. 
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name,type) {
        super(name, type)
        console.log('wizard', this);
    }
    Play() {
        console.log(`Weeee, I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly', 'healer');
const wizard2 = new Wizard('Brad', 'conjurer');