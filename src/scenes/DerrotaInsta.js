export default class DerrotaInsta extends Phaser.Scene {
    constructor() {
      super("DerrotaInsta");
    }
  
    preload() {
        this.load.image("derrotaInsta", "src/assets/derrotaInsta.jpg");

    }
    
    create()
      {
          this.titulo = this.add.text(150,40, "Você sem querer clicou no Stories daquela pessoa indesejada", {
            fontSize: "35px",
            fill: "#4A86E8",
          });
        
          let btnPlay = this.add.image(300,100,"derrotaInsta").setOrigin(0,0);
        //   btnPlay.setScale(0.35)
          btnPlay.setDepth(0)
          let buttonTextOk = this.add.text(580,550, "Restart", {
            fontSize: "25px",
            fill: "#4A86E8",
          });
          buttonTextOk.setInteractive();

          let buttonCancel = this.add.text(830,550, "Menu", {
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
          buttonTextOk.on("pointerup", () => this.scene.start("FaseInstagram"));
          buttonCancel.on("pointerup", () => this.scene.start("Menu"));
      }
  }
  