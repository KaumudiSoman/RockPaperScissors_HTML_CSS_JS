let userScore = 0
let compScore = 0
let count = 0

let newGame = document.querySelector('.game-btn')
const moves = document.querySelectorAll('.move-btn')

document.getElementById('comp-score').innerText = compScore
document.getElementById('user-score').innerText = userScore

const getCompMove = () => {
    const options = ['rock', 'paper', 'scissors']
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const playGame = (userMove) => {
    const compMove = getCompMove()

    if(userMove === compMove) {
        document.getElementById('winner').innerText = "It's a tie. Play again."
        document.getElementById('winner').style.color = 'black'
    }
    else {
        let userWin = true
        if(userMove === 'rock') {
            if(compMove === 'scissors') {
                document.getElementById('winner').innerText = 'Congratulations!! You won. Play again.'
                document.getElementById('winner').style.color = 'green'
                userScore++
                document.getElementById('user-score').innerText = userScore
                document.getElementById('comp-score').innerText = compScore
            }
            else {
                document.getElementById('winner').innerText = 'Oops! Computer won. Play again.'
                document.getElementById('winner').style.color = 'red'
                compScore++
                document.getElementById('comp-score').innerText = compScore
                document.getElementById('user-score').innerText = userScore
            }
        }
        if(userMove === 'paper') {
            if(compMove === 'rock') {
                document.getElementById('winner').innerText = 'Congratulations!! You won. Play again.'
                document.getElementById('winner').style.color = 'green'
                userScore++
                document.getElementById('user-score').innerText = userScore
                document.getElementById('comp-score').innerText = compScore
            }
            else {
                document.getElementById('winner').innerText = 'Oops! Computer won. Play again.'
                document.getElementById('winner').style.color = 'red'
                compScore++
                document.getElementById('comp-score').innerText = compScore
                document.getElementById('user-score').innerText = userScore
            }
        }
        if(userMove === 'scissors') {
            if(compMove === 'paper') {
                document.getElementById('winner').innerText = 'Congratulations!! You won. Play again.'
                document.getElementById('winner').style.color = 'green'
                userScore++
                document.getElementById('user-score').innerText = userScore
                document.getElementById('comp-score').innerText = compScore
            }
            else {
                document.getElementById('winner').innerText = 'Oops! Computer won. Play again.'
                document.getElementById('winner').style.color = 'red'
                compScore++
                document.getElementById('comp-score').innerText = compScore
                document.getElementById('user-score').innerText = userScore
            }
        }
    }
}

newGame.addEventListener('click', () => {
    userScore = 0
    compScore = 0
    document.getElementById('comp-score').innerText = compScore
    document.getElementById('user-score').innerText = userScore
    document.getElementById('winner').innerText = ''
})

moves.forEach((move) => {
    move.addEventListener('click', () => {
        const userMove = move.getAttribute('id')
        playGame(userMove)
        count++
        document.getElementById('rounds').innerText = `Round : ${count}`
    })
})