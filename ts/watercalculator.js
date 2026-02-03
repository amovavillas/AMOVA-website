function calculateConsumption(input) {
    var consumption;
    if (input >= 0 && input <= 6) {
        consumption = 43,23;
    }
    else if (input > 6 && input <= 10) {
        consumption = (input - 6) * 1.71 + 43,23;
    }
    else if (input > 10 && input <= 15) {
        consumption = (input - 10) * 12,10 + 50,07;
    }
    else if (input > 15 && input <= 20) {
        consumption = (input - 15) * 12,95 + 114,82;
    }
    else if (input > 20 && input <= 25) {
        consumption = (input - 20) * 14,56 + 187,62;
    }
    else if (input > 25 && input <= 30) {
        consumption = (input - 25) * 16,24 + 268,82;
    }
    else if (input > 30 && input <= 40) {
        consumption = (input - 30) * 17,85 + 447,32;
    }
    else if (input > 40 && input <= 50) {
        consumption = (input - 40) * 19,58 + 643,12;
    }
    else {
        consumption = (input - 50) * 23,56 + 838,92;
    }
    return consumption.toFixed(2);
}
var aguaInput = document.getElementById('aguaInput');
var result = document.getElementById('result');
aguaInput.addEventListener('input', function () {
    var inputValue = parseFloat(aguaInput.value.trim());
    if (!isNaN(inputValue) && inputValue >= 0) {
        var resultValue = calculateConsumption(inputValue);
        result.textContent = "Resultado: ".concat(resultValue, " R$");
    }
    else {
        result.textContent = "Inserir n\u00FAmero v\u00E1lido";
    }
    //   const numericValue = parseFloat(inputValue);
    //   if (isNaN(numericValue)) {
    //       result.textContent = 'Insira um número';
    //   } else if (numericValue < 0 || numericValue > 300) {
    //       result.textContent = 'Error: Value must be between 0 and 300';
    //   } else {
    //       result.textContent = ''; // Clear any previous error messages
    //       // Call your other function here with the valid numericValue
    //       yourOtherFunction(numericValue);
    //   }
    // });
});
