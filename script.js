let equation = ['0'];
function showCalc(buttonValue) {
    let lastItemIndex =equation.length - 1;
    let lastItem = equation[equation.length-1];
    if(lastItem == '+' || lastItem == '/' || lastItem == '*' ||lastItem == '-'){
            return equation.push(buttonValue);
    }
        lastItem = lastItem+buttonValue;
        return equation.splice(lastItemIndex,1, lastItem);
}
function showOperator(buttonValue) {
    return equation.push(buttonValue);
}
function frontDisplay() {
    document.getElementById("calculation").value = equation.join('');
}

function result() {
    let j =0;
    for(j=0; j<equation.length; j++){
        for(i=0; i<equation.length; i++) {
            if(equation[i] == '/') {
                let x = parseInt(equation[i-1]);
                let y = parseInt(equation[i+1]);
                divide(x, y);
                i--;
                j=0;
            } 
        }
        for(i=0; i<equation.length; i++) {
                if(equation[i] == '*') {
                    let x = parseInt(equation[i-1]);
                    let y = parseInt(equation[i+1]);
                    multi(x, y);
                    i--;
                    j=0;
                }
        }
        for(i=0; i<equation.length; i++) {  
            if(equation[i] == '+') {
                let x = parseInt(equation[i-1]);
                let y = parseInt(equation[i+1]);
                add(x, y);
                i--;
                j=0;
            } 
        }
        for(i=0; i<equation.length; i++) {
        if(equation[i] == '-') {
                let x = parseInt(equation[i-1]);
                let y = parseInt(equation[i+1]);
                minus(x, y);
                i--;
                 j=0;
            }
        }
    }
    document.getElementById("calculation").value = equation.join('');
}
function divide(x, y) {
    let rr = x / y;
    let iOf = equation.indexOf(equation[i-1]);
    equation.splice(iOf, 3,  rr);
}
function add(x, y) {
    let rr = x + y;
    let iOf = equation.indexOf(equation[i-1]);
    equation.splice(iOf, 3,  rr);
}
function minus(x, y) {
    let rr = x - y;
    let iOf = equation.indexOf(equation[i-1]);
    equation.splice(iOf, 3,  rr);
}
function multi(x, y) {
    let rr = x * y;
    let iOf = equation.indexOf(equation[i-1]);
    equation.splice(iOf, 3,  rr);
}

const clearAll = () => equation = ['0'];

const backspace = () =>{
    if(equation.length > 1){
        equation.pop();
    }
    else {
        equation = ['0']
    }
    
} 