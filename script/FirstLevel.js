/**
 * Class for the first level, extending the phaser object Phaser.Scene
 * @class firstLevel
 */
import Characters from './Characters.js';


export default class firstLevel extends Phaser.Scene {
    constructor() {
        super({ key: "firstLevel"}) //super must be used before using this key to access or create properties (throws an error if not)   
     }
    preload() {
        this.load.tilemapTiledJSON("level", `./assets/levels/level-1.json`);
        this.load.image("tiles", "./assets/levels/terrain_atlas.png");
    }
    create() {
        console.log(this.scene);
        let map = this.make.tilemap({key: 'level'});
        let terrain = map.addTilesetImage("terrain_atlas", "tiles");
        map.createLayer("Grass", terrain).setDepth(-1);
        let walls = map.createLayer("Walls", terrain);

        const level = 1;
        let enemieSpawnInfo = {
            spawnX1: 0,
            spawnX2: 5,
            spawnY1: 190,
            spawnY2: 550,
            spawnDelay: 600
        }
        var characters = new Characters(walls, level, enemieSpawnInfo);
        this.scene.add("Characters", characters);
        this.scene.launch("Characters"); 
      }
    
    update() {}
   
}
