var textItems = [
    ['You children ', 'will be', ' the future of this country.', 'future', 'to be - will'],
    ['We ', 'will paint', ' our house next week.', 'future', 'to paint - will'],
    ['You ', 'are going to cry', '.', 'future', 'to cry - going to'],
    ['They ', 'will write', ' the letter to their best friend.', 'future', 'to write - will'],
    ['He ', 'will close', ' the shop.', 'future', 'to close - will'],
    ['She ', 'will see', ' her friend at the weekend.', 'future', 'to see - will'],
    ['I ', 'will read', ' the newspaper when I go to bus station.', 'future', 'to read - will'],
    ['Tomorrow, the sun ', 'will rise', ' at 6:00 am.', 'future', 'to rise - will'],
    ['They ', 'will be', ' here in two hours.', 'future', 'to be - will'],
    ['He ', 'will help',' you tomorrow.', 'future', 'to help - will'],
    ['I ', 'will see',' you tomorrow, please wait me.', 'future', 'to see - will'],
    ['They ','are going to dance','.', 'future', 'to dance - going to'],
    ['I ', 'will go', ' to London next week.', 'future', 'to go - will'],
    ['I ', 'will be', ' twenty seven in April.', 'future', 'to be - will'],
    ['She ', 'won\'t do', ' the ironing.', 'future', 'to do - negative - will'],
    ['He ', 'will love',' her forever.', 'future', 'to love - will'],
    ['She ', 'will cry','.', 'future', 'to cry - will'],
    ['You ', 'will miss', ' me in future.', 'future', 'to miss - will'],
    ['They ', 'will come', ' here tomorrow.', 'future', 'to come - will'],
    ['I ', 'will miss', ' you when you move to another country.', 'future', 'to miss - will'],
    ['Mark ', 'will fix', ' my car.', 'future', 'to fix - will'],
    ['I ', 'won\'t go', ' to the theater.', 'future', 'to go - negative - will'],
    ['Tomorrow, My father ', 'will apply',' for a new job.', 'future', 'to apply - will'],
    ['We ','won\'t go',' to the theater.', 'future', 'to go - negative - will'],
    ['I ','won\'t go',' to the cemetery.', 'future', 'to go - negative - will'],
    ['We ','are going to eat','.', 'future', 'to eat - going to'],
    ['We think, we ', 'will be', ' back on Sunday from holiday.', 'future', 'to be - will'],
    ['I ', 'will stay',' at home at the weekend.', 'future', 'to stay - will'],
    ['He ', 'will call',' me tomorrow.', 'future', 'to call - will'],
    ['We ', 'will play',' basketball.', 'future', 'to play - will'],
    ['You ', 'will feel',' better with this orange juice.', 'future', 'to feel - will'],
    ['I am afraid you ','won\'t remember',' me.', 'future', 'to remember - negative - will'],
    ['He ','is going to jump','.', 'future', 'to jump - going to'],
    ['You ', 'will go',' to France tomorrow.', 'future', 'to go - will'],
    ['He ','is going to sleep','.', 'future', 'to sleep - going to'],
    ['She ', 'will be',' a successful engineer in 3 years.', 'future', 'to be - will'],
    ['You can\'t carry this luggage yourself. I ', 'will help',' you.', 'future', 'to help - will'],
    ['I ','am going to cook',' tonight.', 'future', 'to cook - going to'],
    ['It ','won\'t be',' very cold next week.', 'future', 'to be - negative - will'],
    ['I ', 'will make',' a tea.', 'future', 'to make - will'],
    ['She ', 'will meet',' with her best friends.', 'future', 'to meet - will'],
    ['They ', 'will win',' the game.', 'future', 'to win - will'],
    ['She ', 'won\'t watch',' the football match.', 'future', 'to watch - negative - will'],
    ['They ', 'will go',' to the school.', 'future', 'to go - will'],
    ['It ', 'will stay',' in the outside.', 'future', 'to stay - will'],
    ['We ', 'will win','.', 'future', 'to win - will'],
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