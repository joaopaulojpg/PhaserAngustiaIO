export default class VitoriaTwiter extends Phaser.Scene {
    constructor() {
      super("VitoriaTwiter");
    }
  
    preload() {
        this.load.image("vitoriaTwiter", "src/assets/vitoriaTwiter.png");

    }
    
    create()
      {
          this.titulo = this.add.text(180,60, "Você evitou um RT, parabéns", {
            fontSize: "45px",
            fill: "#4A86E8",
          });
        
          let btnPlay = this.add.image(550,170,"vitoriaTwiter").setOrigin(0,0);
        //   btnPlay.setScale(0.35)
          btnPlay.setDepth(0)
          let buttonTextOk = this.add.text(630,350, "Ok", {
            fontSize: "25px",
            fill: "#4A86E8",
          });
          buttonTextOk.setInteractive();

          let buttonCancel = this.add.text(730,350, "Cancelar", {
            fontSize: "25px",
            fill: "#4A86E8",
          });
          buttonCancel.setInteractive();

          buttonTextOk.on("pointerup", () => this.scene.start("FaseInstagram"));
          buttonCancel.on("pointerup", () => this.scene.start("Menu"));
      }
  }
  