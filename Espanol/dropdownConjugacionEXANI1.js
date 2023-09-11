var textItems = [
    ['No ', 'estacion&eacute;', ' el coche lejos del quiosco.', 'estacionaba', 'estacion&eacute;'],
    ['Ponte al sol, si quieres que se te ', 'seque', ' la camisa.', 'seque', 'secar&eacute;'],
    ['Tengan cuidado al pasar el r&iacute;o, podemos ', 'lastimarnos', ' con las piedras.', 'lastimarnos', 'lastimarlos'],
    ['Le pediremos al profesor que nos lo ', 'explique', ' otra vez.', 'explicar&iacute;a', 'explique'],
    ['Me ', 'acerqu&eacute;', ' a &eacute;l para saludarlo.', 'acerqu&eacute;', 'acercaba'],
    ['Si ganamos este partido, es posible que nos ', 'clasifiquen', ' para la final.', 'clasifiquen', 'clasificaren']
];

var anItems = [];
var anItemsCorrect = [2, 1, 1, 2, 1, 1];
var optionslist = [];
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;


var arr = [];


function setBoard() {


    //Set options per question
    for (var i = 0; i < textItems.length; i++) {
        var option = [" ", textItems[i][3], textItems[i][4]];
        anItems.push(option);
    }

    for (var i = 0; i < anItems.length; i++) {
        var option = [];
        for (var e = 0; e < anItems[i].length; e++) {
            option.push("<option>" + anItems[i][e] + "</option>")
        }
        optionslist.push(option);
    };

    //Prepare text
    for (var i = 0; i < textItems.length; i++) {
        number = i + 1;
        text += "<p><span class='numbers'>" + number + ".</span> " + textItems[i][0] + " <select id='dropdown" + [i] + "' class='dropdown'>" + optionslist[i] + "</select>" + textItems[i][2] + "</p>"
    };

    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';

}

setBoard();

function answer() {


    for (var i = 0; i < textItems.length; i++) {
        number = i + 1;
        correctText += "<p><span class='numbers'>" + number + ".</span> " + textItems[i][0] + " <span id='answer" + i + "' class=''>" + textItems[i][1] + "</span>" + textItems[i][2] + "</p>";

        var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
        answers.push(checkanswer);
    };

    document.getElementById("fillblank-text").innerHTML = '<br><b>La respuesta correcta es:</b><p>' + correctText + '</p>';

    
    for (var i = 0; i < textItems.length; i++) {
        
 
        if (anItems[i][answers[i]] == textItems[i][1]) {
            document.getElementById('answer' + i).classList.add("correct");
            console.log("correcto")
            correctAnswers++
        } else {
            document.getElementById('answer' + i).classList.add("incorrect");
            document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'><span class='incorrect strike'> " + anItems[i][answers[i]] + "</span> " + textItems[i][1] + "</span> ";
        }
 
    }

    if (correctAnswers == anItemsCorrect.length) {
        document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente.</p>"
    } else if (0 < correctAnswers) {
        document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
    } else {
        document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
    }
    document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
    document.getElementById("answerButton").style.display = "none";


}

