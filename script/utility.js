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