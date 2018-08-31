
//	-----------------------------------------------------------------------------------
//	From day 5
//	-----------------------------------------------------------------------------------

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


//	-----------------------------------------------------------------------------------
//	From day 6
//	-----------------------------------------------------------------------------------

function Day6() {
	let x1;
	let x2;

	this.scaleConverter = function(numberSrc, scaleSrc, scaleDst) {
		const scaleMin = 2;
		const scaleMax = 10;
		if(scaleSrc < scaleMin || scaleSrc > scaleMax) {
			console.log('Initial scale is ' + scaleSrc + ' - inacceptable. Fuck you');
			return;
		}
		if(scaleDst < scaleMin || scaleDst > scaleMax) {
			console.log('Destination scale is ' + scaleDst + ' - inacceptable. Fuck you');
			return;
		}

		let numberDst = '';
		let numberDec = 0;
		let isNegative = false;
		if (numberSrc < 0) {
			isNegative = true;
			numberSrc = Math.abs(numberSrc);
		}
		numberSrc = numberSrc.toString();
		for (let i = 0; i < numberSrc.length; i++) {
			let j = numberSrc.length - i - 1;
			numberDec += numberSrc[i] * Math.pow(scaleSrc, j);
		}

		console.log('numberDec = ' + numberDec);

		let numberDecModified = numberDec;
		while(numberDecModified != 0) {
			dstMod = numberDecModified % scaleDst;
			numberDecModified = (numberDecModified - dstMod) / scaleDst;

			numberDst = dstMod.toString() + numberDst;
		}
		if (isNegative) {
			numberDst = '-' + numberDst;
		}

		console.log('numberDst = ' + numberDst);

		return numberDst;
	}

	this.squareEquation = function(a, b, c) {
		let d = b * b - 4 * a * c;
		if (d < 0) {
			console.log('Discriminant is ' + d + ' (negative)');
		}
		this.x1 = -b + Math.sqrt(d);
		this.x2 = -b - Math.sqrt(d);
		return this.x1 + ', ' + this.x2;
	}

	this.alignStringArray = function(strArray) {
		let strArrayChanged = strArray.concat();
		let maxLength = 0;
		for (let i = 0; i < strArrayChanged.length; i++) {
			maxLength = max([maxLength, strArrayChanged[i].length]);
		}
		for (let i = 0; i < strArrayChanged.length; i++) {
			while(strArrayChanged[i].length < maxLength) {
				strArrayChanged[i] += ' ';
			}
		}
		return strArrayChanged;
	}
}
