const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')
const current0 = document.querySelector('.current--0')
const current1 = document.querySelector('.current--1')


diceEl.style.display = 'none'

let currentScore = 0
let activePlayer = 0
let totleScore = [0,0]
let gameOver = true

btnRoll.addEventListener('click', ()=>{
   if(gameOver){
    diceEl.style.display = 'block'
    const random1 = Math.trunc(Math.random() * 6 +1)
    diceEl.src = `dice-${random1}.png`
    currentScore += random1

    if(random1 !== 1){
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        

    } else{
        document.getElementById(`current--${activePlayer}`).textContent = 0 
        activePlayer = activePlayer == 0 ? 1:0
        currentScore = 0
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
    }


   }


})


btnHold.addEventListener('click', ()=>{
    if(gameOver){
        totleScore[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = totleScore[activePlayer]

    if(totleScore[activePlayer] >= 20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')

        gameOver = false
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0 
        activePlayer = activePlayer == 0 ? 1:0
        currentScore = 0
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
    }
    }
})

btnNew.addEventListener('click',()=>{
    currentScore = 0
    activePlayer = 0
    totleScore = 0
    gameOver = true
    document.getElementById(`current--0`).textContent = 0
    document.getElementById(`current--1`).textContent = 0
    document.getElementById(`score--0`).textContent = 0
    document.getElementById(`score--1`).textContent = 0
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--1').classList.add('player--active')
    document.querySelector('.player--0').classList.add('player--active')
})