var textItems = [
    ['Tanto molestan tantos tontos cuanto un solo tonto no tanto. ', 'cacofonía'], 
    ['A mí personalmente me parece que el problema eres tú. ', 'pleonasmo',], 
    ['Tenemos que praticar la solidaridá. ', 'barbarismo'],
    ['Cuando fuimos a bailar, este, nos metimos, este, en un salón, este, muy bonito. ','muletilla',], 
    ['Mis amigos y yo fuimos a comer sándwich. ','extranjerismo',],
];
var anItems = [
    '', 'extranjerismo', 'barbarismo', 'cacofon&iacute;a', 'muletilla', 'pleonasmo'];
var anItemsCorrect = [3, 5, 2, 4, 1];
var optionslist = "";
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;

for (var i = 0; i < anItems.length; i++) {
    optionslist += ("<option>" + anItems[i] + "</option>");
};

for (var i = 0; i < textItems.length; i++) {
    var number = i + 1;
    text += "<p><span class='numbers'>" + number + ".</span> " + textItems[i][0] + "<select id='dropdown" + [i] + "' class='dropdown'>" + optionslist + "</select></p>"
};

document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';


function answer() {
    document.getElementById("fillblank-text").style.display = "none";

    for (var i = 0; i < textItems.length; i++) {
        var number = i + 1;
        correctText += "<p><span class='numbers'>" + number + ".</span> " + textItems[i][0] + "<span id='answer" + i + "' class=''>" + anItems[anItemsCorrect[i]] + "</span></p>";
    };

    document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + '</p>';

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