import Title from './Title.js';

/**
 * @file script.js is the main file
 * @author Antonios Papathanassiadis
 */

let config = {
    type: Phaser.AUTO, //selects WEBGL as standard but if the browser does not support it it switches to CANVAS
    width: 1024,
    height: 900, //800 for the game and 100 bottom for the player information
    physics: {
        default: 'arcade',
    },
    init: window.onload = function(){
        config.game = new Phaser.Game(config);
        config.createMap();
    },
    createMap: function() {
        var titleScene = new Title();
        config.game.scene.add("Title", titleScene);
        config.game.scene.start("Title"); //starts with this scene 
    }
}