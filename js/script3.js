/*MODULE 2-lesson 2*/
/*Question 1*/
var winningNumbers2 = [1, 76, 2, 78, 16, 7];
var listNumber2 = winningNumbers2[2];
console.log(listNumber2);

/*Question 2*/
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("spaguetti");
console.log(vegetables);


/*Question 3*/
var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < 4; i++) {
    var item = randomThings[i];
    console.log(item);
}


/*Question 4*/
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
for (var i = 0; i < moreThings.length; i++){
var typeOfItem = typeof moreThings[i];
if (typeOfItem === "number") {
    console.log(moreThings[i]);
}
}


/*Question 5*/
var ingredients = ["water", "flour", "toothpaste", "fish lips"];
console.log(ingredients.sort());

/*Question 6*/
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
if (i % 2 === 1) {
    console.log(characters[i]);
}
}

/*MODULE 2-lesson 3*/
/*Question 1*/
var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price)


/*Question 2*/
var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (var i = 0; i < animals.length; i++){
    console.log(animals[i].colour);
}



/*Question 3*/
var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (var i = 0; i < dinnerOptions.length; i++) {

if (dinnerOptions[i].onSpecial) {
    console.log(dinnerOptions[i].name);
}
}


/*Question 4*/
var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (var i = 0; i < people.length; i++) {
var age = people[i].age;
var fullName = people[i].firstName + " " + people[i].lastName;

if (age >= 20 && age <= 50) {
    console.log(fullName);
}
}


/*Question 5*/
var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];
var productContainer = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
    productContainer.innerHTML += "<li>" + products[i].name + " - " + products[i].price + "</li>";
}

/*MODULE 2-lesson 4*/
/*Question 1*/
function logPhrase() {
    console.log("What the func is this nonsense?");
}

logPhrase();

/*Question 2*/


/*Question 3*/


/*Question 4*/


/*Question 5*/


/*Question 6*/


/*Question 7*/
/*Question 7*/