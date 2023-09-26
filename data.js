let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");


let countdown = 0;
let intervalId;
function timer(){
    countdown = countdown + 1;
    timerEl.textContent = countdown + " ";
    timerEl.style.color = "red";
}

function clear() {
    countdown = 0
    timerEl.textContent = countdown + " ";
    clearInterval(intervalId);
}

function randomQuote() {
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            timer();
            intervalId = setInterval(timer, 1000);
            return response.json();
        })
        .then(function(jsondata) {

            let randomQuote = jsondata.content;
            quoteDisplayEl.textContent = randomQuote;
        });
}
randomQuote();


resetBtnEl.onclick = function() {
    
    quoteInputEl.value = "";
    resultEl.textContent = "";
    clear();
    randomQuote();
};

submitBtnEl.onclick = function() {
    let textEl = quoteInputEl.value;
    let quote = quoteDisplayEl.textContent;
    if (quote === textEl) {
        resultEl.textContent = "You typed in " + countdown + " seconds";
        resultEl.style.color = "#17594A";
        clearInterval(intervalId);
    } else {
        resultEl.textContent = "You typed incorrect sentence";
        resultEl.style.color = "red";
    }
};

