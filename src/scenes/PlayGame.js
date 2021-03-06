
export default class PlayGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
        this.player;
        this.inimigo;

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

        this.texto
        
        
      }
preload(){
    this.mapa = this.load.tilemapTiledJSON("map", "src/assets/angustiaIO.json");
}


create() {
  this.sound.add("musica", {loop: true});

    const map = this.make.tilemap({ key: "map" });
    this.add.image(0,0,"fundo").setOrigin(0,0);

    this.star = this.physics.add.sprite(1300, 300, 'starFace');
    this.star.setCollideWorldBounds(true);
    this.star.body.setGravityY(300);
    
  
    // this.text = this.add.text(16, 16, 'Vida: 3', { fill: '#ffffff' });
    // this.text = this.add.text(100, 16, 'Dica: Zumbis não são inteligentes e são lentos, sentem dificuldades em subir nas plataformas', { fill: 'red' });

  
    const tileset = map.addTilesetImage("background2", "tiles");
    
    this.colisao = this.physics.add.staticGroup();
  
  
    this.colisao = map.createStaticLayer("colisao", tileset, 0, 0);
    this.colisao.setCollisionByProperty({ collider: true });
  
    // this.colisao = this.physics.add.staticGroup();
  
    // player   = this.physics.add.sprite(400,350, "player");
  
    ///// AQUII
    this.player = this.physics.add.sprite(0, 600, 'player');
    // this.inimigo = this.physics.add.sprite(400, 35, 'inimigo');
    this.player.body.setSize(32, 76);

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.player.setBounce(0.2);
  

    // inimigos = this.add.group();
    // inimigos.enableBody = true;
  
  
    this.physics.add.collider(this.player, this.colisao);
    this.physics.add.collider(this.star, this.colisao);
  
    // this.physics.add.collider(this.player, this.star);
    
    this.inimigo = this.physics.add.sprite(500, 35, 'inimigoFace');
    this.inimigo.setGravityY(300);
    this.inimigo.setCollideWorldBounds(true);
    this.inimigo.body.setSize(32, 76);


    this.inimigo2 = this.physics.add.sprite(800, 100, 'inimigoFace');
    this.inimigo2.setGravityY(300);
    this.inimigo2.setCollideWorldBounds(true);
    this.inimigo2.body.setSize(32, 76);


    this.inimigo3 = this.physics.add.sprite(1430, 300, 'inimigoFace');
    this.inimigo3.setGravityY(300);
    this.inimigo3.setCollideWorldBounds(true);
    this.inimigo3.body.setSize(32, 76);

    
    this.inimigo4 = this.physics.add.sprite(1200, 80, 'inimigoFace');
    this.inimigo4.setGravityY(300);
    this.inimigo4.setCollideWorldBounds(true);
    this.inimigo4.body.setSize(32, 76);



    this.physics.add.collider(this.inimigo, this.colisao);
    // this.physics.add.collider(this.inimigo, this.player);
    this.physics.add.collider(this.inimigo2, this.colisao);
    // this.physics.add.collider(this.inimigo2, this.player);
    this.physics.add.collider(this.inimigo3, this.colisao);
    // this.physics.add.collider(this.inimigo3, this.player);
    this.physics.add.collider(this.inimigo4, this.colisao);
    // this.physics.add.collider(this.inimigo4, this.player);


    // this.physics.add.collider(this.inimigo2, this.player, this.derrotaPage,null,this);
    this.physics.add.collider(
      this.inimigo,
      this.player,
      //funcao para matar o player
      this.derrotaPage,
      null,
      this
    );
    this.physics.add.collider(
      this.inimigo2,
        this.player,
        //funcao para matar o player
        this.derrotaPage,
        null,
        this
    );
    this.physics.add.collider(
      this.inimigo3,
        this.player,
        //funcao para matar o player
        this.derrotaPage,
        null,
        this
    );
    this.physics.add.collider(
      this.inimigo4,
      this.player,
      //funcao para matar o player
      this.derrotaPage,
      null,
      this
  );


     // this.physics.add.collider(this.inimigo2, this.player, this.derrotaPage,null,this);
    //  this.physics.add.overlap(
    //    this.player,
    //    this.inimigo,
    //   //funcao para matar o player
    //   this.derrotaPage,
    //   null,
    //   this
    // );
    // this.physics.add.overlap(
    //     this.player,
    //     this.inimigo2,
    //     //funcao para matar o player
    //     this.derrotaPage,
    //     null,
    //     this
    // );
    // this.physics.add.overlap(
    //     this.player,
    //     this.inimigo3,
    //     //funcao para matar o player
    //     this.derrotaPage,
    //     null,
    //     this
    // );

    this.physics.add.overlap(
      this.player,
      this.star,
      //funcao para matar o player
      this.vitoriaPage,
      null,
      this
  );

  //   this.enemies = map.createFromObjects("enemy", "enemy", {});
  //   this.enemiesGroup = new Enemies(this.physics.world, this, [], this.enemies, this.player, this.attack);
  //   this.physics.add.overlap(
  //     this.enemiesGroup,
  //     this.player,
  //     //funcao para matar o player
  //     this.hitEnemy,
  //     null,
  //     this
  // );


    

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
        key: "ileft", 
        frames: anims.generateFrameNames("inimigoFace", {start: 0, end: 1}),
        frameRate: 8,
        repeat: -1
      })
  
      anims.create({
        key: "iright", 
        frames: anims.generateFrameNames("inimigoFace", {start: 0, end: 1}),
        frameRate: 8,
        repeat: -1
      })
  
      anims.create({
        key: "ifront", 
        frames: anims.generateFrameNames("inimigoFace", {start: 0, end: 1}),
        frameRate: 8,
        repeat: -1
      })


    const camera = this.cameras.main.setBounds();
    this.physics.world.setBounds();
    camera.startFollow(this.player,true);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    
}

