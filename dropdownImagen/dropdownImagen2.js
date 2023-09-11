console.log("ultimo");

var anItems = [[3, 2, 2, 1],[3, 2, 2, 1],[3, 2, 2, 1],[3, 2, 2, 1],[3, 2, 2, 1]];
var anItemsCorrect = [[3, 2, 3, 1],[2, 1, 4, 1],[5, 3, 2, 1],[4, 2, 4, 1],[1, 1, 4, 2]];

var optionslists = [[],[],[],[]];
var text = [[],[],[],[]];
var correctText = [];
var answers = [];
var correctAnswers = 0;
var dropdownNumber = 0;


var ejercicios = 5;
var reactivo = "";
respuesta = "";

//numeros cuánticos
var cuanticos = [["",1, 2, 3, 4, 5, 6, 7], ["",0, 1, 2, 3], ["",-3, -2, -1, 0, 1, 2, 3], ["",'&minus;&frac12;', '+&frac12;']];
var nombresnumeros = ["N&uacute;mero principal", "N&uacute;mero secundario", "N&uacute;mero magn&eacute;tico", "Espin"];

for (var i = 0; i < cuanticos.length; i++) {
    for (var e = 0; e < cuanticos[i].length; e++) {
        var optionslist = "";
        optionslist += ("<option>" + cuanticos[i][e] + "</option>");
        optionslists[i].push(optionslist);
    }
};

for (var i = 0; i < cuanticos.length; i++) {
    for (var e = 0; e < cuanticos[i].length; e++) {
        var textlist = "";
        textlist += (optionslist[i][e]);
        optionslists[i].push(textlist);
    }
    text[i].push(optionslists[i]);
};

for (var i = 0; i < ejercicios ; i++) {
    var row = "";
    var table = "";

    for (var e = 0; e < cuanticos.length; e++) {
        dropdownNumber = dropdownNumber + 1;
        row += ('<tr><td>' + nombresnumeros[e] + '</td><td> <select id="dropdown' + dropdownNumber + '" class="dropdown">' + text[e] + + '</select></td></tr>');
    };

    table = '<table>' + row + '</table>';

    var numero = i + 1;

    reactivo = '<p class="reactivo">' + numero + '. </p>' + '<img href="http://juegos.aprendecontabella.com/dropdownImagen/img/numerocuantico' + numero +'.png"><br><p class="instrucciones">Selecciona los n&uacute;meros cu&aacute;nticos</p><br>' + table + '</p><br>'
    document.getElementById("fillblank-text").innerHTML += reactivo;
};


function answer() {
    var flattened = anItemsCorrect.flat(2);

    for (var i = 1; i < dropdownNumber + 1; i++) {

        var checkanswer = document.getElementById("dropdown" + i).selectedIndex;
        answers.push(checkanswer);
    }

    document.getElementById("fillblank-text").innerHTML = '<b>La respuesta correcta es:</b><p>';
    
    dropdownNumber = 0; 

    for (var i = 0; i < ejercicios ; i++) {
        var row = "";
        var table = "";
    
        for (var e = 0; e < cuanticos.length; e++) {
            dropdownNumber = dropdownNumber + 1;
            number = i + 1;
            correctText.push(cuanticos[e][anItemsCorrect[i][e]]);

            row += ('<tr><td>' + nombresnumeros[e] + '</td><td style="text-align:right"> <p id="respuesta' + dropdownNumber + '" class="respuesta">' + cuanticos[e][anItemsCorrect[i][e]] + '</select></td></tr>');
        };
    
        table = '<table>' + row + '</table>';
    
        var numero = i + 1;
    
        respuesta = '<p class="reactivo">' + numero + '. </p>' + '<img href="http://juegos.aprendecontabella.com/dropdownImagen/img/numerocuantico' + numero +'.png"><br>' + table + '</p><br>'
        document.getElementById("fillblank-text").innerHTML += respuesta;
    };

    for (var i = 0; i < dropdownNumber ; i++) {
        var numero = i + 1;
        var numeroRespuesta = "respuesta" + numero;
        if (answers[i] == flattened[i]) {
            console.log("is correct");
            document.getElementById(numeroRespuesta).classList.add("correct");
            correctAnswers++
        } else {
            document.getElementById(numeroRespuesta).classList.add("incorrect");
            //document.getElementById(numeroRespuesta).innerHTML += "<span id='answer" + i + "' class='correct'> <span class='incorrect strike'>" + anItems[answers[i]] + "</span> " + anItems[anItemsCorrect[i]] + "</span>";
        }

    }

    if (correctAnswers == dropdownNumber) {
        document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
    } else if (0 < correctAnswers) {
        document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
    } else {
        document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
    }
    document.getElementById("answerButton").style.display = "none";
}