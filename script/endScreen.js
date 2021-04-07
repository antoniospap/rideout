/**
 * @class endScreen
 */
export default class endScreen extends Phaser.Scene {
    constructor() {
      super({ key: "endScreen" }); //super must be used before using this key to access or create properties (throws an error if not)
    }
    preload() {
      this.load.image("title", "./assets/levels/title.png");
      this.load.image("back", "./assets/other/back.png");
      this.load.image("gameover", "./assets/other/gameover.png");

    }
    create() {
      var bg = this.add.image(0, 0, "title");
      bg.setOrigin(0, 0);
      var backArrow = this.add.image(100,100,"back").setScale(0.3).setInteractive({useHandCursor:true});
      backArrow.on("pointerdown", () => { this.scene.switch("Title") })

      var gameoverIMG = this.add.image(550, 100, "gameover");  
      this.getScoresAPI();
      this.getLastScoreAPI();

    }
    update() {}
  
    async getScoresAPI() {
      try {
        const response = await fetch(`api/highScore.php`);
        const data = await response.json();
        this.getScores(data);
      } catch (err) {
        console.log(err);
      }
    }
    getScores(data) {
      this.add.text(300, 360, 'RANK  SCORE   NAME', {fontSize:"40px"}).setTint(0xff00ff);
      this.add.text(300, 420, `  1      ${data[0].highScore}     ${data[0].user_id}` , {fontSize:"30px"});
      this.add.text(300, 450, `  2      ${data[1].highScore}     ${data[1].user_id}` , {fontSize:"30px"});
      this.add.text(300, 480, `  3      ${data[2].highScore}     ${data[2].user_id}` , {fontSize:"30px"});
      
    }  
    async getLastScoreAPI() {
      try {
        const response = await fetch(`api/highScore.php/?orderby=id`);
        const data = await response.json();
        this.getLastScore(data);
      } catch (err) {
        console.log(err);
      }
    }
    getLastScore(data) {
      this.add.text(300, 180, 'Well played, you got:', {fontSize:"40px"}).setTint(0xff00ff);
      this.add.text(450, 220, `Score: ${data[0].highScore}` , {fontSize:"30px"});
    }  
  }
  
  