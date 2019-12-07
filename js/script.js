function chooseRandom(words){
	return words[Math.floor(Math.random()* words.length)]};

var bullingObjects = [ "Бізнес", "Ніс", "Батько", "Палець", "Браслет"];
var bullings = ["Смердючий", "Гівняний", "Прищавий", "Гнилий", "Хуйоватий", "Їбаний"];
var bullingWords = ["Член", "Кіт", "Хомяк", "Тінейджер", "Морозильник"];

var badWord = ["Твій", chooseRandom(bullingObjects), chooseRandom(bullings), chooseRandom(bullingWords) + "!!!"].join(" ");

alert(badWord);
