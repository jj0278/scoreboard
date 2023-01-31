let totalHome = 0
let totalGuest = 0
homeScore = document.getElementById("home-score")
guestScore = document.getElementById("guest-score")





//Handle Home Buttons
function add1Home(){
    totalHome += 1
    homeBoard()
    winningScore()
}

function add2Home(){
    totalHome += 2
    homeBoard()
    winningScore()
}

function add3Home(){
    totalHome += 3
    homeBoard()
    winningScore()
}

//Handle Guest Buttons
function add1Guest(){
    totalGuest += 1
    guestBoard()
    winningScore()
}

function add2Guest(){
    totalGuest += 2
    guestBoard()
    winningScore()
}

function add3Guest(){
    totalGuest += 3
    guestBoard()
    winningScore()
}

//Print Scores
function homeBoard(){
    homeScore.textContent = totalHome
}

function guestBoard(){
    guestScore.textContent = totalGuest
}

//Highlight Winning Score
function winningScore(){
    if (totalHome > totalGuest) {
        homeScore.style.borderColor = "green"
        guestScore.style.borderColor = "#080001"
    } else if (totalGuest > totalHome) {
        guestScore.style.borderColor = "green"
        homeScore.style.borderColor = "#080001"        
    } else {
        homeScore.style.borderColor = "#080001"
        guestScore.style.borderColor = "#080001"
    }
}

//Reset for New Game
function resetScores(){
    totalHome = 0
    totalGuest = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
    winningScore()
}