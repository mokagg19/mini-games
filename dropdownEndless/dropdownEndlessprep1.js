var textItems = [
    ['all&iacute;', 'de lugar'],
    ['ac&aacute;', 'de lugar'],
    ['arriba', 'de lugar'],
    ['abajo', 'de lugar'],
    ['cerca', 'de lugar'],
    ['lejos', 'de lugar'],
    ['junto', 'de lugar'],
    ['detr&aacute;s', 'de lugar'],
    ['delante', 'de lugar'],
    ['alrededor', 'de lugar'],
    ['antes', 'de tiempo'],
    ['despu&eacute;s', 'de tiempo'],
    ['pronto', 'de tiempo'],
    ['luego', 'de tiempo'],
    ['tarde', 'de tiempo'],
    ['temprano', 'de tiempo'],
    ['ma&ntilde;ana', 'de tiempo'],
    ['siempre', 'de tiempo'],
    ['nunca', 'de tiempo'],
    ['prontamente', 'de tiempo'],
    ['mal', 'de modo'],
    ['regular', 'de modo'],
    ['bien', 'de modo'],
    ['despacio', 'de modo'],
    ['r&aacute;pido', 'de modo'],
    ['lentamente', 'de modo'],
    ['mejor', 'de modo'],
    ['peor', 'de modo'],
    ['estupendamente', 'de modo'],
    ['fielmente', 'de modo'],
    ['tremendamente', 'de modo'],
    ['m&aacute;s', 'comparativo'],
    ['menos', 'comparativo'],
    ['muy', 'comparativo'],
    ['poco', 'comparativo'],
    ['mucho', 'comparativo'],
    ['bastante', 'comparativo'],
    ['solo', 'comparativo'],
    ['casi', 'comparativo'],
    ['tan', 'comparativo'],
    ['tanto', 'comparativo'],
    ['nada', 'comparativo'],
    ['aproximadamente', 'comparativo'],
    ['s&iacute;', 'afirmativo'],
    ['seguramente', 'afirmativo'],
    ['tambi&eacute;n', 'afirmativo'],
    ['cierto', 'afirmativo'],
    ['claro', 'afirmativo'],
    ['efectivamente', 'afirmativo'],
    ['obviamente', 'afirmativo'],
    ['no', 'negativo'],
    ['nunca', 'negativo'],
    ['jam&aacute;s', 'negativo'],
    ['tampoco', 'negativo'],
    ['primero', 'de orden'],
    ['primeramente', 'de orden'],
    ['&uacute;ltimamente', 'de orden'],
    ['posteriormente', 'de orden'],
    ['quiz&aacute;', 'dubitativo'],
    ['acaso', 'dubitativo'],
    ['tal vez', 'dubitativo'],
    ['probablemente', 'dubitativo'],
    ['puede ser', 'dubitativo'],
    ['a lo mejor', 'dubitativo'],
    ['cu&aacute;ndo', 'exclamativo'],
    ['c&oacute;mo', 'exclamativo'],
    ['por qu&eacute;', 'exclamativo'],
    ['d&oacute;nde', 'exclamativo']
];
var anItems = [
    '', 'de lugar', 'de tiempo', 'de modo', 'comparativo', 'afirmativo', 'negativo', 'de orden', 'dubitativo', 'exclamativo' ];
var anItemsCorrect = [];
var optionslist = "";
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;
var reset = false;

var arr = [];

for (var i = 0; i < textItems.length; i++) {
    for (var e = 0; e < anItems.length; e++) {
        if (textItems[i][1] == anItems[e]) {
            anItemsCorrect.push(e);
        } 
    }   
}

function setBoard() {
    while (arr.length < 10) {
        var r = Math.floor(Math.random() * textItems.length - 1) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    };
    console.log(arr);

    for (var i = 0; i < anItems.length; i++) {
        optionslist += ("<option>" + anItems[i] + "</option>");
    };

    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + " <span class='numbers'>&#8594;</span> <select id='dropdown" + [i] + "' class='dropdown'>" + optionslist + "</select>" + "</p>"
    };

    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';
}

setBoard();

function answer() {

    if (reset == false) {
        for (var i = 0; i < arr.length; i++) {
            number = i + 1;
            correctText += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + "  <span class='numbers'>&#8594;</span> <span id='answer" + i + "' class=''> " + anItems[anItemsCorrect[arr[i]]] + "</span>" + "</p>";
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