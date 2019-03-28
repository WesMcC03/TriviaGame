// Question Bank
var questionsbank = ["The Texans have made the playoffs 3 times.",
 "The Texans first official season was in 2001",
"Deshaun Waston has thrown for over 40 combined touchdowns in his first 2 seasons",
 "JJ Watt is the Texans franchise sack leader",
"The Texans franchise leading rusher is Lamar Miller",
 "Texans leader in total tackles is Brian Cushing",
"Texans leader in interceptions is Danta Hall", 
"The Texans have won division at least 3 times",
 "The Texans have an overall winning record",
"The Texans have led the league in total defense at least one season"]

// True/False Button 
var option1 =[]
var option01 = ["<button class=buttons001 onclick=wrong()>True</button><br /><button class=buttons001 onclick=correct()>False</button>"]
var option02 =["<button class=buttons001 onclick=wrong()>True</button><br />< br /><button class=button001 onclick=correct()>False</button>"]
var option03 =["<button class=buttons001 onclick=correct()>True</button><br />< br /><button class=button001 onclick=wrong()>False</button>"]


var score = 0;
    score++;
var questnum = 0;
    questnum++;

function startquiz() {
    message1.textContent= questionsbank[0];
    message2.innerHTML= option01;
    number01.innerHTML= questnum++;
    console.log(questionsbank[0]);
}



