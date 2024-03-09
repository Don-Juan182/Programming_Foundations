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
var dayOfTheWeek = 2;
var dayName;

switch (dayOfTheWeek) {

    case 1:
    dayName = "Monday";
    break;

    case 2:
    day = "Tuesday";
    break;

    case 3:
    day = "Wednesday";
    break;

    case 4:
    day = "Thursday";
    break;

    case 5:
    day = "Friday";
    break;

    case 6:
    day = "Saturday";
    break;

    case 7:
    day = "Sunday";
    break;

    default:
        dayName = "Invalid day number"
        break;
    }


    console.log(dayName)
