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