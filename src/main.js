/*
Arthur Lee
Endless Runner, Cookie shooter

This is an arcade shooter type game where the player must dodge enemies to stay alive. I called it cookie shooter
because when making the background of a rocky terrain it looked like a cookie.

I am proud of it because the player rotates according to the mouse pointer and made the mouse cursor an aimer.
Although it sounds simple it was much tougher than I expected, even though I expected it to be difficult.

Music: Hero 80s by AlexiAction


*/


let config = {
    type: Phaser.CANVAS,
    // width: 640,
    
    allign: "center",
    width: 600,
    height: 722,
    scene: [ Menu, Play, Instructions ],
    physics: {
        default: "arcade",
        arcade: {  
        }
    }
}
 
let game = new Phaser.Game(config);



// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE,keyI, keyW, keyA, keyS, keyD, keyESC, keyENTER, mouseClick;

// var SPEED = 100;
// var ROTATION_SPEED = 1 * Math.PI; // 0.5 turn per sec, 2 sec per turn
// var ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
// var TOLERANCE = 0.02 * ROTATION_SPEED;

// var velocityFromRotation = Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;
// var player;