var textItems = [
    '<p>Los seres vivos intercambian ',
    ' y energ&iacute;a con su medio.</p><p>El ',
    ' incluye reacciones qu&iacute;micas de ',
    ' en estas reacciones se acumula energ&iacute;a. El ',  
    ' incluye la ', 
    ' de mol&eacute;culas complejas, en mol&eacute;culas sencillas, y en estas reacciones se libera energ&iacute;a.</p><p>El ',  
    ' es la energ&iacute;a con la que trabaja la c&eacute;lula y que continuamente tiene que sintetizar.</p><p>Una ',
    ' es una prote&iacute;na que controla la ', 
    ' a la que ocurre una reacci&oacute;n qu&iacute;mica.</p><p>Las enzimas son ', 
    ' que hacen posibles las reacciones y disminuyen la ', 
    ' de activaci&oacute;n.</p><p>La mayor&iacute;a de los ', 
    ' usan la energ&iacute;a del sol para producir su alimento, mientras que los ', 
    ' no son capaces de sintetizar su propio alimento, y necesitan obtenerlo de su medio.</p><p>La ', 
    ' es un tipo de ',
    ' que obtiene energ&iacute;a de reacciones qu&iacute;micas de &oacute;xido-reducci&oacute;n.</p><p>Durante la ',
    ' las plantas captan energ&iacute;a ',
    ' y la transforman en energ&iacute;a qu&iacute;mica.</p>' ];
var anItems = [
    '', 'fotos&iacute;ntesis', 'ATP', 'enzima', 'energ&iacute;a', 'aut&oacute;trofos', 'velocidad', 'catalizadores', 'anabolismo', 'degradaci&oacute;n', 'nutrici&oacute;n', 'solar', 'construcci&oacute;n', 'heter&oacute;trofos', 'sustancias', 'quimios&iacute;ntesis', 'catabolismo'];
var anItemsCorrect = [14, 8, 12, 16, 9, 2, 3, 6, 7, 4, 5, 13, 15, 10, 1, 11];
var optionslist = "";
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;

for (var i = 0; i < anItems.length; i++) {
    optionslist += ("<option>" + anItems[i] + "</option>");
};

for (var i = 0; i < textItems.length - 1; i++) {
    text += textItems[i] + "<select id='dropdown" + [i] + "' class='dropdown'>" + optionslist + "</select>"
};

document.getElementById("fillblank-text").innerHTML = '<p>' + text + textItems[textItems.length - 1] + '</p>';


function answer() {
    document.getElementById("fillblank-text").style.display = "none";

    for (var i = 0; i < textItems.length - 1; i++) {
        correctText += textItems[i] + "<span id='answer" + i + "' class=''>" + anItems[anItemsCorrect[i]] + "</span>";
    };

    document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + textItems[textItems.length - 1] + '</p>';

    for (var i = 0; i < anItemsCorrect.length; i++) {
        var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
        answers.push(checkanswer);

        if (answers[i] == [anItemsCorrect[i]]) {
            document.getElementById('answer' + i).classList.add("correct");
            correctAnswers++
        } else { 
            document.getElementById('answer' + i).classList.add("incorrect");
            document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'> <span class='incorrect strike'>" + anItems[answers[i]] + "</span> " + anItems[anItemsCorrect[i]] + "</span>";
        }
        
    }

    if (correctAnswers == anItemsCorrect.length) {
        document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
    } else if (0 < correctAnswers) {
        document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
    } else {
        document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
    }
    document.getElementById("answerButton").style.display = "none";
    
}