import { kvote } from "./kvote.js";



let ballsHolder = document.querySelector(".balls-holder");

createBallsGrid();

function createBallsGrid() {

  let text = "";
  kvote.forEach((kvota, index) => {
    text += `
      <div class="win-chance">
          <img src="lucky6Images/basic.png" />
          <div class="kvota">${kvota}</div>
      </div>
      `.trim()
  })
  ballsHolder.innerHTML = text;
}