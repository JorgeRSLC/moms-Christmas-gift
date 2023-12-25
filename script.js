let rightOperand = '';
let leftOperand = '';
let operator = '';

const userInput = document.querySelector('.user-input');
const resultDisplay = document.querySelector('.result-display');

let isEqaulSet = false;

const seven = document.querySelector('.seven');
seven.addEventListener('click',() =>{    
    checkStateDigit('7');
});

const eight = document.querySelector('.eight');
eight.addEventListener('click',() =>{    
    checkStateDigit('8');
});
const nine = document.querySelector('.nine');
nine.addEventListener('click',() =>{    
    checkStateDigit('9');
});
const four = document.querySelector('.four');
four.addEventListener('click',() =>{    
    checkStateDigit('4');
});
const five = document.querySelector('.five');
five.addEventListener('click',() =>{    
    checkStateDigit('5');
});
const six = document.querySelector('.six');
six.addEventListener('click',() =>{    
    checkStateDigit('6');
});
const one = document.querySelector('.one');
one.addEventListener('click',() =>{    
    checkStateDigit('1');
});
const two = document.querySelector('.two');
two.addEventListener('click',() =>{  
    checkStateDigit('2');
});
const three = document.querySelector('.three');
three.addEventListener('click',() =>{  
    checkStateDigit('3');
});
const zero = document.querySelector('.zero');
zero.addEventListener('click',() =>{
    if(operator === `/`) {
        
    }
    else {
        checkStateDigit('0');
    }  
});

const plus = document.querySelector('.plus');
plus.addEventListener('click',()=>{   
    checkStateOperator('+');
})

const minus = document.querySelector('.minus');
minus.addEventListener('click',()=>{   
    checkStateOperator('-');
})

const multiply = document.querySelector('.multiply');
multiply.addEventListener('click',()=>{   
    checkStateOperator('x');
})

const divide = document.querySelector('.divide');
divide.addEventListener('click',()=>{   
    checkStateOperator(`/`);
})

const equal = document.querySelector('.equal');
equal.addEventListener('click', ()=>{
    checkStateEqual();
})


const getState = () =>{
    // nothing set
    if((rightOperand ==='') && (leftOperand ==='') && (operator ==='')){
        return 1;
    }
    // only left operand set
    if((rightOperand ==='') && (leftOperand !=='') && (operator ==='')){
        return 2;
    }
    // left operand and operator set
    if((rightOperand ==='') && (leftOperand !=='') && (operator !=='')){
        return 3;
    }
    // all set
    if((rightOperand !=='') && (leftOperand !=='') && (operator !=='')){
        return 4;
    }
}

const checkStateDigit = (num) => {

    userInput.textContent = '';

    let state = getState();

    // nothing set
    if(state === 1){
        leftOperand = num;
        updateDisplay();
        return
    }
    // only left operand set
    if(state === 2){
        if(isEqaulSet){
            leftOperand = '';
            isEqaulSet = false;
        } 
        leftOperand = leftOperand+num;
        updateDisplay();
        return
    }
    // left operand and operator set
    if(state === 3){
        if(num === '0' && operator === `/`){
            userInput.textContent = 'CANNOT DIVIDE BY ZERO'
            return;
        }
        rightOperand = num;
        updateDisplay();
        return
    }
    // all set
    if(state === 4){
        rightOperand = rightOperand+num;
        updateDisplay();
        return
    }
}

const checkStateOperator = (op) =>{

    userInput.textContent = '';
    
    let state = getState();

    // nothing set
    if(state === 1){
        leftOperand = '0';
        operator = op;
        updateDisplay();
        return
    }
    // only left operand set
    if(state === 2){
        operator = op;
        updateDisplay()
        return
    }
    // left operand and operator set
    if(state === 3){
        operator = op;
        updateDisplay()
        return
    }
    // all set
    if(state === 4){
        let newLeft = calculate();
        leftOperand = newLeft;
        rightOperand = '';
        operator = op;
        updateDisplay()
        return
    }
}

const checkStateEqual = () =>{

    userInput.textContent = '';
    
    let state = getState();

    // nothing set
    if(state === 1){
        return
    }
    // only left operand set
    if(state === 2){
        return
    }
    // left operand and operator set
    if(state === 3){
        return
    }
    // all set
    if(state === 4){
        let newLeft = calculate();
        leftOperand = newLeft;
        rightOperand = '';
        operator = '';
        isEqaulSet = true;
        updateDisplay()
        return
    }
}

const calculate = () =>{

    result = 0;

    if(operator === '+'){
        result = Number(leftOperand)+Number(rightOperand);
    }
    if(operator === '-'){
        result = Number(leftOperand)-Number(rightOperand);
    }
    if(operator === 'x'){
        result = Number(leftOperand)*Number(rightOperand);
    }
    if(operator === `/`){
        result = Number(leftOperand)/Number(rightOperand);
    }

    return Number(result.toFixed(4));
}

const updateDisplay = () =>{
    resultDisplay.textContent = leftOperand+' '+operator+' '+rightOperand;
}

const clear = document.querySelector('.clear');
clear.addEventListener('click',()=>{
    userInput.textContent = '';
    resultDisplay.textContent = '';
    leftOperand = '';
    rightOperand = '';
    operator = '';
})
