// Iteration 2: Generate 2 random number and display it on the screen
const num1box = document.getElementById('number1')

let number1 = Math.round(Math.random()*100)
console.log(number1)

num1box.innerText = number1

const num2box = document.getElementById('number2')

let number2 = Math.round(Math.random()*100)
console.log(number2)

num2box.innerText = number2

// Iteration 3: Make the options button functional

let greaterThan = document.getElementById('greater-than')
let Equal=document.getElementById('equal-to')
let lessThan=document.getElementById('lesser-than')

let score = 0

greaterThan.onclick = function(){
    if(number1>number2){
        score++
        reset(timerId)
        
    }
    else{
        location.href = './gameover.html'
    }
    number1 = Math.round(Math.random()*100)
    number2 = Math.round(Math.random()*100)

    num1box.innerText=number1
    num2box.innerText=number2

}
Equal.onclick = function(){
    if(number1==number2){
        score++
        reset(timerId)
    }
    else{
        location.href = './gameover.html'
    }
    number1 = Math.round(Math.random()*100)
    number2 = Math.round(Math.random()*100)

    num1box.innerText=number1
    num2box.innerText=number2
       
}
lessThan.onclick = function(){
    if(number1<number2){
        score++
        reset(timerId)

    }
    else{
        location.href = './gameover.html'
    }
    number1 = Math.round(Math.random()*100)
    number2 = Math.round(Math.random()*100)

    num1box.innerText=number1
    num2box.innerText=number2
       
}

// Iteration 4: Build a timer for the game

var time = 5
let timer = document.getElementById('timer')
var timerId

function showTimer(){
    time = 5
    timer.innerText = time

    timerId = setInterval(() => {
        time--
        if(time==0){
            location.href='./gameover.html'
        }
        timer.innerText=time
      
    }, 1000);
    localStorage.setItem('score',score)
  

}

function reset(timerId){
    clearInterval(timerId)
    showTimer()
}
showTimer()