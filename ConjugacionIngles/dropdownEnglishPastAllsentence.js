var textItems = [
    ['I ', 'watched', ' TV last week.', 'past', 'to watch'],
    ['We ', 'ate', ' meat with my best friend yesterday.', 'past', 'to eat'],
    ['The bus ', 'stopped', ' a few minutes ago.', 'past', 'to stop'],
    ['I ', 'met', ' my wife 9 years ago.', 'past', 'to meet'],
    ['She ', 'left', ' the school in 2010.', 'past', 'to leave'],
    ['He ', 'bought', ' a new house last month.', 'past', 'to buy'],
    ['','Did',' she clean her home?', 'past', 'to do'],
    ['I ', 'read', ' an interesting book last month.', 'past', 'to read'],
    ['We ', 'did', ' a lot of shopping at the shopping mall.', 'past', 'to do'],
    ['He ', 'cut', ' his finger and went to hospital.', 'past', 'to cut'],
    ['She ', 'finished', ' her work at six o\'clock.', 'past', 'to finish'],
    ['The rain ', 'stopped', ' an hour ago.', 'past', 'to stop'],
    ['It ', 'discovered', ' a new land.', 'past', 'to discover'],
    ['We ', 'watched', ' a movie last weekend.', 'past', 'to watch'],
    ['We ', 'were', ' good friends.', 'past', 'to be'],
    ['You ', 'were', ' at station.', 'past', 'to be'],
    ['I ', 'went', ' to bed early yesterday.', 'past', 'to go'],
    ['George ', 'came', ' home very late last night.', 'past', 'to come'],
    ['I ', 'forgot', ' my wallet.', 'past', 'to forget'],
    ['He ', 'had', ' a dog last year.', 'past', 'to have'],
    ['Last year I ', 'traveled', ' to Germany.', 'past', 'to travel'],
    ['Two boys ', 'played', ' with a ball.', 'past', 'to play'],
    ['An old lady ', 'walked', ' with her cat.', 'past', 'to walk'],
    ['A nurse ', 'brought', ' a little girl baby to the park.', 'past', 'to buy'],
    ['An old man ', 'sat', ' down and read his book.', 'past', 'to sit'],
    ['A large trunk ', 'came', ' around the corner.', 'past', 'to come'],
    ['She ', 'finished', ' all the exercises.', 'past', 'to finish'],
    ['I ', 'enrolled', ' to the pilates course.', 'past', 'to enroll'],
    ['Dr. Smith ', 'healed', ' the patient.', 'past', 'to heal'],
    ['They ', 'bought', ' 2 tickets for the U2 concert.', 'past', 'to buy'],
    ['Michael ', 'studied', ' hard all year.', 'past', 'to study'],
    ['','Did', ' you play football last day?', 'past', 'to do'],
    ['I ', 'missed', ' the class last week.', 'past', 'to miss'],
    ['My brother ', 'drank', ' a glass of milk 2 hours ago.', 'past', 'to drink'],
    ['They ', 'had', ' a meeting with her colleagues.', 'past', 'to have'],
    ['They ', 'were', ' students last year.', 'past', 'to be'],
    ['He ', 'smoked', ' a cigarette.', 'past', 'to smoke'],
    ['They ', 'lived', ' in the Spain.', 'past', 'to live'],
    ['Alex ', 'changed', ' his place.', 'past', 'to change'],
    ['I ', 'liked', ' the film.', 'past', 'to like'],
    ['', 'Did', ' they lose the match?', 'past', 'to do'],
    ['A gardener ', 'swept', ' up dead leaves.', 'past', 'to sweep'],
    ['We ', 'listened', ' to music.', 'past', 'to listen'],
    ['Where ', 'was', ' she at 7 o\'clock last night?', 'past', 'to be'],
    ['Amelia ', 'chose', ' to stay with her father.', 'past', 'to choose'],
    ['Mary ', 'forgot', ' to turn off the light.', 'past', 'to forget'],
    ['I ', 'cancelled', ' my meeting for tomorrow.', 'past', 'to cancel'],
    ['I ', 'went', ' to school yesterday.', 'past', 'to go'],
    ['We ', 'played', ' basketball last Sunday.', 'past', 'to play'],
    ['We ', 'saw', ' the Eiffel Tower.', 'past', 'to see'],
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
    while(arr.length < 10){
        var r = Math.floor(Math.random() * textItems.length-1) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    };
    
    //Prepare text
    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + '<span class="cursive">(' + textItems[arr[i]][4] +  ')</span> ' + '<input type="text" id="answerText' + [i] + '" name="answerText' + [i] + '"></input>' + textItems[arr[i]][2] + "</p>"
    };
    
    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';

    for (var i = 0; i < arr.length; i++) {

        document.getElementById("answerText"+i).value = "";
    }

}

setBoard();

function answer() {
    if (reset == false) {

        for (var i = 0; i < arr.length; i++) {
            anItems.push(document.getElementById("answerText"+i).value);
            number = i + 1;
            correctText += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + " <span id='answer" + i + "' class=''>" + textItems[arr[i]][1] + "</span>" + textItems[arr[i]][2] + "</p>"
        };
    
        document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + '</p>';
    
        for (var i = 0; i < arr.length; i++) {
            
            var answer = anItems[i].localeCompare(textItems[arr[i]][1], 'en', { sensitivity: 'base' });

            if (answer == 0) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
            }
            
            /*if (document.getElementById("answerText"+i).value == textItems[arr[i]][1]) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
            }*/
    
        }
    
        if (correctAnswers == 10) {
            document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
        } else if (0 < 10) {
            document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
        } else {
            document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
        }
        document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
        reset = true;
        document.getElementById("fillblank-text").style.display = "none";

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
        document.getElementById("fillblank-text").style.display = "block";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }

    
}