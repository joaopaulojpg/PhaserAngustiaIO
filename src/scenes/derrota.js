export default class derrota extends Phaser.Scene {
    constructor() {
      super("derrota");
  
    }
  
    preload() {
      
    }
  
    create()
      {
          this.add.image(0,0,"fundo").setOrigin(0,0);
         
          this.titulo = this.add.text(220,60, "Você perdeu", {
            fontSize: "45px",
            fill: "#FFD700",
          });
          this.titulo = this.add.text(100,100, "Boa sorte na próxima", {
            fontSize: "45px",
            fill: "#FFD700",
          });
        
          let btnPlay = this.add.image(350,370,"test").setOrigin(0,0);
          btnPlay.setInteractive();
          btnPlay.setScale(0.35)
          btnPlay.setDepth(0)
          this.buttonText = this.add.text(375,370, "TENTAR", {
            fontSize: "25px",
            fill: "#FFD700",
          });
          this.buttonText = this.add.text(355,390, "NOVAMENTE", {
            fontSize: "25px",
            fill: "#FFD700",
          });
          let btnMENU = this.add.image(210,380,"test").setOrigin(0,0);
          btnMENU.setInteractive();
          btnMENU.setScale(0.35)
          btnMENU.setDepth(0)
          this.buttonText = this.add.text(240,380, "MENU", {
            fontSize: "30px",
            fill: "#FFD700",
          });
          
          //center the button text inside the ui button
          
        
          let player = this.add.image(40,70,"morto").setOrigin(0,0);
          player.setScale(2.5)
          
         
  
          //Adicionar o clique do botao
          btnPlay.on("pointerdown", () => this.scene.start("PlayGame"));
          btnMENU.on("pointerdown", () => this.scene.start("BootScene"));
      }
      update(){
  
      }
  }
  