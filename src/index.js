import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import Menu from "./scenes/Menu";
import controles from "./scenes/controles";
import PlayGame from "./scenes/PlayGame";
import vitoria from "./scenes/vitoria";
import derrota from "./scenes/derrota";
const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1440,
    height: 960,
 
    scale: {
      // Fit to window
      mode: Phaser.Scale.FIT,
      // Center vertically and horizontally
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
      createContainer: true,
    },
    scene: [
      BootScene,
      Menu,
      controles,
      PlayGame,
      vitoria,
      derrota
    ],
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
        gravity: {
          gravity: { y: 500 },
        },
      },
    },
  };
  
const game = new Phaser.Game(config);
