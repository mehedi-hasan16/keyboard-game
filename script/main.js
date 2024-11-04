function play(){
    hideElementById('first-page');
    showElementById('second-page');
}
const alphabet = getRandomAlphabet();
const displayShowKey = document.getElementById('display-show-key');
displayShowKey.innerText= alphabet;
makeheightLightKey(alphabet);

document.addEventListener('keyup', function(event){
    const pressedKey = event.key;
    const displayShowKey = document.getElementById('display-show-key').innerText;
   if(displayShowKey==pressedKey){
    console.log('matched');
    scoreUpId('score');
    continueGame();
   }else{
    console.log('not matched');
   }

})