derrotaPage() {
  this.scene.start("DerrotaFace")
  // alert('bateu')
}
vitoriaPage() {
  // console.log('ganhamu')
  this.scene.start("VitoriaFacebook");
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
      
     
  
    this.aproximaInimigo(this.inimigo);
    this.aproximaInimigo(this.inimigo2);
    this.aproximaInimigo(this.inimigo3);
    this.aproximaInimigo(this.inimigo4);

}   

 aproximaInimigo(e){


    if(this.player.body.position.y > e.body.position.y && e.body.blocked.down) {
      if(e.body.blocked.left) {
        e.body.setVelocityX(35);
      }
      if(e.body.blocked.right) {
        e.body.setVelocityX(-35);
      }
    }else if((this.player.body.position.y < e.body.position.y) && this.player.body.down){
      e.body.setVelocityY(-280);

    }else {

      // if((this.player.body.position.y < e.body.position.y) && this.player.body.blocked.down && e.body.blocked.down) {
      //     e.body.setVelocityY(-400);
      // }

      if(!e.body.blocked.up) {
        if(e.body.blocked.left && (this.player.body.position.y < e.body.position.y)) {
            e.body.setVelocityX(-30);
            e.body.setVelocityY(-280);
        }

        if(e.body.blocked.right && (this.player.body.position.y > e.body.position.y)) {
          e.body.setVelocityX(30);
          e.body.setVelocityY(-280);
        }
        if(e.body.blocked.left && (this.player.body.position.x < e.body.position.x)) {
          e.body.setVelocityY(-280);
        }
        if(e.body.blocked.left && (this.player.body.position.x > e.body.position.x)) {
          e.body.setVelocityY(-280);
        }

        if((this.player.body.position.y < e.body.position.y) && e.body.blocked.down && (e.body.blocked.left || e.body.blocked.right)) {
          e.body.setVelocityY(-280);
        }

        if(this.player.body.position.x < e.body.position.x) {
          e.body.setVelocityX(-30);
          e.anims.play("ileft", true)
          e.flipX = true;
        }
  
        if(this.player.body.position.x > e.body.position.x) {
          e.body.setVelocityX(30);
          e.anims.play("iright", true)
          e.flipX = false;
        }

      }else {
          if(e.body.blocked.left && (this.player.body.position.y < e.body.position.y)) {
          e.body.setVelocityX(30);
          e.anims.play("iright", true)
          }else if(e.body.blocked.right && (this.player.body.position.y > e.body.position.y)) {
            e.body.setVelocityX(-30);
            e.anims.play("ileft", true)
          }else {

            if((this.player.body.position.y < e.body.position.y) && e.body.blocked.down && (e.body.blocked.left || e.body.blocked.right)) {
              e.body.setVelocityY(-280);
            }

            if(e.body.blocked.down) {

              if(this.player.body.position.x < e.body.position.x) {
                e.body.setVelocityX(-30);
                e.anims.play("ileft", true)
                e.flipX = true;
              }
        
              if(this.player.body.position.x > e.body.position.x) {
                e.body.setVelocityX(30);
                e.anims.play("iright", true)
                e.flipX = false;
              }
            }
          }

        }

    }


   
}
hitEnemy() {
    
     
    // if (this.keyD.isDown) {
    //     this.player.anims.play("keyd", true);
    // } else {
    //     const r = Math.random()*100 
            
    //         if (r <1) {
    //             if (!this.invincible) {
    //                 this.damage.play();
    //                 this.player.anims.play("damage")
    //                 this.invincible = true;
    //                 this.events.emit("hitEnemy", --this.life);
    //                 this.textTela.setText('Vidas: '+ this.life);
    //                 this.time.delayedCall(
    //                     8000,
    //                     () => {
    //                       this.invincible = false;
                          
    //                     },
    //                     null,
    //                     this
    //                   );
    //         }
            
           
          
        
    // }
            
    //     }
            
}
move(){
    // const d = Phaser.Math.Distance.Between (
    //     this.enemyfinal.x,
    //     this.enemyfinal.y,
    //     this.player.x,
    //     this.player.y);
        
    // if (d < 100 && this.enemyfinal.x<this.player.x ) {
    //     const randNumber = Math.floor(Math.random() * 3 + 1)
        
    //     switch(randNumber){
    //         case 1:
    //         this.state = this.ataque
    //         this.enemyfinal.anims.play("efinalgolpe1",true)
    //         this.time.addEvent({
    //         delay:1300,
    //         callback: () => {
    //             this.enemyfinal.anims.stop()
    //             this.enemyfinal.setVelocity(0)
               
    //         },
    //         callbackScope: this,
    //     })
               
                
    //         break
    //         case 2: 
    //         this.state = this.ataque
    //         this.enemyfinal.anims.play("efinalgolpe2",true)
    //         this.time.addEvent({
    //         delay:1300,
    //         callback: () => {
    //             this.enemyfinal.anims.stop()
    //             this.enemyfinal.setVelocity(0)
                
    //         },
    //         callbackScope: this,
    //     })
              
    //             break
           
    //         case 3: 
    //         this.state = this.defesa
    //         this.enemyfinal.anims.play("efinaldefesa",true)
           
    //         this.time.addEvent({
    //             delay:1300,
    //             callback: () => {
    //                 this.enemyfinal.anims.stop()
    //                 this.enemyfinal.setVelocity(0)
    //                 this.state = this.walking
    //             },
    //             callbackScope: this,
    //         })
               
    //             break
    //         default: 
    //             this.setVelocityX(0)
    //             this.enemyfinal.anims.stop()
    //             this.state = this.ataque
    //     }
        
    // }else if(d < 100 && this.enemyfinal.x > this.player.x ){
    //     const randNumber = Math.floor(Math.random() * 3 + 1)
    //     switch(randNumber){
    //         case 1:
    //         this.state = this.ataque
    //         this.enemyfinal.anims.play("efinalgolpe",true)
    //         this.time.addEvent({
    //         delay:1300,
    //         callback: () => {
    //             this.enemyfinal.anims.stop()
    //             this.enemyfinal.setVelocity(0)
    //             this.state = this.walking
    //         },
    //         callbackScope: this,
    //     })
               
                
    //             break
    //         case 2: 
    //         this.state = this.ataque
    //         this.enemyfinal.anims.play("efinalgolpe3",true)
    //     this.time.addEvent({
    //         delay:1300,
    //         callback: () => {
    //             this.enemyfinal.anims.stop()
    //             this.enemyfinal.setVelocity(0)
    //             this.state = this.walking
    //         },
    //         callbackScope: this,
    //     })
              
    //             break
           
    //         case 3: 
    //         this.state = this.defesa
    //         this.enemyfinal.anims.play("efinaldefesa1",true)
            
    //         this.time.addEvent({
    //             delay:1300,
    //             callback: () => {
    //                 this.enemyfinal.anims.stop()
    //                 this.enemyfinal.setVelocity(0)
    //                 this.state = this.walking
    //             },
    //             callbackScope: this,
    //         })
               
    //             break
    //         default: 
    //             this.setVelocityX(0)
    //             this.enemyfinal.anims.stop()
    //     }
    // } 
    // else {
    //     if (this.state == this.walking) {
    //         if (d < 500) {
    //             const randNumberr = Math.floor(Math.random() * 4 + 1)
    //             switch(randNumberr){
    //         case 1:
               
                
    //             break
    //         case 2: 
              
    //             break
    //         case 3: 
    //         this.enemyfinal.setVelocityX(30)
    //         this.enemyfinal.anims.play("efinalb",true)
                
               
    //             break
    //         case 4: 
    //         this.enemyfinal.setVelocityX(-30)
    //         this.enemyfinal.anims.play("efinals",true)
    //             break
    //         default: 
    //             this.setVelocityX(30)
    //             this.enemyfinal.anims.stop()
    //         }
    //             if (this.enemyfinal.x < this.player.x  ) {
    //                 this.enemyfinal.setVelocityX(30)
    //                 this.enemyfinal.anims.play("efinald",true)            
    //             } else if(this.enemyfinal.x > this.player.x) {
    //                 this.enemyfinal.setVelocityX(-30)
    //                 this.enemyfinal.anims.play("efinale",true)
    //             } else{
    //                 this.enemyfinal.anims.stop();
    //             }
                
    //         } else {
    //             this.enemyfinal.anims.stop();
    //         }
            
    //     }    
    // }
    
   
    
    // /*const randNumber = Math.floor(Math.random() * 4 + 1)
    // switch(randNumber){
    //     case 1:
            
    //         break
    //     case 2: 
        
    //         break
    //     case 3: 
    //         this.enemyfinal.setVelocityY(30)
    //         this.enemyfinal.anims.play("efinald",true)
            
           
    //         break
    //     case 4: 
    //         this.enemyfinal.setVelocityY(-30)
    //         this.enemyfinal.anims.play("efinale",true)
           
    //         break
    //     default: 
    //         this.enemyfinal.setVelocityX(30)
    //         this.enemyfinal.anims.stop()
    // }*/
    // if (Math.random(100) < 40) {
    //     if (d < 30 && (this.state != this.defesa) && this.keyD.isUp &&(this.keyA.isDown ||this.keyS.isDown)) {
    //         this.attack.play();
    //         this.enemyfinalLife = this.enemyfinalLife - 1;
    //         this.textTela2.setText('Vida Boss: '+ this.enemyfinalLife);
    //     } 
    // }
    
    // if (this.enemyfinalLife <= 0) {
    //     this.enemyfinal.anims.play("morte");
    //     this.enemyfinal.setVisible(false);
    //     this.enemyfinal.setActive(false);
    //     this.physics.pause();
    //     this.time.addEvent({
    //         delay:2000,
    //     callback: () => {
    //         this.scene.start("vitoria")
    //     },
    //     callbackScope: this,
    // })
      
    //     this.life = 15
    //     this.enemyfinalLife = 1
        
    // }
    // if(this.life <= 0){
    //    this.player.body.setVelocity(0);
       
        
        
    //     this.player.anims.play("morto");
    //     this.physics.pause();
    //     this.time.addEvent({
    //     delay:2000,
    //     callback: () => {
    //         this.player.anims.play("morto");

    //         this.scene.start("derrota")
    //     },
    //     callbackScope: this,
    // })
    //     this.enemyfinalLife = 15
    //     this.life = 1
    // }
    

    
}
  hitEnemyfinal() {
    // if (this.keyD.isDown) {
    //     this.player.anims.play("keyd", true);
    // } else {
            
    //     if ((this.state ==this.ataque)) {
               
    //             if (!this.invincible) {
    //                 this.damage.play();
    //                 this.player.anims.play("damage")
    //                 this.invincible = true;
    //                 this.events.emit("hitEnemyfinal", --this.life);
    //                 this.textTela.setText('Vidas: '+ this.life);
    //                 this.time.delayedCall(
    //                     2000,
    //                     () => {
    //                       this.invincible = false;
                         
    //                     },
    //                     null,
    //                     this
    //                   );
    //         }
            
           
    //       }
        
    // }
}



}