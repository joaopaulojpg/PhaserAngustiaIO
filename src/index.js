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
import VitoriaInstagram from "./scenes/VitoriaInstagram";
import FaseWhatsapp from "./scenes/FaseWhatsapp";
import DerrotaFace from "./scenes/DerrotaFace";
import DerrotaTwiter from "./scenes/DerrotaTwiter";
import DerrotaInsta from "./scenes/DerrotaInsta";
import DerrotaWhatsapp from "./scenes/DerrotaWhatsapp";
import Fim from "./scenes/Fim";

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1440,
    height: 605,
 
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
      FaseWhatsapp,
      vitoria,
      derrota,
      VitoriaFacebook,
      VitoriaTwiter,
      VitoriaInstagram,
      DerrotaFace,
      DerrotaTwiter,
      DerrotaInsta,
      DerrotaWhatsapp,
      Fim
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
