// Question Bank
var questionsbank = ["The Texans have made the playoffs 3 times.",
 "The Texans first official season was in 2001",
"Deshaun Waston has thrown for over 40 combined touchdowns in his first 2 seasons",
 "JJ Watt is the Texans franchise sack leader",
"The Texans franchise leading rusher is Lamar Miller",
 "Texans leader in total tackles is Brian Cushing",
"Texans leader in interceptions is Danta Robinson", 
"The Texans have won division at least 5 times",
 "The Texans have an overall winning record",
"The Texans have led the league in total defense at least one season"]

// True/False Button Answers

var option01 = ["<button class=buttons001 onclick=correct()>True</button><br /><button class=buttons001 onclick=wrong()>False</button>"]
var option02 = ["<button class=buttons001 onclick=wrong()>True</button><br /><button class=buttons001 onclick=correct()>False</button>"]
var option03 = ["<button class=buttons001 onclick=correct()>True</button><br /><button class=buttons001 onclick=wrong()>False</button>"]
var option04 = ["<button class=buttons001 onclick=correct()>True</button><br /><button class=buttons001 onclick=wrong()>False</button>"]
var option05 = ["<button class=buttons001 onclick=wrong()>True</button><br /><button class=buttons001 onclick=correct()>False</button>"]
var option06 = ["<button class=buttons001 onclick=correct()>True</button><br /><button class=buttons001 onclick=wrong()>False</button>"]
var option07 = ["<button class=buttons001 onclick=wrong()>True</button><br /><button class=buttons001 onclick=correct()>False</button>"]
var option08 = ["<button class=buttons001 onclick=correct()>True</button><br /><button class=buttons001 onclick=wrong()>False</button>"]
var option09 = ["<button class=buttons001 onclick=wrong()>True</button><br /><button class=buttons001 onclick=correct()>False</button>"]
var option10 = ["<button class=buttons001 onclick=correct()>True</button><br /><button class=buttons001 onclick=wrong()>False</button>"]


// Score Variables
var score = 0;
    score++;
var questnum = 0;
    questnum++;
// QUIZ BEGINS
function startquiz() {
    message1.textContent= questionsbank[0];
    message2.innerHTML= option01;
    number01.innerHTML= questnum++;
    console.log(questionsbank[0]);
    startbutton.innerHTML= "";
}
// Function to tell user answer was correct and increment score count by 1
function correct() {
    message3.innerHTML = "CORRECT!";
    message2.innerHTML = "";
    
    score01.innerHTML = score++;
    message4.innerHTML = "<button class=buttons001 onclick=next()>Next!</button>";

}
// Fucntion to tell user the answer was incorrect
function wrong() {
    message3.innerHTML = "INCORRECT ANSWER!";
    message2.innerHTML = "";
    
    message4.innerHTML = "<button class=buttons001 onclick=next()>Next!</button>";  
}
// Cycles through questions 
    function next() {
        if (questnum =="2") {
            message1.innerHTML = questionsbank[1];
            message2.innerHTML= option02;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
            }
        else if (questnum =="3") {
            message1.innerHTML = questionsbank[2];
            message2.innerHTML= option03;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum =="4") {
            message1.innerHTML = questionsbank[3];
            message2.innerHTML= option04;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum =="5") {
            message1.innerHTML = questionsbank[4];
            message2.innerHTML= option05;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum =="6") {
            message1.innerHTML = questionsbank[5];
            message2.innerHTML= option06;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum =="7") {
            message1.innerHTML = questionsbank[6];
            message2.innerHTML= option07;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum =="8") {
            message1.innerHTML = questionsbank[7];
            message2.innerHTML= option08;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum =="9") {
            message1.innerHTML = questionsbank[8];
            message2.innerHTML= option09;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum =="10") {
            message1.innerHTML = questionsbank[9];
            message2.innerHTML= option10;
            message3.innerHTML = "";
            number01.innerHTML = questnum++;
            message4.innerHTML = "";
        }
        else if (questnum > "10") {
            message1.innerHTML = "You got" + (document.getElementById(score01)) + "correct out of 10!";
            message4.innerHTML = "<button class=buttons001 onclick=reset()>Try Again!</button>";
            reset();
            
            
        }

function reset(){
    questnum = 0;
    score = 0;
    message1.innerHTML = "Press the Start button to try again!";
    document.getElementById(startquiz()).reset();
    
}
        
    
}



