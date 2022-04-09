async function typeSentence(sentence, element, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById(element).innerHTML += letters[i];
      i++
    }
    return;
  }
  

async function untype(word, element)  {
  const lettersToGo = word.split("")
  const lettersIn = document.getElementById(element).innerHTML.split("")
  for (var i = 0; i<lettersToGo.length; i++){
    await waitForMs(50);
    lettersIn.pop();
    document.getElementById(element).innerHTML = lettersIn.join("")
  }
  return;
}

async function retype(word, element){
  const lettersToAdd = word.split("")
  let i = 0;
    while(i < lettersToAdd.length) {
      await waitForMs(100);
      document.getElementById(element).innerHTML += lettersToAdd[i];
      i++
    }
    return;
}
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = {
    typeSentence,
    untype,
    retype,
    waitForMs
    
}