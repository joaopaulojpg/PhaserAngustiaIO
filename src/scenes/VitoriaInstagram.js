export default class VitoriaInstagram extends Phaser.Scene {
    constructor() {
      super("VitoriaInstagram");
    }
  
    preload() {
        this.load.image("removeInstagram", "src/assets/removeTwiter.jpeg");
    }
    
    create()
      {
        this.titulo = this.add.text(90,60, "Você saiu de um aplicativo onde passava mais de 6 horas por dia!", {
            fontSize: "35px",
            fill: "#4A86E8",
        });

        this.titulo = this.add.text(90,90, "Você ganhou seu corpo, agora ganhe sua liberdade", {
          fontSize: "35px",
          fill: "#4A86E8",
      });
    
        let btnPlay = this.add.image(550,370,"removeInstagram").setOrigin(0,0);
        //   btnPlay.setScale(0.35)
        btnPlay.setDepth(0)
            let buttonTextOk = this.add.text(630,550, "Ok", {
            fontSize: "25px",
            fill: "#4A86E8",
        });
        buttonTextOk.setInteractive();

        let buttonCancel = this.add.text(730,550, "Cancelar", {
            fontSize: "25px",
            fill: "#4A86E8",
        });
        buttonCancel.setInteractive();

        buttonTextOk.on("pointerup", () => this.scene.start("FaseInstagram"));
        buttonCancel.on("pointerup", () => this.scene.start("Menu"));
      }
  }
  