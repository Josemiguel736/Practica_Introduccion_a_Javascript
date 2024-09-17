const input1 = [
'Downloads',
'Videos',
'capture',
'mp4',
]

// create your function here
const yourFunction = (listInput) => {
    let result = ""
    for (let i = 0; i < listInput.length; i++){
        if (i == (listInput.length-1)){
            result= result + "." + listInput[i]
        } 
        else if(i==0){
            result=result + listInput[i]
        }
        else{ result= result + "/" + listInput[i]
         }
    }
    return result
}
yourFunction(input1); // 'Downloads/Videos/capture.mp4'

const input2 = [
'CodinGame',
'python',
'py',
];
yourFunction(input2); // 'CodinGame/python.py'
const input3 = [
'programming',
'languages',
'easy',
'beginner',
'useful',
'pythonstuff',
'py',
]
yourFunction(input3);
// 'programming/languages/easy/beginner/useful/pythonstuff.py


