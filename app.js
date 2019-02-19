

     function showname(){
       const userName= document.getElementById('user').value;
		if(userName.length == 0){
			alert("INGRESE SU NOMBRE POR FAVOR :)")

	}else{
		document.getElementById("named").innerHTML= ("Bienvenida  "+ userName);
       showwindow.style.display = "none"
       document.getElementById("cont2").style.display= 'block';
	}
       
    }
    
    function option(){
    	document.getElementById("inicio").style.display= 'none';
    	document.getElementById("preguntas").style.display= 'block';
    	document.getElementById("cont3").style.display= 'none';
      document.getElementById("matematicas1").reset();
    }
    function option1(){
    	document.getElementById("inicio").style.display= 'none';
    	document.getElementById("preguntas1").style.display= 'block';
    	document.getElementById("cont3").style.display= 'none';
      document.getElementById("literatura1").reset();
    }

    function check() {

  let question1 = document.quiz.question1.value;
  let question2 = document.quiz.question2.value;
  let question3 = document.quiz.question3.value;
  let question4 = document.quiz.question4.value;
  let question5 = document.quiz.question5.value;
  let correct = 0;
  let incorrect=0;
  let answerInput=[question1,question2,question3,question4,question5];
  let answerCorrect=['23','10','0','cos','3'];
  

	for (let i = 0; i < 5; i++) 
	{

	let inputVar = answerInput[i];
	let inputCorrect = answerCorrect[i];
	if (inputVar===inputCorrect) {
		correct++;
	}
	else{
		incorrect++;
	}
}  
//Respuestas que van a mostrar los resultados//
  let messages = ['¡Impresionante!', '¡Buen trabajo!', '¡Bien!', 'Podrías mejorar', '¡Lo sentimos!', '¡Que lástima!'];
  let pictures = ['image/cinco.gif', 'image/cuatro.gif', 'image/tres.gif', 'image/dos.gif', 'image/dos.gif', 'image/uno.gif'];
  document.getElementById('messages').innerHTML = messages[incorrect];
  document.getElementById('number_correct').innerHTML = 'Obtuviste ' + correct + ' respuestas correctas de 5.'
 document.getElementById('pictures').src = pictures[incorrect];
  document.getElementById("cont3").style.display= 'block';
  document.getElementById("preguntas").style.display= 'none';
  

}

 function check1() {

  let question1b = document.quiz1.question1b.value;
  let question2b = document.quiz1.question2b.value;
  let question3b = document.quiz1.question3b.value;
  let question4b = document.quiz1.question4b.value;
  let question5b = document.quiz1.question5b.value;
  let correct = 0;
  let incorrect=0;
  let answerInput=[question1b,question2b,question3b,question4b,question5b];
  let answerCorrect=['MVL','CMT','CV','H','AV'];
  

	for (let i = 0; i < 5; i++) 
	{

	let inputVar = answerInput[i];
	let inputCorrect = answerCorrect[i];
	if (inputVar===inputCorrect) {
		correct++;
	}
	else{
		incorrect++;
	}
}  
//Respuestas que van a mostrar los resultados//
  let messages = ['¡Impresionante!', '¡Buen trabajo!', '¡Bien!', 'Podrías mejorar', '¡Lo sentimos!', '¡Que lástima!'];
  let pictures = ['image/cinco.gif', 'image/cuatro.gif', 'image/tres.gif', 'image/dos.gif', 'image/dos.gif', 'image/uno.gif'];
  document.getElementById('messages').innerHTML = messages[incorrect];
  document.getElementById('number_correct').innerHTML = 'Obtuviste ' + correct + ' respuestas correctas de 5.'
 document.getElementById('pictures').src = pictures[incorrect];
  document.getElementById("cont3").style.display= 'block';
  //document.getElementById("preguntas").style.display= 'none';
    document.getElementById("preguntas1").style.display= 'none';


}


