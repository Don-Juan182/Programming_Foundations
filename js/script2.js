console.log("This is script 2");

/*Question 1*/
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
console.log("The first number is smaller than the second");
}

/*Question 2*/
var age = 11;
var minimumAge = "13";

if (age >= minimumAge) {
console.log("Accepted");
} else if (age < minimumAge) {
    console.log("Denied");
}

/*Question 3*/
var income = "11.050";
var maximumIncome = "13.075";

if (income >= maximumIncome) {
    console.log("maximum income reached");
    } else if (income < maximumIncome) {
        console.log("Bellow maximum income");
    }

   /*Question 4*/
   var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
}

/*Question 5*/
var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

/*Question 6*/
var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== 15) {
    console.log("You lose again");
}

/*Question 7*/
var dayOfTheWeek = 5;
var dayName;

switch (dayOfTheWeek) {

    case 1:
    dayName = "Monday";
    break;

    case 2:
    dayName = "Tuesday";
    break;

    case 3:
    dayName = "Wednesday";
    break;

    case 4:
    dayName = "Thursday";
    break;

    case 5:
    dayName = "Friday";
    break;

    case 6:
    dayName = "Saturday";
    break;

    case 7:
    dayName = "Sunday";
    break;

    default:
    dayName = "Invalid day number"
    break;
    }


    console.log(dayName)

  /*Question 1 Loops*/
for (var i = 0; i<= 7; i++) {
    console.log(i);
}

  /*Question 2 Loops*/
  for (var i = 10; i > 0; i--) {
    console.log(i);
}

  /*Question 3 Loops*/
  for (var i = 10; i<= 20; i++) {
    if (i % 2 !==0 ) {
    console.log(i);
}
}

/*MODULE 2*/
/*Question 1*/
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toUpperCase() === suppliedName.toUpperCase()) {
    console.log("Equal");
} 

else {
    console.log("NOT Equal");
}


/*Question 2*/
var username = "myusername";

if (username.length >= 4 && username.length <= 10) {
    console.log("Acceptable username");
} 
else {
    if (username.length < 4) 
        console.log("Too few characters");
    }

    if (username.length > 10) {
        console.log("Too many characters");
    }

/*Question 3*/
var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid === true && productDispatched === true && customerHasSigned ===true) {
    console.log("Order complete");
}
else { 
    if (invoicePaid !== true) 
    console.log("Order NOT paid");
}
if (productDispatched !== true) {
    console.log("Product NOT dispatched");
}
if (customerHasSigned !== true) {
    console.log("Customer has NOT signed");
}


/*Question 4*/
var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (!invoicePaid || !productDispatched || !customerHasSigned) {
   if (!invoicePaid) {
    console.log("Order incomplete");
}

if (!productDispatched) {
    console.log("Product NOT dispatched");
}
if (!customerHasSigned) {
    console.log("Customer has NOT signed");
}
}
else {
    console.log("Order complete");
}