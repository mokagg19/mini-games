var textItems = [
    '<p>La ',
        ' es el proceso mediante el cual se duplica el ', 
        ' de esta forma se puede otorgar una copia id&eacute;ntica a las c&eacute;lulas hijas.</p><p>El proceso para convertir ADN en ', 
        ' se denomina ', 
        ' y ocurre dentro del n&uacute;cleo celular.</p><p>La ', 
        ' consiste en pasar del lenguaje gen&eacute;tico del ARN al lenguaje de los ', 
        ' que formar&aacute;n las prote&iacute;nas.</p><p>El c&oacute;digo gen&eacute;tico viene formado por combinaciones de ', 
        ' o codones que se conforman de ', 
        ' bases &uacute;nicamente.</p><p>Una ', 
        ' es el cambio al azar en la secuencia de ', 
        ' o en la organizaci&oacute;n del ADN de un ser vivo.</p><p>Las mutaciones ', 
        ' son cambios en la ', 
        ' de nucle&oacute;tidos del ADN.</p><p>Los ', 
        ' son un conjunto de secuencias de ADN, y &eacute;stos a su vez conforman los ', 
        ' en donde ocupan un ', 
        ' es decir, lugar espec&iacute;fico.</p><p>Los cromosomas de organismos ', 
        ' se presentan en pares llamado ', 
        ' y cuando tienen el mismo alelo en el locus de un gen, se dice que ese organismo es ',  
        ' para ese alelo. Cuando los cromosomas tienen alelos diferentes en el mismo locus, se dice que es ', 
        ' para ese alelo espec&iacute;fico.</p><p>El ',  
        ' constituye las caracter&iacute;sticas observables y medibles de los organismos.</p><p>El ', 
        ' es una combinaci&oacute;n particular de los ', 
        ' que lleva cada organismo.</p>' ];
    var anItems = [
        '', 'diploides', 'alelos', 'homocigoto', 'mutaci&oacute;n',  'traducci&oacute;n', 'ARN', 'tripletes', 'nucle&oacute;tidos', 'replicaci&oacute;n', 'puntuales', 'cromosomas', 'genotipo', 'hom&oacute;logos', 'transcripci&oacute;n', 'genes', 'fenotipo', 'secuencia', 'tres', 'amino&aacute;cidos', 'heterocigoto', 'locus', 'ADN'];
    var anItemsCorrect = [9, 22, 6, 14, 5, 19, 7, 18, 4, 8, 10, 17, 15, 11, 21, 1, 13, 3, 20, 16, 12, 2];
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