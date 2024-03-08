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
  }else if(bmi(weight,height) >=18.6 && bmi < 24.9){
    weightguied.innerHTML = `You weight is normal`
  }else{
    weightguied.innerHTML = `You weight is overweight}`
  }
})

```