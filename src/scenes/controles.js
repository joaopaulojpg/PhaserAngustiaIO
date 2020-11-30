export default class controles extends Phaser.Scene {
    constructor() {
      super("controles");
      this.teclas;
    }
  
    preload() {
      
    }
   
  
    create()
      {
        this.add.image(0,0,"fundo").setOrigin(0,0);
        this.titulo = this.add.text(150,120, "Movimentação nas setas do teclado" , {
            fontSize: "20px",
            fill: "#4A86E8",
          });
         
          // let btnBack = this.add.image(300,370,"test").setOrigin(0,0);
          // btnBack.setInteractive();
          // btnBack.setScale(0.35)
          // btnBack.setDepth(0)
          this.buttonText = this.add.text(310,380, "VOLTAR", {
            fontSize: "30px",
            fill: "#4A86E8",
          });
          this.buttonText.setInteractive();

          
          //center the button text inside the ui button
          
        
          
        //   this.music = this.sound.add('musica',{
          
        //     volume : .05,
        //     loop : true,
        // });
      
        // this.music.play();
  
          //Adicionar o clique do botao
         
          this.buttonText.on("pointerdown", () => this.scene.start("Menu"));
        //   btnBack.on("pointerdown", () => this.music.stop() );
         
      }
  }
