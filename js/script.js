function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Wylosowana liczba to: ' + randomNumber);

if(randomNumber==1){
	printMessage('Mój ruch to: kamień');
} else if (randomNumber == 2) {
	printMessage('Mój ruch to: papier');
} else {
	printMessage('Mój ruch to: nożyce');
}