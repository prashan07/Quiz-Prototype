

const operations = ["+", "-", "*"];

let operators = [{
    sign: "+",
    method = (num1, num2)=>{
        return num1 + num2;
    }},{
    sign: "-",
    method = (num1, num2) =>{
        return num1 - num2;
    }},{
    sign: "*",
    method = (num1, num2)=>{
        return num1 * num2;
    }
}];

generateQuestion = () =>{
    let random_num, another_num, operator, answer;
    for(i=0; i<=5; i++){
        random_num = Math.floor(Math.random()*10)+1;
        another_num = Math.floor(Math.random()*10)+1;
        operator_index = Math.floor(Math.random()*3);
        operator = operations[operator_index];
        answer = operators.map(o => o === operator)

    }
}