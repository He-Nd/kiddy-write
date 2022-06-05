# :crayon: KiddyWrite

KiddyWrite is a responsive web application that helps young kids learn how to write English alphabets and improve their handwriting by using a tablet or a stylus following the [gamification](https://en.wikipedia.org/wiki/Gamification) concept.

### :point_right: [Click Here for Live Demo](https://he-nd.github.io/kiddy-write/) :point_left:

## How it works
 
Each user should have an account by signing in to login in after and start playing the game.

 ![login page](https://github.com/He-Nd/kiddy-write/blob/main/readmeAssets/login-pc.png)

Users are presented with a random letter that they need to write. A timer will countdown in each round for the users to try and score as high as they can before the time is up. If the user consecutively fails three attempts to write that letter, they will provided with a hint, it will displaying the letter on the whiteboard for the user to trace.


<ul>
 <li><b>First successful attempt:</b></li>
 <br/>
<img src="https://github.com/He-Nd/kiddy-write/blob/main/readmeAssets/writeCorrect.gif" align="center" /> 
&nbsp;<br/>

 <li><b>A failed attempt - hint given:</b></li>
 <br/>
<img src="https://github.com/He-Nd/kiddy-write/blob/main/readmeAssets/writeWrongAndHint.gif" />
&nbsp;<br/>

 <li><b>Time up:</b></li>
 <br/>
<img src="https://github.com/He-Nd/kiddy-write/blob/main/readmeAssets/timeUp.png" align="center" />
</ul>
Feedback is provided to the user whether they were able to write correctly or not.

After finishing the game, the score will be stored in the database for the purpose of displaying the performance of all the user on a graph.

The graph will group and display the users in 3 section based on their highest score.

## Technologies

 

- [Tesseract](https://www.npmjs.com/package/tesseract.js/v/2.1.1) for OCR.
- [Fabric](https://www.npmjs.com/package/fabric) for the whiteboard canvas.
- [React](https://reactjs.org/)
- [material UI](https://mui.com/)
- [MongoDB](mongodb.com)
- [Axios](https://axios-http.com/docs/intro)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/) for authentication.
- [Chart.js](https://www.chartjs.org/) for graph display.

## Installation

 

In order to run KiddyWrite, you need to install and run its [backend](https://github.com/He-Nd/kiddy-write-backend) in and provide the necessary environment variables.
