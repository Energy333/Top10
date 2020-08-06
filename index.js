var result = []
var sortedResult = []


function save(mas, inp) {
    for (var i = 0; i < inp.length; i++) {
        mas.push(Name, inp[i].value);
    }
}

function saveScore() {
//  player = [];
//     inputName = document.getElementsByClassName('name');
    
//     inputScore = document.getElementsByClassName('score');
//     player = {name:inputName.value, score: inputScore.value }
//     result.push(player);
//     showScore(result);



    player = [];
    inputName = document.getElementsByClassName('name');
    save(player, inputName);
    inputScore = document.getElementsByClassName('score');
    save(player, inputScore);
    result.push(player);
    showScore(result);
}

$(".submit").click(function () {
    saveScore();
})

function showScore(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1 + " player " + result[i][0] + " have " + result[i][1] + "score")
    }
}
// create for fill an array 
function fillArray() {
    for (var i = 0; i < 10; i++) {
        var name = [];
        name.push("Alex" + i*Math.floor(Math.random()*20+1));
        name.push("2" + i*Math.floor(Math.random()*20+1));

        result.push(name);
    }
}
function sortirovka(e) {
    // for (var i=0 ;i < e.length;i ++)  {
    
    //     c.push(e[i].splice(e[i].indexOf(Math.max(...e)),1)[0])
    // }

    for (var i = 0; i < e.length; i++) {
    result[1].sort((a, b) => b-a);
    }
}