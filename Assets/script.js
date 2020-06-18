//start button of game
var startBtn = document.querySelector("#start-game")
var timer = 3
//Event Listener for startBtn


//Question function that runs while the timer is greater than 0
function Questions () {
    var qbank=["1","2"];
    
    while (timer > 0)
    
//nested switch within a loop that cycles between questions that displays new questions 
    for  ( i = 0; q = 0; i <= q){ ii++

        switch (i>=0) {
            case 1:
            q = 1
            var qadd = document.quereyselect("questionDiv")
            pushQ = qadd.createElement("div")
            pushQ.textcontent = qbank[1]
        
            break;

        case 2: 
            q = 2
            var qadd = document.quereyselect("questionDiv")
            pushQ = qadd.createElement("div")
            pushQ.textcontent = qbank[1]
            
            break;
        
    }

} }


//timer that counts down from 100 and is rendered onto html doc 

countTime()

function timerStart (){ 


   var timerCount= timer - 1 
   timer = timerCount
   console.log(timer)

   const ul = document.getElementById('time-display');
   const li = document.createElement('div');
   li.textContent = timer;
   ul.appendChild(li);//add item to the list
   setTimeout("countTime", 500)
   ul.removeChild(li)
   countTime()
    
if (timer = 1) {
    setTimeout("countTime")
    
}
   }  

function countTime () {

    
    setInterval(timerStart, 500) 
} 



startBtn.addEventListener("click",console.log("hello"));
