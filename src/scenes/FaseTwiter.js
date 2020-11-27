
export default class FaseTwiter extends Phaser.Scene {
    constructor() {
        super("FaseTwiter");
        this.player;
        this.inimigoTwiter;

        this.life = 1
        this.golpeesq;
        this.keyA;
        this.keyS; 
        this.x = 0;
        this.depgolpeesq = 1;
        this.invincible = false
        
        this.enemies;
        this.enemiesGroup;

        this.cursors;
        this.textTela;
        this.textTela1;
        this.textTela2
        this.titulo;

        this.enemyfinal;
        this.enemyfinalLife = 1;
        this.walking = 1
        this.defesa = 2
        this.ataque = 3
        this.state = this.walking;
        
        
        this.music;
        this.damage;
        this.attack;
      
        this.timeEvent;

        this.star
        this.colisao
        this.mapa
        
        
      }
preload(){
  // this.load.image("tiles", "src/assets/background-cartoon.png");
  this.mapa = this.load.tilemapTiledJSON("map2", "src/assets/map2.json");
}
create() {

    const map = this.make.tilemap({ key: "map2" });
    this.add.image(0,0,"fundo").setOrigin(0,0);

    this.star = this.physics.add.sprite(1300, 300, 'star');
    this.star.setCollideWorldBounds(true);
    this.star.body.setGravityY(300);
      
    const tileset = map.addTilesetImage("background2", "tiles");
    
    this.colisao = this.physics.add.staticGroup();
  
  
    this.colisao = map.createStaticLayer("colisao", tileset, 0, 0);
    this.colisao.setCollisionByProperty({ collider: true });
  
    // this.colisao = this.physics.add.staticGroup();
  
    // this.espinhos.setCollisionByProperty({ collider: true });
    
    // this.colisao = this.physics.add.staticGroup();
  
    // player   = this.physics.add.sprite(400,900, "player");
  
    ///// AQUII
    this.player = this.physics.add.sprite(0, 0, 'player');
    this.inimigoTwiter = this.physics.add.sprite(400, 90, 'inimigoTwiter');
    // this.inimigoTwiter2 = this.physics.add.sprite(1000, 0, 'inimigoTwiter');

    this.inimigoTwiter3 = this.physics.add.sprite(1200, 10, 'inimigoTwiter');

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.player.setBounce(0.2);
  
    // inimigos = this.add.group();
    // inimigos.enableBody = true;
  
  
    this.physics.add.collider(this.player, this.colisao);
    this.physics.add.collider(this.player, this.espinhos);
    this.physics.add.collider(this.star, this.colisao);
  
    this.physics.add.collider(this.player, this.star);
    
    // inimigo.body.collideWorldBounds = true;
    this.inimigoTwiter.setCollideWorldBounds(true);
    this.physics.add.collider(this.inimigoTwiter, this.colisao);
    this.physics.add.collider(this.inimigoTwiter, this.player);


     // inimigo.body.collideWorldBounds = true;
    //  this.inimigoTwiter2.setCollideWorldBounds(true);
    //  this.physics.add.collider(this.inimigoTwiter2, this.colisao);
    //  this.physics.add.collider(this.inimigoTwiter2, this.player);

     this.inimigoTwiter3.setCollideWorldBounds(true);
     this.physics.add.collider(this.inimigoTwiter3, this.colisao);
     this.physics.add.collider(this.inimigoTwiter3, this.player);



    this.physics.add.collider(this.star, this.player);
  
      // anims
      const anims = this.anims
  
      anims.create({
        key: "left", 
        frames: anims.generateFrameNames("player", {start: 8, end: 15}),
        frameRate: 15,
        repeat: -1,
        
      })
  
      anims.create({
        key: "right", 
        frames: anims.generateFrameNames("player", {start: 8, end: 15}),
        frameRate: 15,
        repeat: -1
      })
  
      anims.create({
        key: "front", 
        frames: anims.generateFrameNames("player", {start: 0, end: 3}),
        frameRate: 5,
        repeat: -1
      })
  
  
      anims.create({
        key: "fleft", 
        frames: anims.generateFrameNames("inimigoTwiter", {start: 0, end: 1}),
        frameRate: 20,
        repeat: -1
      })
  
      anims.create({
        key: "fright", 
        frames: anims.generateFrameNames("inimigoTwiter", {start: 0, end: 1}),
        frameRate: 20,
        repeat: -1
      })
  
      anims.create({
        key: "ffront", 
        frames: anims.generateFrameNames("inimigoTwiter", {start: 0, end: 1}),
        frameRate: 20,
        repeat: -1
      })


    const camera = this.cameras.main.setBounds();
    this.physics.world.setBounds();
    camera.startFollow(this.player,true);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    
}
update() {
    const prevVelocity = this.player.body.velocity.clone();
    this.player.body.setVelocityX(0);
  
        this.cursors = this.input.keyboard.createCursorKeys();
      //keyboard press to move
      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-240);
        this.player.flipX = true;
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(240);
        this.player.flipX = false;
      }
  
      if(this.cursors.up.isDown && this.player.body.blocked.down){
        // if(this.cursors.up.isDown && this.player.body.touching.down){
          this.player.body.setVelocityY(-310);
      }
  
      if (this.cursors.left.isDown) {
        // this.player.body.setVelocityX(-160);
        this.player.anims.play("left", true)
      
      } 
      else if (this.cursors.right.isDown) {
        this.player.anims.play("right", true)
      }
       else {
        this.player.anims.play("front", true)
      } 
      
     
  
    this.aproximaInimigo(this.inimigoTwiter);
    // this.aproximaInimigo(this.inimigoTwiter2);
    this.aproximaInimigo(this.inimigoTwiter3);
  

}   
 aproximaInimigo(e){

    // Faz com que ele fique parado
    // this.inimigoTwiter.setVelocityX(-100);
    // this.inimigoTwiter.anims.play("ileft", true)

    if(this.player.body.position.y < e.body.position.y) {
      e.body.setVelocityY(-70);
      // e.anims.play("ifront", true)
    }
    if(this.player.body.position.y > e.body.position.y) {
      e.body.setVelocityY(70);
      // e.anims.play("ifront", true)
    }
    if(this.player.body.position.x != e.body.position.x) {

      if(this.player.body.position.x < e.body.position.x) {
        e.body.setVelocityX(-70);
        e.anims.play("fleft", true)
        e.flipX = true;
      }

      if(this.player.body.position.x > e.body.position.x) {
        e.body.setVelocityX(70);
        e.anims.play("fright", true)
        e.flipX = false;
      }

    }
   
}
hitEnemy() {
    
            
}
move(){
  
    
}
  hitEnemyfinal() {
  
}



}