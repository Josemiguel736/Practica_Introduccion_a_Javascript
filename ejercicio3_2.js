//_______________3.2____________________________________________________

const input = 10;
// create your function here
const yourFunction = (input)=>{return input.toString().split("").join("-")}
yourFunction(input); // '1-0'
const secondInput = 1;
yourFunction(secondInput); // '1'
const thirdInput = 11234;
yourFunction(thirdInput); // '1-1-2-3-4'