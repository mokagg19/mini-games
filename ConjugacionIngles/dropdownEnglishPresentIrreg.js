var textItems = [
['become', 'becomes', 'becoming', 'became', 'become'], 
['begin', 'begins', 'beginning', 'began', 'begun'], 
['bend', 'bends', 'bending', 'bent', 'bent'], 
['bite', 'bites', 'biting', 'bit', 'bitten'], 
['blow', 'blows', 'blowing', 'blew', 'blown'], 
['break', 'breaks', 'breaking', 'broke', 'broken'], 
['bring', 'brings', 'bringing', 'brought', 'brought'], 
['build', 'builds', 'building', 'built', 'built'], 
['buy', 'buys', 'buying', 'bought', 'bought'], 
['catch', 'catches', 'catching', 'caught', 'caught'], 
['choose', 'chooses', 'choosing', 'chose', 'chosen'], 
['come', 'comes', 'coming', 'came', 'come'], 
['cost', 'costs', 'costing', 'cost', 'cost'], 
['cut', 'cuts', 'cutting', 'cut', 'cut'], 
['dig', 'digs', 'digging', 'dug', 'dug'], 
['do', 'does', 'doing', 'did', 'done'], 
['draw', 'draws', 'drawing', 'drew', 'drawn'], 
['drink', 'drinks', 'drinking', 'drank', 'drunk'], 
['drive', 'drives', 'driving', 'drove', 'driven'], 
['fall', 'falls', 'falling', 'fell', 'fallen'], 
['feed', 'feeds', 'feeding', 'fed', 'fed'], 
['feel', 'feels', 'feeling', 'felt', 'felt'], 
['fight', 'fights', 'fighting', 'fought', 'fought'], 
['freeze', 'freezes', 'freezing', 'froze', 'frozen'], 
['get', 'gets', 'getting', 'got', 'got'], 
['give', 'gives', 'giving', 'gave', 'given'], 
['go', 'goes', 'going', 'went', 'gone'], 
['hang', 'hangs', 'hanging', 'hung', 'hung'], 
['have', 'has', 'having', 'had', 'had'], 
['hear', 'hears', 'hearing', 'heard', 'heard'], 
['hide', 'hides', 'hiding', 'hid', 'hidden'], 
['hit', 'hits', 'hitting', 'hit', 'hit'], 
['hold', 'holds', 'holding', 'held', 'held'], 
['hurt', 'hurts', 'hurting', 'hurt', 'hurt'], 
['keep', 'keeps', 'keeping', 'kept', 'kept'], 
['know', 'knows', 'knowing', 'knew', 'known'], 
['lay', 'lays', 'laying', 'laid', 'laid'], 
['lead', 'leads', 'leading', 'led', 'led'], 
['leave', 'leaves', 'leaving', 'left', 'left'], 
['lend', 'lends', 'lending', 'lent', 'lent'], 
['let', 'lets', 'letting', 'let', 'let'], 
['light', 'lights', 'lighting', 'lit', 'lit'], 
['lose', 'loses', 'losing', 'lost', 'lost'], 
['make', 'makes', 'making', 'made', 'made'], 
['mean', 'means', 'meaning', 'meant', 'meant'], 
['meet', 'meets', 'meeting', 'met', 'met'], 
['put', 'puts', 'putting', 'put', 'put'], 
['read', 'reads', 'reading', 'read', 'read'], 
['ride', 'rides', 'riding', 'rode', 'ridden'], 
['ring', 'rings', 'ringing', 'rang', 'rung'], 
['rise', 'rises', 'rising', 'rose', 'risen'], 
['run', 'runs', 'running', 'ran', 'run'], 
['say', 'says', 'saying', 'said', 'said'], 
['see', 'sees', 'seeing', 'saw', 'seen'], 
['sell', 'sells', 'selling', 'sold', 'sold'], 
['send', 'sends', 'sending', 'sent', 'sent'], 
['set', 'sets', 'setting', 'set', 'set'], 
['shake', 'shakes', 'shaking', 'shook', 'shaken'], 
['shine', 'shines', 'shining', 'shone', 'shone'], 
['shoot', 'shoots', 'shooting', 'shot', 'shot'], 
['shut', 'shuts', 'shutting', 'shut', 'shut'], 
['sing', 'sings', 'singing', 'sang', 'sung'], 
['sink', 'sinks', 'sinking', 'sank', 'sunk'], 
['sit', 'sits', 'sitting', 'sat', 'sat'], 
['sleep', 'sleeps', 'sleeping', 'slept', 'slept'], 
['slide', 'slides', 'sliding', 'slid', 'slid'], 
['speak', 'speaks', 'speaking', 'spoke', 'spoken'], 
['spend', 'spends', 'spending', 'spent', 'spent'], 
['stand', 'stands', 'standing', 'stood', 'stood'], 
['steal', 'steals', 'stealing', 'stole', 'stolen'], 
['stick', 'sticks', 'sticking', 'stuck', 'stuck'], 
['strike', 'strikes', 'striking', 'struck', 'struck'], 
['swear', 'swears', 'swearing', 'swore', 'sworn'], 
['swim', 'swims', 'swimming', 'swam', 'swum'], 
['take', 'takes', 'taking', 'took', 'taken'], 
['teach', 'teaches', 'teaching', 'taught', 'taught'], 
['tear', 'tears', 'tearing', 'tore', 'torn'], 
['tell', 'tells', 'telling', 'told', 'told'], 
['think', 'thinks', 'thinking', 'thought', 'thought'], 
['throw', 'throws', 'throwing', 'threw', 'thrown'], 
['understand', 'understands', 'understanding', 'understood', 'understood'], 
['wake', 'wakes', 'waking', 'woke', 'woken'], 
['wear', 'wears', 'wearing', 'wore', 'worn'], 
['win', 'wins', 'winning', 'won', 'won'], 
['write', 'writes', 'writing', 'wrote', 'written']

];
var pronouns = ['I', 'You', 'He', 'She', 'It', 'We', 'You (pl)', 'They'];
var pronounsquestions = [];
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

    //Select random pronouns
    while(pronounsquestions.length < 10){
        var r = Math.floor(Math.random() * pronouns.length-1) + 1;
        if(pronounsquestions.indexOf(r) === -1) pronounsquestions.push(pronouns[r]);
    };

    //Set right anwers
    for (var i = 0; i < arr.length; i++) {
        if (pronounsquestions[i] == pronouns[2] || pronounsquestions[i] == pronouns[3] || pronounsquestions[i] == pronouns[4]){
            if (anItemsCorrect.includes(textItems[arr[i]][1])) {
            } else {
                anItemsCorrect.push(textItems[arr[i]][1])
            }
        } else {
            if (anItemsCorrect.includes(textItems[arr[i]][0])) {
            } else {
                anItemsCorrect.push(textItems[arr[i]][0])
            }
        } 
    }

    //Set options per question
    for (var i = 0; i < arr.length; i++) {
        var option = [" ",];

        for (var e = 0; e < 2; e++) {
            if (anItems.includes(textItems[arr[i]][e])) {
            } else {
                option.push(textItems[arr[i]][e])
            }
        }
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
        text += "<p>" + number + ". " + pronounsquestions[i] + " <select id='dropdown" + [i] + "' class='dropdown'>" + optionslist[i][0] + optionslist[i][1] + optionslist[i][2] + "</select></p>"
    };
    
    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';

}

setBoard();

function answer() {

    if (reset == false) {
        for (var i = 0; i < arr.length; i++) {
            number = i + 1;
            correctText += "<p>" + number + ". " + pronounsquestions[i] + " <span id='answer" + i + "' class=''>" + anItemsCorrect[i] + "</span></p>";
        };
    
        document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + '</p>';
    
        for (var i = 0; i < arr.length; i++) {
            var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
            answers.push(checkanswer);
    
            if (answers[i] == [anItemsCorrect[i]]) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
                document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'><span class='incorrect strike'>" + anItems[i][answers[i]] + "</span> " + anItemsCorrect[i] + "</span>";
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

    } else {    
       
        optionslist = [];
        text = "";
        correctText = "";
        answers = [];
        correctAnswers = 0;
        arr = [];
        anItems = [];
        anItemsCorrect = [];
        pronounsquestions = [];

        document.getElementById("fillblank-text").innerHTML = "";
        document.getElementById("respuesta").innerHTML = "";
        document.getElementById("solucion").innerHTML = "";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }

    
}