var number = [];
var attempts = 0;

generateNumber();
guessNumber();

function generateNumber(){
  number = [];
  var min = 0;
  var max = 9;

  for(var i = 0; i < 4; i++){ 
	  var part = Math.round(min + Math.random() * (max - min)); 
	  if(i == 0){ 
		   number[i] = part; 
	  } else { 
		   while(number.indexOf(part) != -1){ 
			   part = Math.round(min + Math.random() * (max - min)); 
		   } 
number[i] = part; } } } 
function guessNumber() { 
var result = prompt("Введите число (-1 - закончить игру)", 0); 
var gameIsRunning = true; 
var stroke = []; 
stroke.push(result); 
while(gameIsRunning){ // выход из игры 
if(parseInt(result) == -1){ 
	gameIsRunning = false; 
} else if(parseInt(result) == 0 || isNaN(parseInt(result))) { 
	alert("Вы не ввели число"); 
	result = prompt("Введите число (-1 - закончить игру)", 0); } 
else { 
	var answer = checkNumber(result); 
if(answer[0]){ 
	var history = prompt ("Вы угадали число. Кол-во попыток: " + attempts + ". Введите номер хода чтобы узнать его результат (0 вывести всю историю)"); 
if (history > 0){
	history -= 1;
	alert("Результат хода: " + stroke[history]);
} else {
	a = [];
	b = 0;
	for(i = 1;i < stroke.length;i++){
		b++;
		c = "Ход " + i + " Результат: " + stroke[b]+'\r\n';
		a.push(c);
	}
	alert(a.join(''));
	}
		gameIsRunning = false;
	  }
	  else{
		result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
		stroke.push(result);
		console.log(stroke);
	  }
	}
  }
}

function checkNumber(myresult){
  attempts++;
  var answer = [false, 0, 0];
  console.log(myresult);
  console.log(number);
  var ranks = myresult.split("");

  for(var i = 0; i < ranks.length; i++){
	if(parseInt(ranks[i]) == number[i]){
	  answer[1]++;
	}
	else if(number.indexOf(parseInt(ranks[i])) != -1){
	  answer[2]++;
	}
  }

  if(answer[1] == 4){
	answer[0] = true;
  }

  return answer;
}