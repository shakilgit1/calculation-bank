function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;
};

function getTextValue(inputId){
    const textElement = document.getElementById(inputId);
    const textString = textElement.innerText;
    const textValue = parseFloat(textString);
    return textValue;
};

function setValue(inputId, value){
    const getElement = document.getElementById(inputId);
    getElement.innerText = value;
};
