# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor]
(https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt).
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Author](#author)


### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links

- Solution URL: [Add solution URL here](https://github.com/RennanPereira/Frontend-Mentor-Challenge-expenses-chart)
- Live Site URL: [Add live site URL here](https://rennanpereira.github.io/Frontend-Mentor-Challenge-expenses-chart/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I've learned how to use two diferent eventListener with the same function within and i've learned the 'load' and 'resize' DOM events.

```js
  window.addEventListener('load', graficSize)
  window.addEventListener('resize', graficSize)

  function graficSize() {
    let pageWidth = innerWidth
    if (pageWidth < 377) {
      boxEdited = `${pixelNumber * 3}px`
      boxToEdit.style.height = boxEdited
    } else {
      let boxEdited = `${pixelNumber * 2}px`

      boxToEdit.style.height = boxEdited
    }
  }  
```

## Author

- Website - [Rennan Pereira](https://github.com/RennanPereira)
- Frontend Mentor - [@RennanPereira](https://www.frontendmentor.io/profile/RennanPereira)
