/**
 * @class Bullet
 * @description generates bullets
 */

class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet');
        this.bullet;
    }
    /**
     * @property {function fire(x, y, playerVelocity, facingWord) {
        * @param {number} x  - Players current position in X axis
        * @param {number} y  - Players current position in Y axis
        * @param {number} playerVelocity - Which side of X or Y the player if facing, towards - or + and the speed of the bullet
        * @param {string} facingWord - Which way the player is facing X or Y
     }}
     *  @description checks where the sprite/character is facing and shoots at that direction
     */

    fire(x, y, playerVelocity, facingWord) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);
        if (facingWord == "x") {
            this.setVelocityX(playerVelocity);
        } else if (facingWord = "y") {
            this.setVelocityY(playerVelocity);
        }
    }
}

export default class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 1,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    fireBullet(x, y, playerVelocity, facingWord) {
        this.bullet = this.getFirstDead(false);
        if (this.bullet) {
            this.bullet.fire(x, y, playerVelocity, facingWord);

        }
    }
}