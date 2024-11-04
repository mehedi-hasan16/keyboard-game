function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

// random alphabet
function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetList = alphabetString.split("");
  const index = Math.round(Math.random() * 25);
  const alphabet = alphabetList[index];
  return alphabet;
}

function makeheightLightKey (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')

}

function removeKeyHighLight(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function continueGame (){
    const previousAlphabet = document.getElementById('display-show-key').innerText;
    removeKeyHighLight(previousAlphabet);
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('display-show-key');
    currentAlphabet.innerText= alphabet;
    makeheightLightKey(alphabet);


}

function scoreUpId(elementId){
    const element = document.getElementById(elementId);
    const finalScore= parseInt(element.innerText) + 1;
    console.log(finalScore);
    element.innerText=finalScore;
  
}