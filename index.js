let inputTextArea = document.getElementById("userInputArea");
let outputTextArea = document.getElementById("userOutputArea");
let selectedFont = document.getElementById("fontSelection");
let selectedFontWeight = document.getElementById("fontWeightSelection");
let selectedFontSize = document.getElementById("fontSize");

let resizeOutput = () => {
    outputTextArea.style.fontSize = (selectedFontSize.value / 100 + 1) + 'em';
    console.log(outputTextArea.style.fontSize);
}

outputTextArea.style.fontWeight = selectedFontWeight.value;

inputTextArea.addEventListener("input", function () {
    console.log(inputTextArea.value);
    outputTextArea.value = inputTextArea.value;
});

selectedFont.addEventListener("click", function () {
    outputTextArea.style.fontFamily = selectedFont.value;
});

selectedFontWeight.addEventListener("click", function () {
    outputTextArea.style.fontWeight = selectedFontWeight.value;
});

selectedFontSize.addEventListener("click", function () {
    resizeOutput();
});