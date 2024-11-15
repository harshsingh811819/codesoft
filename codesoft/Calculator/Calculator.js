    // inisilize and select the variables.
    let screen = document.querySelector('#screen');
    let results = document.querySelector('#result');
    let currentNumber='';
    let prevousNumber='';
    let operator='';

    //Make the function to clear the screen.
    function clearNumber(num){
        currentNumber='';
        prevousNumber='';
        operator='';
        screen.value='';
        results.value='';
    }
    //Make the function to display the number on the screen.
    function delNumber() {
        currentNumber=currentNumber.substring(0,currentNumber.length - 1);
        display();
    }
    //Make the function to get the numbers.
    function appendNumber(num) {
        currentNumber += num;
        display();

    }
    //Make the function to get the operator.
    function appendOperator(op){
        if (currentNumber === '') {
            return;}
        operator = op;
        screen.value = currentNumber +" "+operator;
        prevousNumber = currentNumber;
        currentNumber = '';
    }
    // Make the function to calculate the numbers.
    function calculateResult() {
    let result;
    const prev = parseFloat(prevousNumber);
    const current = parseFloat(currentNumber);


    if (isNaN(prev) || isNaN(current)){
        if(operator === '%'){
            result = prev / 100;
            results.value = result;
        }
         return; }

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
        if(current == 0) return screen.value="Error";
            result = prev / current;
            break;
        case '%':
            if(prev){
                result = prev / 100;
                
            }else{
                result = (prev * current)/100;
            }
            break;
        default:
            return;
    }
    display();
    operator = '';
    prevousNumber = '';
    results.value = result;
}
// This function is use to display the output.
function display(){
    screen.value = prevousNumber +" " + operator +" " +  currentNumber;
}