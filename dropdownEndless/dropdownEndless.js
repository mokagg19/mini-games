var textItems = [
    ['bien', 'aqui', ' sembraremos las lechugas y las zanahorias.'], 
    ['Juanita1 vendrá ', 'hoy', ' del colegio.'],
    ['Alicia1 vendrá ', 'mañana', ' de la playa.'],
    ['hola', 'aqui', ' sembraremos las lechugas y las zanahorias.'], 
    ['Juanita2 vendrá ', 'hoy', ' del colegio.'],
    ['Alicia2 vendrá ', 'mañana', ' de la playa.'],
    ['tres', 'aqui', ' sembraremos las lechugas y las zanahorias.'], 
    ['Juanita3 vendrá ', 'hoy', ' del colegio.'],
    ['Alicia3 vendrá ', 'mañana', ' de la playa.'],
    ['bla', 'aqui', ' sembraremos las lechugas y las zanahorias.'], 
    ['Juanita4 vendrá ', 'hoy', ' del colegio.'],
    ['Alicia4 vendrá ', 'mañana', ' de la playa.']
];
var anItems = [
    ' ', 'hoy', 'aqui', 'manana'];
var anItemsCorrect = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
var optionslist = "";
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;
var reset = false;

var arr = [];

function setBoard() {
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 10) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    };
    
    for (var i = 0; i < anItems.length; i++) {
        optionslist += ("<option>" + anItems[i] + "</option>");
    };
    
    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p>" + number + ". " + textItems[arr[i]][0] + "<select id='dropdown" + [i] + "' class='dropdown'>" + optionslist + "</select>" + textItems[arr[i]][2] + "</p>"
    };
    
    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';
}

setBoard();

function answer() {

    if (reset == false) {
        for (var i = 0; i < arr.length; i++) {
            number = i + 1;
            correctText += "<p>" + number + ". " + textItems[arr[i]][0] + "<span id='answer" + i + "' class=''>" + anItems[anItemsCorrect[arr[i]]] + "</span>" + textItems[arr[i]][2] + "</p>";
        };
    
        document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + '</p>';
    
        for (var i = 0; i < arr.length; i++) {
            var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
            answers.push(checkanswer);
    
            if (answers[i] == [anItemsCorrect[arr[i]]]) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
                document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'> <span class='incorrect strike'>" + anItems[answers[i]] + "</span> " + anItems[anItemsCorrect[arr[i]]] + "</span>";
            }
    
        }
    
        if (correctAnswers == anItemsCorrect.length) {
            document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
        } else if (0 < correctAnswers) {
            document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
        } else {
            document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
        }
        document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
        reset = true;

    } 
    else {    
       
        optionslist = "";
        text = "";
        correctText = "";
        answers = [];
        correctAnswers = 0;
        arr = [];
        document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';
        document.getElementById("respuesta").innerHTML = "";
        document.getElementById("solucion").innerHTML = "";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }

    
}