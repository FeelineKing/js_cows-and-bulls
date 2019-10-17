'use strict'

function creatingRandomNum() {
  function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  let randomFiltred = '';

  for (let n = 0; n < 4; n++) {
    let randomResult;
    do {
    randomResult = random(0, 9);    
    } while (randomFiltred.indexOf(randomResult) > -1) { 
      randomFiltred = randomFiltred + randomResult;
    };
  }

  return randomFiltred;
}

const randomNum = creatingRandomNum();
let bullsCounter;
let cowsCounter;

function analysis(num, attempt) {
  bullsCounter = 0;
  cowsCounter = 0;

  for(let n = 0; n < 4; n++) {
    if(num.indexOf(attempt[n]) > -1) {
      cowsCounter++
    }

    if(num[n] === attempt[n]) {
      bullsCounter++;
      cowsCounter--;
    }
  }
}

function uniqueChecker(element) {
  for (let i = 0; i < element.length; i++) {
    if (element.indexOf(element[i]) !== i) return false;
  }

  return true;
}

function game() {
  for (let n = -1; n < 9;) {
    let feedbackNum = prompt('Enter your four-digit number with unique digits');
    if (feedbackNum.length === 4 && uniqueChecker(feedbackNum) === true) {
      n++;
      analysis(randomNum, feedbackNum);
      let resultString = `${n + 1}) ` + `${feedbackNum} ` + `Bulls ${bullsCounter} ` + `Cows ${cowsCounter}`;
      document.write(resultString + '<br>');
    } else {
      document.write('Enter your four-digit number with unique digits!' + '<br>');
    }
    if (feedbackNum === randomNum) {
      alert('You win!');
      break;
    }
    if (n === 9) {
      alert('You loose!');
      break;
    }
  }
}

game();