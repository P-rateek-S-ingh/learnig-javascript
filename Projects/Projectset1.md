# Project related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-nq4mn2?file=1-colorChanger%2Fchaiaurcode.js)


# Solution code

## Project 1


```javascript
console.log('Prateek Singh')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((item) => {
  item.addEventListener('click',(e) => {
    console.log(e)
    console.log(e.target)
    
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor = e.target.id
        break;
      case 'white':
        body.style.backgroundColor = e.target.id
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id
        break;
    }
  })
})


```


## Project 2

```javascript

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  //method to find bmi
  const bmi = function(weight,height){
    return (weight/((height*height)/10000)).toFixed(2);
  }

  if(height === ''|| height < 0 || isNaN(height)){
    result.innerHTML = `please enter correct height`
  }else if(weight === ''|| weight < 0 || isNaN(weight)){
    result.innerHTML = `please enter correct weight`
  }else{
    result.innerHTML = bmi(weight,height)
  }

  const weightguied = document.querySelector('#weight-guide')
  if(bmi(weight,height) < 18.6){
    weightguied.innerHTML = `You are underweight `
  }else if(bmi(weight,height) >=18.6 && bmi(weight,height) < 24.9){
    weightguied.innerHTML = `You weight is normal`
  }else if(bmi(weight,height) > 24.9){
    weightguied.innerHTML = `You weight is overweight}`
  }
})

```

## Project 3

```javascript

const clock = document.querySelector('#clock')


setInterval(() => {
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```



## Project 3
```javascript
let random_no = parseInt(Math.random()*100+1)

let UserInput = document.querySelector('#guessField')
let submit = document.querySelector('#subt')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let startOver = document.querySelector('.resultParas')
let lowOrHigh = document.querySelector('.lowOrHi')


let playgame = true
let numofguess = 1
let p = document.createElement('p')


if(playgame){
submit.addEventListener('click',(e) => {
  e.preventDefault()
  let guess = parseInt(UserInput.value)
  console.log(guess)
  validateguess(guess)
})
}

function validateguess(guess){
  if(isNaN(guess)){
    displayMessage('please enter a number')
  }else if(guess < 1){
    displayMessage('please enter the number greater than 1')
  }else if(guess > 100){
    displayMessage('please enter the number less than 100')
  }else{
    
    if(numofguess >= 10){
      displayguess(guess)
      displayMessage(`GAME OVER & RANDOM NO. IS ${random_no}`)
      endGame()
    }else{
      displayguess(guess)
      checkforguess(guess)
    }
  }
}

function checkforguess(guess){
  if(guess == random_no){
    displayMessage(`YAY! you guessed it right`)
    endGame()
  }else if(guess < random_no){
    displayMessage('The number is too low')
  }else if(guess > random_no){
    displayMessage(`The number is too high`)
  }
}

function displayguess(guess){
  UserInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numofguess++;
  remaining.innerHTML = `${11 - numofguess}`;
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
  UserInput.value = ''
  UserInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id= "newGame"> New Game</h2>`
  startOver.appendChild(p)
  playgame = false
  startGame()


}

function startGame(){
  const newGame = document.querySelector('#newGame')
  newGame.addEventListener('click', (e) => {
    random_no = parseInt(Math.random()*100+1)
    numofguess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numofguess}`;
    UserInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playgame = true
  })
}

```