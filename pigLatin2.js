import pigLatin from './main'

let input = '';

const textInput = document.getElementById("textInput")

const translateButton = document.getElementById("translateButton")

const resetButton = document.getElementById("resetButton")

const textOutput = document.getElementById("textOutput")

textInput.addEventListener('keyup', (event) => {
  input = event.target.value
})

translateButton.addEventListener('click',(e) => {
  let translatedWord = pigLatin(input)
  textOutput.innerText = translatedWord
})

resetButton.addEventListener('click',(e) => {
  textInput.value = '';
  textOutput.innerText= '';
  input = '';
})