import Bullet from "./Bullet.js";
import endScreen from "./endScreen.js";
import SecondLevel from "./SecondLevel.js";

/**
 * 
 * 
 */

export default class Characters extends Phaser.Scene {
  /**
   * @class Characters
 * @description creates the animations and movement for the player and enemies.
   * @param {object} walls - retuns the walls which is created from the levels. Used to create collisions.
   * @param {number} level -  returns current level
   * @param {object} enemiesSpawnInfo - returns information about the enemies such as spawningpoints X and Y and spawningdelay speed.
   */
  constructor(walls, level, enemiesSpawnInfo) {
    super({
      key: "Characters",
}); //super must be used before using this key to access or create properties (throws an error if not)
    this.walls = walls;
    this.spaceIsDown;
    this.bullet;
    this.group;
    this.wolf;
    this.countEnemiesKilled = 0;
    this.enemiesKilledText;
    this.levelText;
    this.level = level;
    this.endGame = false;
    this.enemiesSpawnInfo = enemiesSpawnInfo;
  }

  preload() {
    this.load.spritesheet("dude", "./assets/characters/player.png", {
      frameWidth: 46,
      frameHeight: 66,
    });
    this.load.image("bullet", "./assets/characters/Bullet.png");

    this.load.spritesheet("wolfman", "./assets/characters/wolfman.png", {
      frameWidth: 64.1,
      frameHeight: 65,
    });

    this.load.image("bow", "./assets/weapons/bow.png");
  }
  create() {
    this.scene.remove("endScreen");
    var end = new endScreen();
    this.scene.add("endScreen", end);

  

    this.createPlayer();
    this.createEnemies();
    this.levelText = this.add.text(200, 820, "", {
      font: "25px Courier",
      fill: "#00ff00",
    });
    this.levelText.setText(["Level: " + this.level]);
    if (this.level == 1){
    this.enemiesKilledText = this.add.text(200, 850, "Score: 0", {
      font: "25px Courier",
      fill: "#00ff00",
    });
  } else if (this.level == 2){
    this.enemiesKilledText = this.add.text(200, 850, "Score: 2500 + ", {
      font: "25px Courier",
      fill: "#00ff00",
    });
  }

    this.getWeaponsAPI();
  }
  update() {
    if (this.player.displayList != undefined) {
      var cursors = this.input.keyboard.createCursorKeys();
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
      var bullet = new Bullet(this);

      if (cursors.left.isDown) {
        this.player.setVelocityX(-190);
        this.player.anims.play("Left", true);
        this.player.facing = -500;
        this.player.facingWord = "x";
      } else if (cursors.right.isDown) {
        this.player.setVelocityX(190);
        this.player.anims.play("Right", true);
        this.player.facing = 500;
        this.player.facingWord = "x";
      } else if (cursors.up.isDown) {
        this.player.setVelocityY(-190);
        this.player.anims.play("Up", true);
        this.player.facing = -500;
        this.player.facingWord = "y";
      } else if (cursors.down.isDown) {
        this.player.setVelocityY(190);
        this.player.anims.play("Down", true);
        this.player.facing = 500;
        this.player.facingWord = "y";
      } else {
        this.player.setVelocityX(0);
        this.player.setVelocityX(0);
      }

      if (cursors.space.isDown) {
        if (!this.spaceIsDown) {
          //allows only one bullet per click on space
          bullet.fireBullet(
            this.player.x,
            this.player.y,
            this.player.facing,
            this.player.facingWord,
            this.player
          );
          this.spaceIsDown = true;
          this.physics.add.overlap(
            this.group,
            bullet.bullet,
            this.killEnemie.bind(this)
          );
        }
      }
      if (cursors.space.isUp) {
        this.spaceIsDown = false;
      }
    }

    if (this.player.displayList == undefined) {
      //player has died. END GAME
      this.playerGameOver();
      return;
    }
  }
  /* ---------------- Player CODE ----------------- */
  createPlayer() {
    this.player = this.physics.add.sprite(400, 400, "dude");
    this.player.setCollideWorldBounds(true);
    this.player.setScale(1.3);
    this.physics.add.collider(this.player, this.walls);
    this.walls.setCollisionByExclusion([-1]); //array of IDs not to be counted for collision, doesnt work without this for some reason

    this.anims.create({
      key: "Up",
      frames: [
        {
          key: "dude",
          frame: 0,
        },
      ],
      frameRate: 20,
    });
    this.anims.create({
      key: "Left",
      frames: [
        {
          key: "dude",
          frame: 1,
        },
      ],
      frameRate: 20,
    });
    this.anims.create({
      key: "Down",
      frames: [
        {
          key: "dude",
          frame: 2,
        },
      ],
      frameRate: 20,
    });
    this.anims.create({
      key: "Right",
      frames: [
        {
          key: "dude",
          frame: 3,
        },
      ],
      frameRate: 20,
    });
  }
  /* ---------------- ENEMIE CODE ------------------ */
  createEnemies() {
    this.anims.create({
      key: "walkUp",
      frames: this.anims.generateFrameNames("wolfman", { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "walkLeft",
      frames: this.anims.generateFrameNames("wolfman", { start: 9, end: 17 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "walkDown",
      frames: this.anims.generateFrameNames("wolfman", { start: 18, end: 26 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "walkRight",
      frames: this.anims.generateFrameNames("wolfman", { start: 27, end: 35 }),
      frameRate: 10,
      repeat: -1,
    });

    this.group = this.physics.add.group({
      key: "wolfman",
      frameQuantity: 50,
      collideWorldBounds: true,
      active: false,
      visible: false,
      bounceY: 1,
      bounceX: 1,
      setScale: { x: 1.4, y: 1.4 },
    });
    this.physics.add.collider(this.group, this.walls, function () {
      console.log("collide wall");
    });

    let self = this;
    this.time.addEvent({
      delay: this.enemiesSpawnInfo.spawnDelay,
      callback: function (e) {
        self.addWolfman(e);
      },
      repeat: 49,
    });
  }
  addWolfman(e) {
    var x = Phaser.Math.Between(this.enemiesSpawnInfo.spawnX1, this.enemiesSpawnInfo.spawnX2);
    var y = Phaser.Math.Between(this.enemiesSpawnInfo.spawnY1, this.enemiesSpawnInfo.spawnY2);
    var wolf = this.group.get(x, y);
    wolf.setActive(true).setVisible(true).play("walkRight");
    this.physics.moveToObject(wolf, this.player, 100);

    this.physics.add.overlap(wolf, this.player, function (wolf, player) {
      player.destroy();
    });
  }
  async getWeaponsAPI() {
    try {
      const response = await fetch(`api/weapons.php`);
      const data = await response.json();
      this.getWeapon(data);
    } catch (err) {
      console.log(err);
    }
  }
  killEnemie(enemie, bullet) {
    enemie.destroy();
    bullet.destroy();
    this.countEnemiesKilled++;
    if (this.level == 1){
    this.enemiesKilledText.setText(["Score: " + this.countEnemiesKilled * 50]); 
  } else if (this.level == 2){
    this.enemiesKilledText.setText(["Score: 2500 + " + (this.countEnemiesKilled * 50)]); 
  }

    if (this.countEnemiesKilled == 50 && this.level == 1) {
      this.add.text(300, 400,"Good Job, Level 2",{fontSize:"50px"});
    }

    this.time.delayedCall(3000, this.changeLevel, [], this);
  }
  changeLevel() {
    if (this.countEnemiesKilled == 50 && this.level == 1) {
      this.scene.remove("firstLevel");
      var level2 = new SecondLevel();
      this.scene.add("SecondLevel", level2);
      this.scene.switch("SecondLevel");
    } else if (this.countEnemiesKilled == 50 && this.level == 2){
      this.playerGameOver();
    }
  }
  

  getWeapon(data) {
    var indexLevel = this.level - 1; //this.level is the current running level (starts with 1), since the api starts with index 0 which is the bow weapon used in level 1, we can do this.level - 1 to get 0 in the first level and so on.
    this.add.text(500, 835, `Weapon: ${data[indexLevel].wp_name}`, {
      fontSize: "30px",
    });
    let loader = new Phaser.Loader.LoaderPlugin(this);
    loader.image(`gun${indexLevel}`, `${data[indexLevel].image_url}`);
    loader.once(Phaser.Loader.Events.COMPLETE, () => {
      // texture loaded so use instead of the placeholder
      this.add.image(800, 850, `gun${indexLevel}`).setScale(0.8);
    });
    loader.start();
  }
  playerGameOver() {
    this.scene.remove("firstLevel");
    this.scene.remove("SecondLevel");
    this.scene.start("endScreen");

    var calcScore = 0;
    if (this.level == 1){
      calcScore = this.countEnemiesKilled * 50;
    } else if (this.level == 2){
      calcScore = 2500 + this.countEnemiesKilled * 50;
    }
    console.log(calcScore);

    fetch("./PHP/inserthighscore.php", {
      method: "POST",
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("playerName").innerHTML,
        score: calcScore,
      }),
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
      });
  }
}
