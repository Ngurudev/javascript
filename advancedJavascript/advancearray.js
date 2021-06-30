const array = [10,20,30,40];
const d = [];
const newArray = array.forEach((num)=>{
	d.push(num *2);
});

console.log('foreach',d);

//map filter
const usingMap = array.map((num)=>{
	return num * 2;
});

console.log('map ',usingMap);