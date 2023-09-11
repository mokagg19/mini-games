

var anItems = [[3, 2, 2, 1],[3, 2, 2, 1],[3, 2, 2, 1],[3, 2, 2, 1],[3, 2, 2, 1]];
var anItemsCorrect = [-2, +2, +1, +4, +2, -1];

var optionslist = "";
var text = [[],[],[],[]];
var correctText = [];
var answers = [];
var correctAnswers = 0;
var dropdownNumber = 0;


var ejercicios = 6;
var reactivo = "";
var respuesta = "";

//numeros cuánticos
var oxidacion = ["",-4, -3, -2, -1, +1, +2, +3, +4];


for (var i = 0; i < oxidacion.length; i++) {
        optionslist += ("<option>" + oxidacion[i] + "</option>");
};

document.getElementById("fillblank-text").innerHTML += '<br><p class="instrucciones">Selecciona los n&uacute;meros de oxidaci&oacute;n con los que se encuentran trabajando los siguientes elementos: </p>';

for (var i = 0; i < ejercicios ; i++) {

    var numero = i + 1;
    var nombre = i + 6;

    reactivo = '<p class="reactivo">' + numero + '. </p>' + '<img src="img/' + nombre +'.png"><br>N&uacute;mero de oxidaci&oacute;n <select id="dropdown' + i + '" class="dropdown">' + optionslist + '</select></p>'
    document.getElementById("fillblank-text").innerHTML += reactivo;
};


function answer() {

    for (var i = 0; i < ejercicios; i++) {
        
        var checkanswer = document.getElementById("dropdown" + i).selectedIndex;
        answers.push(checkanswer);    
    }


    document.getElementById("fillblank-text").innerHTML = '<b>La respuesta correcta es:</b><p>';
    
    for (var i = 0; i < ejercicios; i++) {
        
        var numero = i + 1;
        var nombre = i + 6;

        respuesta = '<p class="reactivo">' + numero + '. </p>' + '<img src="img/' + nombre +'.png"><br>N&uacute;mero de oxidaci&oacute;n: <span id="respuesta' + i + '" class="respuesta">' + anItemsCorrect[i] + '</span><br>';
        document.getElementById("fillblank-text").innerHTML += respuesta;
    };

    for (var i = 0; i < ejercicios ; i++) {
        var numero = i + 1;
        if (oxidacion[answers[i]] == anItemsCorrect[i]) {
            document.getElementById("respuesta"+i).classList.add("correct");
            correctAnswers++
        } else {
            document.getElementById("respuesta"+i).classList.add("incorrect");
            //document.getElementById(numeroRespuesta).innerHTML += "<span id='answer" + i + "' class='correct'> <span class='incorrect strike'>" + anItems[answers[i]] + "</span> " + anItems[anItemsCorrect[i]] + "</span>";
        }

    }

    if (correctAnswers == ejercicios) {
        document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
    } else if (0 < correctAnswers) {
        document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
    } else {
        document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
    }
    document.getElementById("answerButton").style.display = "none";

}