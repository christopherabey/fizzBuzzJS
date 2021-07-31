var output = [];

var number = 1;
var count = 1;
var upperLimit = prompt("What should be the upper bounds of the FizzBuzz sequence?");

function fizzBuzz() {  
    
    while (count <=upperLimit) {

        output.push(number);

        if (number % 3 === 0) {
            output.pop();
            output.push("Fizz");
        }

        if (number % 5 === 0) {
            output.pop();
            output.push("Buzz");
        }

        if (number % 3 === 0 && number % 5 === 0) {
            output.pop();
            output.push("FizzBuzz");
        }

        number++;

        count++;
    }
    
    alert(output);
}

fizzBuzz();
