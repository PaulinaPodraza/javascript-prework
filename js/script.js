
{
  function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      }
      console.log(playerInput);

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    function printMessage(msg) {
      const div = document.createElement('div');
      div.innerHTML = msg;
      document.getElementById('messages').appendChild(div);
    }

    function clearMessages() {
      document.getElementById('messages').innerHTML = '';
    }

    const argMoveId = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + argMoveId);

    const argComputerMove = getMoveName(argMoveId);
    printMessage('Mój ruch to: ' + argComputerMove);
    console.log('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove + ' wynik to: ');
      if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrałeś');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrałeś');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrałeś');
      } else if (argComputerMove == 'nożyce', 'kamień', 'papier' && argPlayerMove == 'nieznany ruch') {
        printMessage('Błąd');
      }
    }

    const score = displayResult(argComputerMove, argPlayerMove);
  }

  function buttonClicked1() {
    playGame('1');
  }

  const playRock = document.getElementById('play-rock');
  playRock.addEventListener('click', buttonClicked1);

  function buttonClicked2() {
    playGame('2');
  }

  const playPaper = document.getElementById('play-paper');
  playPaper.addEventListener('click', buttonClicked2);

  function buttonClicked3() {
    playGame('3');
  }

  const playScissors = document.getElementById('play-scissors');
  playScissors.addEventListener('click', buttonClicked3);
}



