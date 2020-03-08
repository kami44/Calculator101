let calculatateButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("calculateButton");
calculatateButton.addEventListener("click", calculate);

function calculate(): void{
    let input1: HTMLInputElement = <HTMLInputElement>document.getElementById("number1");
    let input2: HTMLInputElement = <HTMLInputElement>document.getElementById("number2");
    let number1Str: string = input1.value;
    let number2Str: string = input2.value;

    let number1: number = Number(number1Str); 
    let number2: number = Number(number2Str);

    let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("operation");
    let operation: string = operationElement.value;
    let result: number = 0;
    result = calc(operation, number1, number2);

    let resultElement: HTMLSpanElement = <HTMLSpanElement>document.getElementById("result");
    resultElement.innerHTML = String(result);
}

function calc(operation: string, number1: number, number2: number): number{
    let result: number = 0;
    switch (operation){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
                    
                
    }

    return result;
}