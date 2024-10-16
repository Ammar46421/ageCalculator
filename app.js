// var city = prompt('Enter city','Karachi').toLowerCase();

// var cities = ["karachi", "islamabad", "lahore", "peshawar"].toString;
// var result = city.toLowerCase();


// if (city == cities){
//     alert("correct city")
//     // console.log(city);
// }else{
//     alert("wrong city")
// }

// var city = prompt('Enter city', 'Karachi').toLowerCase();

// var cities = ["karachi", "islamabad", "lahore", "peshawar"];

// if (cities.includes(city)) {
//     alert("correct city");
//     console.log(city);
// } else {
//     alert("wrong city");
// }



// assignments

var dob = prompt("Enter your date of birth (YYYY-MM-DD):");

var dobDate = new Date(dob);
var currentDate = new Date();

var ageYears = currentDate.getFullYear() - dobDate.getFullYear();
var monthDiff = currentDate.getMonth() - dobDate.getMonth();
var dayDiff = currentDate.getDate() - dobDate.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    ageYears--;
}

var ageMonths = monthDiff;
if (ageMonths < 0) {
    ageMonths += 12;
}

var ageDays = dayDiff;
if (ageDays < 0) {
    var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    ageDays += lastMonth.getDate();
}

alert("Your age is: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.");
