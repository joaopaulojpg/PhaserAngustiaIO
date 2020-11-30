export default class FaseWhatsapp extends Phaser.Scene {
    constructor() {
        super("FaseWhatsapp");
        this.player;
        this.inimigoWhatsapp;

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
        
        this.vitoria_derrota = false
        
      }
preload(){
  this.load.image("tiles", "src/assets/background-cartoon.png");
  this.mapa = this.load.tilemapTiledJSON("map2", "src/assets/map2.json");
}

create() {
    const map = this.make.tilemap({ key: "map2" });
    this.add.image(0,0,"fundo").setOrigin(0,0);

    this.star = this.physics.add.sprite(1100, 400, 'starWhats');
    this.star.setCollideWorldBounds(true);
    this.star.body.setGravityY(300);
      
    const tileset = map.addTilesetImage("background2", "tiles");
    
    this.colisao = this.physics.add.staticGroup();
    this.colisao = map.createStaticLayer("colisao", tileset, 0, 0);
    this.colisao.setCollisionByProperty({ collider: true });

    
    this.espinhos = this.physics.add.staticGroup();
    this.espinhos = map.createStaticLayer("espinhos", tileset, 0, 0);
    this.espinhos.setCollisionByProperty({ collider: true });

  
    // this.colisao = this.physics.add.staticGroup();
  
    // this.espinhos.setCollisionByProperty({ collider: true });
    
    // this.colisao = this.physics.add.staticGroup();
  
    // player   = this.physics.add.sprite(400,900, "player");
  
    ///// AQUII
    this.player = this.physics.add.sprite(0, 300, 'player');
    this.player.body.setSize(32, 76);


    // this.player.body.setOffset(60, 10);



    this.inimigoWhatsapp = this.physics.add.sprite(400, 90, 'inimigoWhatsapp');
    this.inimigoWhatsapp2 = this.physics.add.sprite(1000, 0, 'inimigoWhatsapp');
    this.inimigoWhatsapp3 = this.physics.add.sprite(1500, 950, 'inimigoWhatsapp');

    this.player.setBounce(0.2);
    // this.player.setColliderWorldBounds(true);
    this.player.body.setGravityY(300);
    this.player.setBounce(0.2);
  
    // inimigos = this.add.group();
    // inimigos.enableBody = true;
  
  
    this.physics.add.collider(this.player, this.colisao);
    // this.physics.add.collider(this.player, this.espinhos);
    this.physics.add.collider(
      this.player,
      this.espinhos,
      //funcao para matar o player
      this.derrotaPage,
      null,
      this
    );
    this.physics.add.collider(this.star, this.colisao);
  

    this.physics.add.collider(
      this.player,
      this.star,
      //funcao para matar o player
      this.vitoriaPage,
      null,
      this
    );
    
    // inimigo.body.collideWorldBounds = true;
    this.inimigoWhatsapp.setCollideWorldBounds(true);
    // this.physics.add.collider(this.inimigoWhatsapp, this.colisao);
    // this.physics.add.collider(this.inimigoWhatsapp, this.player);


    this.inimigoWhatsapp2.setCollideWorldBounds(true);
    // this.physics.add.collider(this.inimigoWhatsapp2, this.colisao);
    // this.physics.add.collider(this.inimigoWhatsapp2, this.player);

    this.inimigoWhatsapp3.setCollideWorldBounds(true);
    // this.physics.add.collider(this.inimigoWhatsapp3, this.colisao);
    // this.physics.add.collider(this.inimigoWhatsapp3, this.player);

    this.physics.add.collider(
      this.inimigoWhatsapp,
      this.player,
      //funcao para matar o player
      this.derrotaPage,
      null,
      this
    );
    this.physics.add.collider(
      this.inimigoWhatsapp2,
      this.player,
      //funcao para matar o player
      this.derrotaPage,
      null,
      this
    );
    this.physics.add.collider(
      this.inimigoWhatsapp3,
      this.player,
      //funcao para matar o player
      this.derrotaPage,
      null,
      this
    );


    this.physics.add.collider(this.star, this.player);
  
      // anims
      const anims = this.anims
  
      anims.create({
        key: "Nleft", 
        frames: anims.generateFrameNames("player", {start: 16, end: 23}),
        frameRate: 15,
        repeat: -1,
        
      })
  
      anims.create({
        key: "Nright", 
        frames: anims.generateFrameNames("player", {start: 16, end: 23}),
        frameRate: 15,
        repeat: -1
      })
  
      anims.create({
        key: "Nfront", 
        frames: anims.generateFrameNames("player", {start: 4, end: 7}),
        frameRate: 5,
        repeat: -1
      })
  
  
      anims.create({
        key: "whatfront", 
        frames: anims.generateFrameNames("inimigoWhatsapp", {start: 0, end: 3}),
        frameRate: 8,
        repeat: -1
      })


    const camera = this.cameras.main.setBounds();
    this.physics.world.setBounds();
    camera.startFollow(this.player,true);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  
  
    this.criaInimigo(100)
}
update() {

    const prevVelocity = this.player.body.velocity.clone();
    this.player.body.setVelocityX(0);
  
        this.cursors = this.input.keyboard.createCursorKeys();
      //keyboard press to move
      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-230);
        this.player.flipX = true;
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(230);
        this.player.flipX = false;
      }
  
      if(this.cursors.up.isDown && this.player.body.blocked.down){
        // if(this.cursors.up.isDown && this.player.body.touching.down){
          this.player.body.setVelocityY(-310);
      }
  
      if (this.cursors.left.isDown) {
        // this.player.body.setVelocityX(-160);
        this.player.anims.play("Nleft", true)
      
      } 
      else if (this.cursors.right.isDown) {
        this.player.anims.play("Nright", true)
      }
       else {
        this.player.anims.play("Nfront", true)
      } 
      
     
  
    // this.aproximaInimigo(this.inimigoWhatsapp);
    // this.aproximaInimigo(this.inimigoWhatsapp2);
    // this.aproximaInimigo(this.inimigoWhatsapp3);
}   

