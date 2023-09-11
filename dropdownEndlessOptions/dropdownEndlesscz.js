var textItems = [
['aba','c','er&iacute;a'],
['ha','z',''],
['parch&iacute;','s',''],
['pa','s','i&oacute;n'],
['ideali','z','ar'],
['a','cs','icalar'],
['labran','z','a'],
['al','c','ance'],
['pato','s','o'],
['amane','c','er'],
['bron','c','e'],
['ra','c','ismo'],
['ma','cx','izo'],
['can','c','ela'],
['ojeri','z','a'],
['televi','s','i&oacute;n'],
['de','co','ir'],
['preco','z',''],
['un&iacute;','s','ono'],
['ecua','c','i&oacute;n'],
['ver','sp','o'],
['vi','s','i&oacute;n'],
['','s','ablazo'],
['cerve','z','a'],
['a','cd','elerar'],
['ha','z','a&ntilde;a'],
['pa','s','ivo'],
['idiote','z',''],
['al','c','e'],
['poe','sl','&iacute;a'],
['a','s','ociar'],
['prin','c','esa'],
['ja','z','m&iacute;n'],
['balan','c','e'],
['mon','z','&oacute;n'],
['re','ci','eso'],
['ca','c','er&iacute;a'],
['se','s','enta'],
['nari','lz',''],
['tie','s','o'],
['','c','ipr&eacute;s'],
['pe','z','u&ntilde;a'],
['de','ñc','encia'],
['saga','z',''],
['u','s','ar'],
['tapi','z',''],
['edi','cc','i&oacute;n'],
['vi','s','ir'],
['','s','iempre' ],
['de','c','ides'],
['ha','cp','e'],
['capata','z',''],
['con','s','ecuencias'],
['bi','s',''],
['portavo','z',''],
['anun','c','i&oacute;'],
['ra','c','imo'],
['antifa','z',''],
['recono','z','co'],
['tapi','z','ar'],
['educa','c','i&oacute;n'],
['vi','s','itar'],
['d&oacute;','c','il'],
['terra','z','o'],
['va','s','elina'],
['de','c','enio'],
['sala','z','&oacute;n'],
['re','z','ongar'],
['ti','s','ana'],
['codi','c','ia'],
['','c','etro'],
['su','c','eso'],
['pla','z','a'],
['si','s','a'],
['','c','erebro'],
['peda','z','o'],
['pali','z','a'],
['cator','c','e'],
['nari','z','ota'],
['can','c','i&oacute;n'],
['ro','s','ario'],
['re','s','ina'],
['bu','c','ear'],
['pa','s','ivo'],
['b&iacute;','c','eps'],
['morda','z',''],
['a','s','tucia'],
['ra','s','ante'],
['limpie','z','a'],
['anun','c','io'],
['an','c','iano'],
['&aacute;','c','ido'],
['po','s','ible'],
['lan','z','a'],
['pen','s','ar'],
['alea','c','i&oacute;n'],
['pato','s','o'],
['hechi','z','o'],
['a','c','ento'],
['pa','s','aje'],
['ma','z','ap&aacute;n'],
['pe','s','ar'],
['cal','c','io'],
['ho','z','ar'],
];
var anItems = ['',];
var anItemsCorrect = [];
var optionslist = "";
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;
var reset = false;

var arr = [];


function setBoard() {
    while(arr.length < 10){
        var r = Math.floor(Math.random() * textItems.length-1) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    };
    
    for (var i = 0; i < arr.length; i++) {
        if (anItems.includes(textItems[arr[i]][1])) {
        } else {
            anItems.push(textItems[i][1])
        }
    }
    
    
    for (var i = 0; i < arr.length; i++) {    
        for (var e = 1; e < anItems.length+1; e++) {
            if (textItems[arr[i]][e] == anItems[e]) {
                anItemsCorrect.push(e);
            } 
        }
    }
    
    for (var i = 0; i < anItems.length; i++) {
        optionslist += ("<option>" + anItems[i] + "</option>");
    };
    
    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p>" + number + ". " + textItems[arr[i]][0] + "<select id='dropdown" + [i] + "' class='dropdown'>" + optionslist + "</select>" + textItems[arr[i]][2] + "</p>"
    };
    
    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';
}

setBoard();

function answer() {

    if (reset == false) {
        for (var i = 0; i < arr.length; i++) {
            number = i + 1;
            correctText += "<p>" + number + ". " + textItems[arr[i]][0] + "<span id='answer" + i + "' class=''>" + anItems[anItemsCorrect[arr[i]]] + "</span>" + textItems[arr[i]][2] + "</p>";
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

    } 
    else {    
       
        optionslist = "";
        text = "";
        correctText = "";
        answers = [];
        correctAnswers = 0;
        arr = [];
        anItems = ['',];
        anItemsCorrect = [];

        document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';
        document.getElementById("respuesta").innerHTML = "";
        document.getElementById("solucion").innerHTML = "";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }

    
}