let inputData = [];
let firstInputData = "";
let secondInputData = "";
let operation = "";
let result = "";

function NumberHandler(num) {
    inputData.push(num);
    let currentData = Number(inputData.join(''));
    // console.log("inputdata", currentData);
    let setClickData = document.querySelector(".clickData");
    if (!operation) {
        // console.log("firstNuberClicked");
        firstInputData = currentData;
        setClickData.textContent = `${firstInputData}`;
    }
    else if (!result) {
        // console.log("secondNumberClicked");
        secondInputData = currentData;
        setClickData.textContent = `${firstInputData} ${operation} ${secondInputData} `;
    }
}

function ActionHandler(action) {

    if ( firstInputData && !secondInputData ) {
        // console.log("action assign to operation.",action);
        operation = action;
        document.querySelector(".clickData").textContent = `${firstInputData} ${operation}`;
        inputData = [];
    }
    if (secondInputData) {
        // console.log("firstData",firstInputData);
        // console.log("secondData",secondInputData);
        // console.log("action",operation);
        let firstOperationResult = Calculate();
        // console.log("firstOperationResult",firstOperationResult);
         secondInputData = ""; 
        firstInputData = firstOperationResult;
        operation = action;
        document.querySelector(".clickData").textContent = `${firstOperationResult} ${action}`;
        inputData = [];
    }
    result = "";
}

function Calculate() {
    let a = Number(firstInputData);
    let b = Number(secondInputData);
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            result = "Error";
            break;
    }
    document.querySelector(".clickData").textContent = result;
    firstInputData = result;
    secondInputData = "";
    return result;
}

function ClearSingleElement() {
    let Data = document.querySelector(".clickData");
    let currentData = Data.textContent;
    // console.log("currentData", currentData);

    if (!currentData) return;
    console.log(currentData.length);

    let lastElement = currentData[currentData.length-1];
    if(lastElement === " "){
        lastElement = currentData[currentData.length-2];
    }
    // console.log("lastElement",lastElement);
    

    if (["+", "-", "*", "/"].includes(lastElement)) {
        // console.log("removeElement is action");
        operation = "";
        Data.textContent = `${firstInputData}`
        inputData = String(firstInputData).split('').map(Number);
    }
    else if (!operation) {
        let str = String(firstInputData).slice(0, -1);
        firstInputData = str;
        Data.textContent = str;
        inputData = str.split('').map(Number);
        // console.log("remove element is firstinput", str);
    }
    else if (!result) {
        let str = String(secondInputData).slice(0, -1); 
        secondInputData = str;
        Data.textContent = `${firstInputData} ${operation} ${secondInputData}`;
        inputData = str.split('').map(Number);
        // console.log("remove element is secondinput", str);
    }
}

function ClearAll() {
    inputData = [];
    firstInputData = "";
    secondInputData = "";
    result = "";
    operation = "";
    document.querySelector(".clickData").textContent = "";
}