collectStar (player, star)
{
    star.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

    }
}

 aproximaInimigo(e){

    // Faz com que ele fique parado
    // this.inimigoWhatsapp.setVelocityX(-100);
    // this.inimigoWhatsapp.anims.play("ileft", true)

    // if(this.player.body.position.y < e.body.position.y) {
    //   e.body.setVelocityY(-60);
    //   // e.anims.play("ifront", true)
    // }
    // if(this.player.body.position.y > e.body.position.y) {
    //   e.body.setVelocityY(60);
    //   // e.anims.play("ifront", true)
    // }
    // if(this.player.body.position.x != e.body.position.x) {

    //   if(this.player.body.position.x < e.body.position.x) {
        e.body.setVelocityY(400);
        e.anims.play("whatfront", true)
      // }

      // if(this.player.body.position.x > e.body.position.x) {
      //   e.body.setVelocityX(60);
      //   e.anims.play("whatfront", true)
      //   e.flipX = false;
      // }

    // }
   
}

criaInimigo(x){

  if(!this.vitoria_derrota) {
    //  Cria inimigo dentro do grupo inimigos
    let inimigoWhatsapp = this.physics.add.sprite(x, 90, 'inimigoWhatsapp');
    inimigoWhatsapp.setCollideWorldBounds(true);

    this.physics.add.collider(
      inimigoWhatsapp,
      this.player,
      //funcao para matar o player
      this.derrotaPage,
      null,
      this
    );

    inimigoWhatsapp.body.setSize(22, 70);
    inimigoWhatsapp.body.setVelocityY(350);
    inimigoWhatsapp.anims.play("whatfront", true)  
    setTimeout(() => this.criaInimigo(this.player.body.position.x), 2000)
    setTimeout(() => this.criaInimigo(this.player.body.position.x+100), 3000)
  
  }

}

derrotaPage() {
  
  this.scene.start("DerrotaWhatsapp")
  // alert('bateu')
}
vitoriaPage() {
  // console.log('ganhamu')
  this.scene.start("Fim");
}

hitEnemy() {
    
            
}
move(){
  
    
}
  hitEnemyfinal() {
  
}



}