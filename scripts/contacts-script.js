function welcome(name, surname) {
	let welcome = "Hello, " + name + " from the house of " + surname;
	//console.log(welcome);
	return welcome;
}

function max(array) {
	if (array.length <= 0) {
		console.error("Are you okay, man? Your array is empty, isn\'t it?");
		return;
	}

	let max = -Infinity;
	for (let i = 0; i < array.length; i++) {
		//console.log(array[i]);
		//max = array[i] > max ? array[i] : max;
		if (array[i] > max) {
			max = array[i];
		}
	}
	//console.log(max);
	return max;
}

/*
	{name: "Sharadze", age: 22, gender:"m"}
	{name: "Shurygina", age: 18, gender:"f"}
*/
function faceControl(person) {
	const ageAllow = 22;

	let name = person.name;
	let age = person.age;
	let gender = person.gender;

	let predicate;
	let allowness;

	if (person.age >= ageAllow) {
		predicate = "Congratulations";
		allowness = "allowed";
	} else {
		predicate = "Sorry";
		allowness = "not allowed";
	}
	let approach = person.gender == "m" ? "mister" : "miss";

	let fcMessage = predicate + ", " + approach + " " + name + ", you are " + allowness;
	//console.log(fcMessage);
	return fcMessage;
}

function squareStatementFormatting(a, b, c) {
	let bSign = b < 0 ? " - " : " + ";
	let cSign = c < 0 ? " - " : " + ";

	let aConsole = a.toString() + "*x^2";
	let bConsole = bSign + Math.abs(b).toString() + '*x';
	let cConsole = cSign + Math.abs(c).toString();

	let statement = aConsole + bConsole + cConsole;
	//console.log(statement);
	return statement;
}

/*
	{name: "Galkin", age: 42, gender:"m"}
	{name: "Pugacheva", age: 69, gender:"f"}
*/
function isMiddleAge(person) {
	let isMiddle = ((person.age >= 18) && (person.age <= 65));
	//console.log(isMiddle);
	return isMiddle;
}




