/**
 * @class Title
 * @classdesc Adds a intro scene which the user can select to start the game, see how to play, and see top 5 highscore
 */
import firstLevel from './firstLevel.js';
import HighScore from './HighScore.js';
import HowToPlay from './HowToPlay.js';

export default class Title extends Phaser.Scene {
    constructor() {
        super({ key: "Title"}) //super must be used before using this key to access or create properties (throws an error if not)   
     }
    preload() {
        this.load.image("title", "./assets/levels/title.png");
        this.load.image("welcome", "./assets/other/welcome-blood.png");

        this.load.image("playB", "./assets/other/play-black.png");
        this.load.image("playR", "./assets/other/play-red.png");

        this.load.image("highScoreBlack", "./assets/other/high-scores.png");
        this.load.image("highScoreRed", "./assets/other/high-scores-red.png");

        this.load.image("howtoplayBlack", "./assets/other/howtoplay-black.png");
        this.load.image("howtoplayRed", "./assets/other/howtoplay-red.png");

    }

    create() {
        var bg = this.add.image(0,0,"title");
        bg.setOrigin(0,0); //renders whole image in gamescope
        var bg_text = this.add.image(30,40, "welcome")
        bg_text.setOrigin(0,0);

        var highscore = new HighScore();
        this.scene.add("HighScore", highscore);  

        var button = this.add.image(512,400,"playB").setInteractive({useHandCursor:true});
        button.on('pointerover', () => { button = this.add.image(512,400,"playR") });
        button.on('pointerout', () => { button = this.add.image(512,400,"playB") })
        button.on('pointerdown', () => { this.clickPlay(); })

        var button = this.add.image(512,500,"howtoplayBlack").setInteractive({useHandCursor:true});
        button.on('pointerover', () => { button = this.add.image(512,500,"howtoplayRed") });
        button.on('pointerout', () => { button = this.add.image(512,500,"howtoplayBlack") })
        button.on('pointerdown', () => { this.clickHowTo(); })

        var button = this.add.image(512,600,"highScoreBlack").setInteractive({useHandCursor:true});
        button.on('pointerover', () => { button = this.add.image(512,600,"highScoreRed") });
        button.on('pointerout', () => { button = this.add.image(512,600,"highScoreBlack") })
        button.on('pointerdown', () => { this.clickHighScore(); })
    }
    update() {}
    
    clickPlay() {
        this.scene.remove('Characters');   
        var level1 = new firstLevel();
        this.scene.add("firstLevel", level1);
        this.scene.switch('firstLevel'); 
    }
    clickHowTo() {
        this.scene.remove("HowToPlay");
        var howtoplay = new HowToPlay();
        this.scene.add("HowToPlay", howtoplay);
        this.scene.switch('HowToPlay'); 
    } 
    clickHighScore() {
        this.scene.switch('HighScore');   
    }
    
}
