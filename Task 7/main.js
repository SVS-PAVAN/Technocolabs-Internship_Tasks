const myAge = 20; //Storing my current age in myAge variable

let earlyYears = 2; //fFirst two years of a dog’s life count as 10.5 dog years each.
earlyYears = earlyYears*10.5;

let laterYears = myAge - 2; //Since first 2 yesrs is calculated
laterYears = laterYears * 4; //Each later years equates to 4 dog years

const myAgeInDogYears = earlyYears + laterYears; //Finding my age in dog years

//Storing my name and printing my age in dog years
let myName = "Pavan";
myName = myName.toLowerCase(); // Converting all characters to lower case in myName
console.log(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.\n`);
