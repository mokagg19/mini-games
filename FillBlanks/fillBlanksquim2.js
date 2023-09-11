var textItems = [
    '<p>Los cambios ', 
' son aquellos que tienen lugar sin que se produzca una alteraci&oacute;n en la composici&oacute;n qu&iacute;mica de la materia. Por otra parte, los cambios ',
' son aquellos que s&iacute; producen una alteraci&oacute;n en la composici&oacute;n qu&iacute;mica de la materia.</p><p>El cient&iacute;fico ', 
' plante&oacute; una teor&iacute;a at&oacute;mica basada en la afirmaci&oacute;n de que los elementos estaban caracterizados por su ' , 
' Adem&aacute;s, uno de los postulados de su teor&iacute;a at&oacute;mica dice que el &aacute;tomo es ', 
' y que toda la materia se compone de &aacute;tomos.</p><p>Posteriormente, ', 
' saca a la luz un modelo at&oacute;mico donde los ', 
' se encuentran inmersos en una sustancia ', 
' el cual se conoce com&uacute;nmente como modelo de pud&iacute;n con pasas.</p><p>Las part&iacute;culas ', 
' no son m&aacute;s que protones y neutrones en el n&uacute;cleo del ', 
' especificamente de 2 protones y 2 neutrones.</p><p>Los rayos ', 
' tienen carga ', 
' lo que provoca que por lo general no se incluyan en las ecuaciones nucleares.</p><p>La longitud de onda de los ',
' es mil veces m&aacute;s peque&ntilde;a que la de la luz visible.</p>'];
var anItems = [
    ' ',
    'Thomson', 'alfa', 'gamma', '&aacute;tomo', 'f&iacute;sicos', 'electrones', 'masa', 'neutra', 'positiva', 'Dalton', 'qu&iacute;micos', 'indivisible', 'rayos x'];
var anItemsCorrect = [5, 11, 10, 7, 12, 1, 6, 9, 2, 4, 3, 8, 13];
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
        document.getElementById("solucion").innerHTML = "<p>¡Felicidades! Contestaste todas las preguntas correctamente</p>"
    } else if (0 < correctAnswers) {
        document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
    } else {
        document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
    }
    document.getElementById("answerButton").style.display = "none";
}