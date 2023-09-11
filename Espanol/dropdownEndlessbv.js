var textItems = [
    ['O','b','tener'],
    ['Inesta','b','le'],
    ['Ad','v','irtieron'],
    ['Ro','b','ar'],
    ['Po','b','re'],
    ['Mantu','v','o'],
    ['Anda','b','a'],
    ['E','v','itar'],
    ['Resol','v','er'],
    ['Preser','v','ar'],
    ['A','b','uela'],
    ['Am','b','ulancia'],
    ['Con','v','ento'],
    ['Vaga','b','undo'],
    ['A','v','iaci&oacute;n'],
    ['S&iacute;la','b','a'],
    ['Carn&iacute;','v','oro'],
    ['Gra','v','e'],
];
var anItems = [
    '', 'b', 'v'];
var anItemsCorrect = [];
var optionslist = "";
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;
var reset = false;

var arr = [];

for (var i = 0; i < textItems.length; i++) {
    if (textItems[i][1] == anItems[1]) {
        anItemsCorrect.push(1);
    } else if (textItems[i][1] == anItems[2]) {
        anItemsCorrect.push(2)
    } else {
        anItemsCorrect.push(3)
    }
}

function setBoard() {
    while(arr.length < 10){
        var r = Math.floor(Math.random() * textItems.length-1) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    };
    
    for (var i = 0; i < anItems.length; i++) {
        optionslist += ("<option>" + anItems[i] + "</option>");
    };
    
    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + "<select id='dropdown" + [i] + "' class='dropdown'>" + optionslist + "</select>" + textItems[arr[i]][2] + "</p>"
    };
    
    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';
}

setBoard();

function answer() {

    if (reset == false) {
        for (var i = 0; i < arr.length; i++) {
            number = i + 1;
            correctText += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + "<span id='answer" + i + "' class=''>" + anItems[anItemsCorrect[arr[i]]] + "</span>" + textItems[arr[i]][2] + "</p>";
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
                document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'><span class='incorrect strike'>" + anItems[answers[i]] + "</span>" + anItems[anItemsCorrect[arr[i]]] + "</span>";
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
        document.getElementById("fillblank-text").style.display = "none";

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
        document.getElementById("fillblank-text").style.display = "block";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }

    
}