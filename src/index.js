import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import Menu from "./scenes/Menu";
import controles from "./scenes/controles";
import PlayGame from "./scenes/PlayGame";
import vitoria from "./scenes/vitoria";
import derrota from "./scenes/derrota";
import FaseTwiter from "./scenes/FaseTwiter";
import FaseInstagram from "./scenes/FaseInstagram";
import VitoriaFacebook from "./scenes/VitoriaFacebook";
import VitoriaTwiter from "./scenes/VitoriaTwiter";

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
      FaseTwiter,
      FaseInstagram,
      vitoria,
      derrota,
      VitoriaFacebook,
      VitoriaTwiter
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
