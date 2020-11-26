export default class BootScene extends Phaser.Scene {
    constructor() {
      super("BootScene");
    }
  
    preload() {
      //load tiledmap
      this.loadImages();
      this.loadTiledMap();
      //images
      //load spritesheets
      this.loadSpriteSheets();
      this.loadAudio();
    }
    loadAudio(){
    //   this.load.audio("musica", "src/assets/audio/music.wav")
    //   this.load.audio("pdamage", "src/assets/audio/PlayerDamage.wav")
    //   this.load.audio("edamage", "src/assets/audio/Punch_04.wav")
    }
  
  
  
    loadImages() {
      this.load.image("tiles", "src/assets/background-cartoon.png");
      this.load.image("fundo", "src/assets/background2.jpeg");
        //   this.load.image("test", "src/assets/img/bt2.png");
        //   this.load.image("teste", "src/assets/img/imginic.png");
        //   this.load.image("teclas", "src/assets/img/teclass.png");
        //   this.load.image("morto", "src/assets/img/morto.png");
  
    }
  
    loadTiledMap() {
      this.load.tilemapTiledJSON("map", "src/assets/angustiaIO.json");
      // this.mapa.setDepth(10)
    }
  
    loadSpriteSheets() {
        this.load.spritesheet("player","src/assets/sprite-completa.png",{
            frameWidth: 76,
            frameHeight: 76,
        });

        this.load.spritesheet("star", "src/assets/icon-twiter.png", {
            frameWidth: 76,
            frameHeight: 76,
            margin:-10
        });

        //   this.load.spritesheet("enemyfinal","src/assets/img/enemyfinal1.png",{
        //     frameWidth: 64.15,
        //     frameHeight: 62,
        // });
        this.load.spritesheet("inimigo", "src/assets/twitter-direita.png", {
            frameWidth: 76,
            frameHeight: 76,
        });
        this.load.spritesheet("inimigoFace", "src/assets/face-direita.png", {
          frameWidth: 76,
          frameHeight: 76,
        });
    }
  
    create(){
      this.scene.start("Menu")
  }}
  