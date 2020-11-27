export default class VitoriaTwiter extends Phaser.Scene {
    constructor() {
      super("VitoriaTwiter");
    }
  
    preload() {
        this.load.image("removeTwiter", "src/assets/removeTwiter.jpeg");

    }
    
    create()
      {
          this.titulo = this.add.text(180,60, "Você evitou um RT, parabéns", {
            fontSize: "45px",
            fill: "#4A86E8",
          });
        
          let btnPlay = this.add.image(550,370,"removeTwiter").setOrigin(0,0);
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
  