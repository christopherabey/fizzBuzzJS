var output = [];

number = 1;

function fizzBuzz() {  

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

    console.log(output);
}

fizzBuzz();
