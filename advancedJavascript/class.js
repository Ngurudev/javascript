class Player{
	constructor(name,type){
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name} ${this.type}`)
	}
}

class Wizard extends Player{
	constructor(name,type){
		super(name,type);
	}

	play(){
		console.log(`HAHAHA I'm a ${this.name}`)
	}
}

const wizard0 = new Wizard('thegood','I know how loops and conditional statement work');
const wizard1 = new Wizard('jesus','Guru');
const wizard2 = new Wizard('Malah','Dev');