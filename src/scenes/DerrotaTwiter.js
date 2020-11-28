export default class DerrotaTwiter extends Phaser.Scene {
    constructor() {
      super("DerrotaTwiter");
    }
  
    preload() {
        this.load.image("derrotaTwiter", "src/assets/derrotaTwiter.png");

    }
    
    create()
      {
          this.titulo = this.add.text(130,40, "Você tentou, mas acabou tretando com aquela pessoa..", {
            fontSize: "35px",
            fill: "#4A86E8",
          });
        
          let btnPlay = this.add.image(500,100,"derrotaTwiter").setOrigin(0,0);
        //   btnPlay.setScale(0.35)
          btnPlay.setDepth(0)
          let buttonTextOk = this.add.text(530,350, "Restart", {
            fontSize: "25px",
            fill: "#4A86E8",
          });
          buttonTextOk.setInteractive();

          let buttonCancel = this.add.text(800,350, "Menu", {
            fontSize: "25px",
            fill: "#4A86E8",
          });
          buttonCancel.setInteractive();

        //   let btnMENU = this.add.image(210,380,"test").setOrigin(0,0);
        //   btnMENU.setInteractive();
        //   btnMENU.setScale(0.35)
        //   btnMENU.setDepth(0)
        //   this.buttonText = this.add.text(240,380, "MENU", {
        //     fontSize: "30px",
        //     fill: "#FFD700",
        //   });
          
          //center the button text inside the ui button
          
        
        //   let player = this.add.image(120,200,"teste").setOrigin(0,0);
         
  
          //Adicionar o clique do botao
          buttonTextOk.on("pointerup", () => this.scene.start("FaseTwiter"));
          buttonCancel.on("pointerup", () => this.scene.start("Menu"));
      }
  }
  