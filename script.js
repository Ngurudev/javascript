var database = [
 {
	username:"Malah",
	password: "hi"

},
 {
	username:"Hamza",
	password: "thegood"

},
{
	username:"magerpink12",
	password: "jesus"

}

];

var newsFeeds = 
[
	{
		username:"Wakeel",
		timeline: "So Cute For loving some 1"
	},
	{
		username:"Sani",
		timeline: "Love Js language"
	},
	{
		username:"Hamza",
		timeline: "Love Python language"
	}

];

var usernamePromt 	= prompt("Enter your username: ");
var passwordPrompt  = prompt("Enter your password: ");
 
 function userIsValid(username,password){
	for (var i = 0; i< database.length; i++) {

		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

 function signIn(user,pass){

 	if (userIsValid(user,pass)) {
 		console.log(newsFeeds);
 	}else{
 		alert("Sorry password was incorrect");
 	}
 }
 signIn(usernamePromt,passwordPrompt);