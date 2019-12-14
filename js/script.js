<<<<<<< HEAD
//МАТЮКИ
var bullingObjects = [
	"Бізнес",
	"Ніс",
	"Батько",
	"Палець",
	"Браслет"
];
=======
function chooseRandom(words){
	return words[Math.floor(Math.random()* words.length)]};
>>>>>>> 24d3b372f92bb986f9c9a58bba33f8b27dc42444

var bullingObjects = [ "Бізнес", "Ніс", "Батько", "Палець", "Браслет"];
var bullings = ["Смердючий", "Гівняний", "Прищавий", "Гнилий", "Хуйоватий", "Їбаний"];
var bullingWords = ["Член", "Кіт", "Хомяк", "Тінейджер", "Морозильник"];

var badWord = ["Твій", chooseRandom(bullingObjects), chooseRandom(bullings), chooseRandom(bullingWords) + "!!!"].join(" ");

alert(badWord);
<<<<<<< HEAD

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
=======
>>>>>>> 24d3b372f92bb986f9c9a58bba33f8b27dc42444
