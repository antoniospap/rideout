/**
 * Class for the first level, extending the phaser object Phaser.Scene
 * @class SecondLevel
 */
 import Characters from './Characters.js';


 export default class SecondLevel extends Phaser.Scene {
     constructor() {
         super({ key: "SecondLevel"}) //super must be used before using this key to access or create properties (throws an error if not)   
      }
     preload() {
         this.load.tilemapTiledJSON("level2", `./assets/levels/level-2.json`);
         this.load.image("tiles", "./assets/levels/terrain_atlas.png");
     }
     create() {
         this.scene.remove("Characters");
         let map = this.make.tilemap({key: 'level2'});
         let terrain = map.addTilesetImage("terrain_atlas", "tiles");
         map.createLayer("Grass", terrain).setDepth(-1);
         let walls = map.createLayer("Walls", terrain);
        
         const level = 2;
         let enemieSpawnInfo = {
            spawnX1: 0,
            spawnX2: 5,
            spawnY1: 0,
            spawnY2: 800,
            spawnDelay: 450
        }
         var characters = new Characters(walls, level, enemieSpawnInfo);
         this.scene.add("Characters", characters);
         this.scene.launch("Characters"); 
       }
     
     update() {}
    
 }
 