
const gameBotFunction = function() {
  // random number
  const randomGenerate = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let mysteryNumber = randomGenerate(1, 100);
  console.log(mysteryNumber);
  let answer = "";
  let attempts = 3;

  // check number
  const checkIsNumber = function(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
  };

  
  return function getNumber() {
    answer = prompt(`Угадайте число от 0 до 100. Осталось попыток: ${attempts}`);
    if (answer === null) {
      alert("Вы нажали отмена");
      return
    } 
      while (!checkIsNumber(answer) || answer.trim() === '') {
        console.log("Содержит пробелы или это строка");
        answer = prompt(`Угадайте число от 0 до 100. Осталось попыток: ${attempts}`);
      
    }

      answer = Number(answer);

      attempts--

        if (answer > mysteryNumber) {
          alert(`Загаданное число меньше. Осталось попыток: ${attempts}`);
        } else if (answer < mysteryNumber) {          
          alert(`Загаданное число больше. Осталось попыток: ${attempts}`);
        } else if (answer === mysteryNumber) {
          let userWin = confirm("Поздравляю Вы угадали!!! Хотели бы сыграть еще?");
            if (userWin) {
              attempts = 3;
              randomGenerate(1, 100);
            } else {
              attempts = 0;
            }       
        }

        if (attempts > 0) {          
          getNumber();
        } else {
          const showFail = confirm("Попыток больше нет. Хотели бы сыграть еще?");
          if (showFail) {
            attempts = 3;
            getNumber();
          } else {
            alert("Вы завершили игру!")
            return
          }
        }
      }
}


let gameBot = gameBotFunction();
gameBot();



// const gameBotFunction = function() {
//     // random number
//     const randomGenerate = function(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
  
//     let mysteryNumber = randomGenerate(1, 100);
//     console.log(mysteryNumber);
//     let answer = "";
//     let attempts = 3;
  
//     // check number
//     const checkIsNumber = function(value) {
//         return !isNaN(parseFloat(value)) && isFinite(value);
//     };
  
    
//     function getNumber() {
//     	answer = prompt(`Угадайте число от 0 до 100. Осталось попыток: ${attempts}`);
//       if (!answer) {
//       	console.log("Вы нажали отмена")
//         return
//       } else {
//         while (answer.trim() !== answer) {
//           console.log("Содержит пробелы в начале или конце");
//           answer = prompt(`Угадайте число от 0 до 100. Осталось попыток: ${attempts}`);
//         }
//       }
//     }
    
//     function showSuccess() {
//     	alert("Поздравляю Вы угадали!!!");
//     }
    
//     function showFail() {
//     	attempts -= 1;
//       if (attempts > 0) {
//           runInput();
//       } else {
//           alert("Исчерпано количество попыток");
//       }
//     }
    
//     function runInput () {
//     	getNumber();
//       if (checkIsNumber(answer)) {
//           if (mysteryNumber === answer) {
//           // success
//           showSuccess();
//         } else {
//           // fail
//           showFail();
//         }
//       } else {
//       	console.log("Ввели не число");
//       }
//     }
    
//     runInput();
  
//   }

//   gameBotFunction();
