const basket = ['apple','orange','monge','tomato'];
const details = {
	apple:5,
	mongo:10,
	grapes:7
}
for (var i = 0; i < basket.length; i++) {
	//console.log('forloops',basket[i]);
} 

basket.forEach(item =>{
	//console.log('foreach',item);
})
//for of
//iteration -array -Strings
for(item of basket){
	//console.log('for-of',item);
}
//for in
//enumerating  -object not in iterable
for(item in details){
	console.log('for-in',item);
}

