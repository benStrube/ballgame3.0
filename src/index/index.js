import Paddle from './../game/paddle';
import InputHandler from './../eventHandlers/inputHandler';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

let paddle = new Paddle(GAME_HEIGHT,GAME_WIDTH);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,800,600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();