// Facebook - Pt. 2

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var database = [ {
	username: "Stan",
	password: "Badger",
    },
    {
    username: "Joe",
    password: "Smooth",
    },
    {
    username: "Lady",
    password: "Fingers",
    }      
];

var newsfeed = [ {
		username: "Covid-19",
        timeline: "Coronavirus Should be Modelovirus"
	},
	{
		username: "Funk",
		timeline: "Bringing it since 1957"
	},
	{
		username: "Dank",
		timeline: "MeMeS"
	}
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
                return true;
            } 
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What\"s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);