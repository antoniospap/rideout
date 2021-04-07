export default class HowToPlay extends Phaser.Scene {
    constructor() {
      super({ key: "HowToPlay" }); //super must be used before using this key to access or create properties (throws an error if not)
    }
    preload() {
      this.load.image("title", "./assets/levels/title.png");
      this.load.image("back", "./assets/other/back.png");
      this.load.image("howtoplay", "./assets/other/howtoplay-red.png");
      this.load.image("keys", "./assets/other/keys.png");
      this.load.image("wolf", "./assets/characters/wolf.png");


    }
    create() {
      var bg = this.add.image(0, 0, "title");
      bg.setOrigin(0, 0);
      var backArrow = this.add.image(100,100,"back").setScale(0.3).setInteractive({useHandCursor:true});
      backArrow.on("pointerdown", () => { this.scene.switch("Title") })

      var howtoplayIMG = this.add.image(550, 100, "howtoplay");
      
      var keysText = this.add.text(100, 200, "To move your character use the arrows up, down, left, right. \n And to shoot bullets use the spacebar!", {fontSize:"20px"})
      var keysIMG = this.add.image(300, 300, "keys").setScale(1.1);

      var wolfText = this.add.text(480, 500, "Kill all the wolfmans before they reach you,\n be careful they got a looong reach!", {fontSize:"20px"})
      var wolfIMG = this.add.image(700, 600, "wolf").setScale(1.4);
    }
    update() {}
  }
  
  