function add(n1: number,n2: number, showResult: boolean, resultPhase: string){
    if(showResult){
     console.log(resultPhase + n1 + n2)
    }else{
     return n1 + n2
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhase = 'Result is:'

add(number1,number2, printResult, resultPhase)
