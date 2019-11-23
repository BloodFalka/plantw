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

var name = [
"Антоні Улай",
"Людаміла",
"Назаріі",
"Оліяша",
"Галінда"
];
console.log(name);

var randomName = name[Math.floor(Math.random() * name.length)];

console.log("Привіт " + randomName);

if (randomName.length >= 7){
  console.log("Вав, твій дік большой");
};
