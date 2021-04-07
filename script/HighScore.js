export default class HighScore extends Phaser.Scene {
  constructor() {
    super({ key: "HighScore" }); //super must be used before using this key to access or create properties (throws an error if not)
  }
  preload() {
    this.load.image("title", "./assets/levels/title.png");
    this.load.image("back", "./assets/other/back.png");

  }
  create() {
    var bg = this.add.image(0, 0, "title");
    bg.setOrigin(0, 0);
    var backArrow = this.add.image(100,100,"back").setScale(0.3).setInteractive({useHandCursor:true});
    backArrow.on("pointerdown", () => { this.scene.switch("Title") })

    this.getScoresAPI();
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
    this.add.text(350, 160, 'Leaderboard:', {fontSize:"50px"}).setTint(0xFF0000);
    this.add.text(150, 360, 'RANK    SCORE     NAME     DATE', {fontSize:"40px"}).setTint(0xFF0000);
    this.add.text(150, 420, `  1        ${data[0].highScore}         ${data[0].user_id}` , {fontSize:"30px"});
    this.add.text(150, 450, `  2        ${data[1].highScore}         ${data[1].user_id}` , {fontSize:"30px"});
    this.add.text(150, 480, `  3        ${data[2].highScore}         ${data[2].user_id}` , {fontSize:"30px"});
    this.add.text(150, 510, `  4        ${data[3].highScore}         ${data[3].user_id}` , {fontSize:"30px"});
    this.add.text(150, 540, `  5        ${data[4].highScore}         ${data[4].user_id}` , {fontSize:"30px"});
    this.add.text(770, 420,  `${data[0].date}`, {fontSize:"30px"})
    this.add.text(770, 450,  `${data[1].date}`, {fontSize:"30px"})
    this.add.text(770, 480,  `${data[2].date}`, {fontSize:"30px"})
    this.add.text(770, 510,  `${data[3].date}`, {fontSize:"30px"})
    this.add.text(770, 540,  `${data[4].date}`, {fontSize:"30px"})

  }  
}

