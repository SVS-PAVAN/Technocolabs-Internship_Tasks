const kelvin = 293; // Today's forcast 

const celcius = kelvin - 273; //Celcius is 273 degrees less than kelvin so, saving temperatue in terms if celcius

let fahrenheit = celcius*(9/5) + 32; //Finding temperatue in terms of fahrenheit

fahrenheit = Math.floor(fahrenheit); //Rounding to integer

console.log(`\nThe Temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celcius*(33/100);
newton = Math.floor(newton);

console.log(`The Temperature is ${newton} newton \n`);