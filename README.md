# Do you know me? - cli quiz app

This is a simple cli app which asks questions, takes answer as the input and displays the score. Built with NodeJS.

## Overview

### Screenshots

![question screenshot](./screenshots/markone.png)

![final score screenshot](./screenshots/markone2.png)

### Links

- Live Site URL: [live site on replit](https://replit.com/@DarshanDamre/markOne-cli-quiz-app?embed=true#index.js)

## My process

### Built with

- NodeJS

### What I learned

Learned how to take input from the user and store it using [readline-sync npm package](https://www.npmjs.com/package/readline-sync).

```js
const welcome = () => {
  let userName = readlineSync.question("Enter your name: ");

  console.log(
    `<----- Welcome, ${userName} -----> \nLet's play DO YOU KNOW Darshan?`
  );
};
```

## Author

- Twitter - [@DarshanDamre](https://twitter.com/DarshanDamre)
- LinkedIn - [Darshan Damre](https://www.linkedin.com/in/darshandamre/)
- Website - [Darshan Damre](https://darshandamre.netlify.app/)
