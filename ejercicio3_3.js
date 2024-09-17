const input1 = 'string';
// create your function here

const yourFunction = (input) => {
    let result = ""
    for (i in input){
        result= input[i] + result
          }
    return `${input.length} ${result}`
}
yourFunction(input1); // '6 gnirts'
const input2 = 'variable';
yourFunction(input2); // '8 elbairav'
const input3 = 'pointer';
yourFunction(input3); // '7 retniop'


