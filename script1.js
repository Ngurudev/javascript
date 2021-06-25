var todos = [
"Brush",
"Eat Food",
"School",
"Read",
"back to home"
];
 var todosLen = todos.length; 

//for
// for (var i =0;  i < todosLen; i++) {
// 	//todos[i] = todos[i]+"!";
// 	//console.log(todos[i]);
// 	todos.pop();
// }

//while
var count = 1; 
// while( count > 0){
// 	console.log(count);
// 	count--;
// }

//do while
// do{
// 	console.log(count)
// 	count++;
// }while(count <10 );


 for (var i =0;  i < todosLen; i++) {
	
	console.log(todos[i], i);
	
}

// todos.forEach(function(i,todo){
// 	console.log(todo,i)
// })

function logtodo(i,todo){
	console.log(todo,i);
}
todos.forEach(logtodo)