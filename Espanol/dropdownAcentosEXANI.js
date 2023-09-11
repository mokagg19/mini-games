var textItems = [
    ['Me la pasé toda la noche estudiando porque mañana tengo ', ' de matemáticas.', 'examen', 'exámen', 1],
    ['Si necesitas un ', ' tienes que ir al banco.', 'préstamo', 'prestamo', 1],
    ['Siempre me ha dado miedo viajar en ', ', pero no tengo otra opción.', 'avion', 'avión', 2],
    ['', ' se ubica en el río Moscova en Rusia occidental y es la capital cosmopolita de la nación.', 'Moscú', 'Moscu', 1],
    ['Consiste en golpear la pelota después del bote, de forma directa, del mismo lado del brazo ', ' del jugador.', 'habil', 'hábil', 2],
    ['Tomar ', ' todas las mañanas me ayuda a sentirme más despierto.', 'cafe', 'café', 2],
    ['Orientándose con la ', ' marcharon hacia la floresta a buen paso.', 'brujula', 'brújula', 2],
    ['No busca su antiguo rostro; la sola idea de verlo le produce malestar, como si se tratara de un tema ', '', 'tabú', 'tabu', 1],
    ['Siguió adelante y adelante, y se empujó a sí misma por el aire, saltó como el ', ' que salta río arriba.', 'salmón', 'salmon', 1],
    ['El jinete hizo a su caballo correr ', ' detrás del toro que había escapado  ', 'fugazmente', 'fugázmente', 1],
    ['Por las tardes me gusta recostarme en el ', ' y leer un libro, es la forma más sencilla de relajarme.', 'sofa', 'sofá', 2],
    ['Para comprobar su olor, dirige a la ', ' un poco de gas con un movimiento de la mano.', 'nariz', 'naríz', 1],
    ['A Laura siempre le gustó tocar el ', ' en las fiestas familiares.', 'violin', 'violín', 2],
    ['Está comprobado que el consumo excesivo de ', ' es letal para nuestro cerebro, ya que a largo plazo causa el mismo daño que una droga.', 'azucar', 'azúcar', 2],
    ['Para contraerse, el ', ' necesita la energía que le aportan las moléculas de ATP.', 'musculo', 'músculo', 2],
    ['La metrópolis es ', ' en áreas de calidad urbanística y arquitectónica.', 'fértil', 'fertil', 1],
    ['A diferencia de los académicos, los ', ' y los políticos, evitaban decir tonterías.', 'burócratas', 'burocratas', 1],
    ['La molécula de benceno se representa por la de Kekulé o por un ', ' regular con una circunferencia en su interior.', 'hexagono', 'hexágono', 2],
    ['La mamá de Mariela tenía una fuerte gripe, ', ' ella igual se levantó y salió para su trabajo.', 'más', 'mas', 2],
    ['En los ', ' finales aprobó todas las asignaturas, excepto química.', 'examenes', 'exámenes', 2],
];

var anItems = [];
var anItemsCorrect = [];
var optionslist = [];
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;
var reset = false;

var arr = [];


function setBoard() {
    //set random numbers in an array
    while (arr.length < 10) {
        var r = Math.floor(Math.random() * textItems.length - 1) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    };

    //Set right anwers
    for (var i = 0; i < arr.length; i++) {
        anItemsCorrect.push(textItems[arr[i]][4])
    }

    //Set options per question
    for (var i = 0; i < arr.length; i++) {
        var option = [" ", textItems[arr[i]][2], textItems[arr[i]][3]];
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
    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + " <select id='dropdown" + [i] + "' class='dropdown'>" + optionslist[i] + "</select>" + textItems[arr[i]][1] + '</p>'
    };

    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';

};



setBoard();

function answer() {

    if (reset == false) {

        console.log(anItemsCorrect);

        for (var i = 0; i < arr.length; i++) {


            number = i + 1;
            correctText += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + " <span id='answer" + i + "' class=''>" + anItems[i][anItemsCorrect[i]] + "</span>" + textItems[arr[i]][1] + "</p>";

            var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
            answers.push(checkanswer);
        };

        document.getElementById("fillblank-text").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + '</p>';


        for (var i = 0; i < arr.length; i++) {

            if (anItemsCorrect[i] == answers[i]) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
                document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'><span class='incorrect strike'> " + anItems[i][answers[i]] + "</span> " + anItems[i][anItemsCorrect[i]] + "</span> ";
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

        reset = true;

    } else {
        optionslist = [];
        text = "";
        correctText = "";
        answers = [];
        correctAnswers = 0;
        arr = [];
        anItems = [];
        anItemsCorrect = [];

        document.getElementById("fillblank-text").innerHTML = "";
        document.getElementById("respuesta").innerHTML = "";
        document.getElementById("solucion").innerHTML = "";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }
}

