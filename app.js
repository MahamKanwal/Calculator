
function element(inputValue){
    var inputGet = document.getElementById("input").value
    inputGet +=  inputValue.innerText;
    document.getElementById("input").value = inputGet;
    }
    // RESULT 
    function result(equal){
        var inputGet = document.getElementById("input")
        inputGet.value = eval(inputGet.value)
    }
    
    
    
    // FOR AC 
    function clearOp(){
        var inputGet = document.getElementById("input")
        inputGet.value = ""
    }
    // FOR DELETE 
    function deleteOp(){
        var inputGet = document.getElementById("input")
        inputGet.value =inputGet.value.slice(0,-1);
    }
    // FOR NOT LETTING ANY OPERATOR BEING CLICKED MORE THAN ONCE 
    var lastOperator = '';
    
    function operator(key) {
        var inputField = document.getElementById("input");
        var inputValue = inputField.value;
        var newOperator = key.innerText; //OPERATOR VALUE 
    
        // Check if the last character is an operator
        if (inputValue.length > 0) {
            var lastChar = inputValue.charAt(inputValue.length - 1);
    
            // valid operators
            var validOperators = ['+', '-', '*', '/', '%'];
    
            if (validOperators.includes(lastChar)) {
                // Replace the last operator with the new one
                inputField.value = inputValue.slice(0, -1) + newOperator;
                console.log("replace"+inputField.value)
            } else if (validOperators.includes(newOperator)) {
                // Append the new operator if the last character is not an operator
                inputField.value += newOperator;
            }
            
            // Update the lastOperator to the new one
            lastOperator = newOperator;
            console.log(lastOperator)
        } else if (validOperators.includes(newOperator)) {
            // If input is empty and an operator is clicked, do nothing or handle as needed
            // For example, you could initialize the input with the operator if needed
            inputField.value = newOperator;
        }
    }