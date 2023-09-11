var textItems = [
    '<p>El ',
    ' es la parte del sistema nervioso central conformada por el cerebro, el cerebelo, el tallo encef&aacute;lico, bulbo raqu&iacute;deo, puente de Varolio, mesenc&eacute;falo, t&aacute;lamo e hipot&aacute;lamo.</p><p>El sistema nervioso se puede clasificar seg&uacute;n su funci&oacute;n o su anatom&iacute;a. Si utilizamos su anatom&iacute;a, podemos decir que se divide en sistema nervioso ',
    ' y sistema nervioso perif&eacute;rico.</p><p>Algunas salientes del cerebro se llaman ', 
    ' y se clasifican en cinco diferentes: interhemisf&eacute;rica, de Rolando, de Silvio, perpendicular y transversa.</p><p>La membrana ', 
    ' es la que se encuentra adherida a la superficie del enc&eacute;falo y a la m&eacute;dula espinal.</p><p>La m&eacute;dula espinal est&aacute; conectada al ', 
    ' por medio del foramen magno del hueso ', 
    ' en la parte interna de la columna vertebral.</p><p>La sustancia ', 
    ' del cerebro forma una capa llamada ', 
    ' o corteza cerebral.</p><p>Las c&eacute;lulas llamadas ', 
    ' son las encargadas de brindar soporte a las ', 
    ' y permiten la integraci&oacute;n y la comunicaci&oacute;n de las redes neuronales.</p>'];
var anItems = [
    '', 'gris', 'enc&eacute;falo', 'central', 'piamadre', 'espinal', 'neuronas', 'occipital', 'palio', 'cisuras', 'gliales'];
var anItemsCorrect = [2, 3, 9, 4, 5, 6, 8, 1, 10, 7];
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