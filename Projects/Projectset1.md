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