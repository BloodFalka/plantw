//МАТЮКИ
var bullingObjects = [
	"Бізнес",
	"Ніс",
	"Батько",
	"Палець",
	"Браслет"
];

var bullings = [
	"Смердючий",
	"Гівняний",
	"Прищавий",
	"Гнилий",
	"Хуйоватий",
	"Їбаний"
];

var bullingWords = [
	"Член",
	"Кіт",
	"Хомяк",
	"Тінейджер",
	"Морозильник"
];

var bullingObject = bullingObjects[Math.floor(Math.random()* bullingObjects.length)];
var bulling = bullings[Math.floor(Math.random() * bullings.length)];
var bullingWord = bullingWords[Math.floor(Math.random() * bullingWords.length)];

var badWord = ["Твій", bullingObject, bulling, bullingWord + "!!!"].join(" ");

alert(badWord);

//ПРИВІТАННЯ
var name = "Naz"

if (name === "Anton") {
	console.log("Hi, me");
} else if (name === "Luda") {
	console.log("Hi my lud");
} else if (name === "Nazar") {
	console.log("Bye lol");
}	else {
	console.log("hello stranger");
};

//ЗВІРЯТА
var animals = [
	"Cat",
	"Fish",
	"Lemur",
	"Kom Drugs",
];

for (var i = 0; i < animals.length; i++) {
	animals[i] = "Awesome" + animals[i];
}

console.log(animals);

//ВИПАДКОВИЙ РЯДОК
var alphabet = "йцукенгшщзфівапролдячсмитьбюєжюїхз";
var randomS = "";

while (randomS.length < 8) {
	randomS += alphabet[Math.floor(Math.random()*alphabet.length)];
};

console.log(randomS);

//ХАКЕРСПЕЙС
var input = "antony is my name and my girl is liuda i love she";
var output = "";

for (var i = 0; i < input.length; i++) {
		if (input[i] === "a") {
			output += "4";
		}else if (input[i] === "e") {
			output += "3";
		}else if (input[i] === "i") {
			output += "1";
		}else if (input[i] === "o") {
			output += "0";
		}else {
			output += input[i];
		};
};

console.log(output);
