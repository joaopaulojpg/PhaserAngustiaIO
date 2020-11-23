//test+++
import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import staricon from "./assets/star.png";
import puma from "./assets/puma_limimari.png";
import highway from "./assets/asfalto.png";
// import mapPNG from "./assets/pngbarn (1).png";
// import mapJSON from "./assets/map2.json";
import playerPNG from "./assets/sprite-completa.png";
import iconTwiter from "./assets/icon-twiter.png";

import inimigoPNG from "./assets/twitter - direita.png";
import mapaBk from "./assets/background2.jpeg";

import mapPNG from "./assets/background-cartoon.png";
import mapJSON from "./assets/angustiaIO.json";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1500,
  height: 1000,
  background: '#fff',
  // backgroundImage: mapaBk,
  // backgroundImage: '',
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: false
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);
let player
var cursors
var colisao
var inimigo

function preload() {
  this.load.image("tiles", mapPNG);
  this.load.tilemapTiledJSON("map", mapJSON);

  this.load.spritesheet("inimigo", inimigoPNG, {
    frameWidth: 85,
    frameHeight: 85,
  });

  this.load.spritesheet("player", playerPNG, {
    frameWidth: 76,
    frameHeight: 76
  });


  this.load.spritesheet("star", iconTwiter, {
    frameWidth: 76,
    frameHeight: 76
  });

  // this.load.image('background', '/assets/background.jpeg');


  

}


/**
 * Função que cria o inimigo
 */
function criaInimigo(){
  //  Cria inimigo dentro do grupo inimigos
  // var inimigo = inimigos.create(500, 400, 'inimigo');
  inimigo = this.physics.add.sprite(200, 50, 'inimigo');

  //  Define gravidade do inimigo
  inimigo.body.setGravityY(300);

  // Faz inimigos não fugirem do mundo
  // inimigo.body.collideWorldBounds = true;
}

function create() {
  // this.add.image(0, 0, 'background').setOrigin(0).setScale(8);

  var star = this.physics.add.sprite(1200, 400, 'star');
  star.setCollideWorldBounds(true);
  star.body.setGravityY(300);
  



  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("background-cartoon", "tiles");

  colisao = this.physics.add.staticGroup();


  colisao = map.createStaticLayer("colisao", tileset, 0, 0);
  colisao.setCollisionByProperty({ collider: true });
  // colisao.setDepth(10);

  // colisao = this.physics.add.staticGroup();

  // player   = this.physics.add.sprite(400,900, "player");

  ///// AQUII
  player = this.physics.add.sprite(20, 900, 'player');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(300);
  player.setBounce(0.2);

  // inimigos = this.add.group();
  // inimigos.enableBody = true;


  this.physics.add.collider(player, colisao);
  this.physics.add.collider(star, colisao);

  this.physics.add.collider(player, star);
  
  inimigo = this.physics.add.sprite(400, 10, 'inimigo');
  // inimigo.body.collideWorldBounds = true;
  inimigo.setCollideWorldBounds(true);
  this.physics.add.collider(inimigo, colisao);
  this.physics.add.collider(inimigo, player);
  this.physics.add.collider(star, player);

    // anims
    const anims = this.anims

    anims.create({
      key: "left", 
      frames: anims.generateFrameNames("player", {start: 8, end: 15}),
      frameRate: 20,
      repeat: -1
    })

    anims.create({
      key: "right", 
      frames: anims.generateFrameNames("player", {start: 8, end: 15}),
      frameRate: 20,
      repeat: -1
    })

    anims.create({
      key: "front", 
      frames: anims.generateFrameNames("player", {start: 0, end: 3}),
      frameRate: 20,
      repeat: -1
    })




    
    // anims
    const anims2 = this.anims

    anims2.create({
      key: "left", 
      frames: anims2.generateFrameNames("inimigo", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    })

    anims2.create({
      key: "right", 
      frames: anims2.generateFrameNames("inimigo", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    })

    anims2.create({
      key: "front", 
      frames: anims2.generateFrameNames("inimigo", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    })


  
}
function update() {
  const prevVelocity = player.body.velocity.clone();
  player.body.setVelocityX(0);

      cursors = this.input.keyboard.createCursorKeys();
    //keyboard press to move
    if (cursors.left.isDown) {
      player.body.setVelocityX(-240);
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(240);
    }

    if(cursors.up.isDown && player.body.blocked.down){
      // if(cursors.up.isDown && player.body.touching.down){
        player.body.setVelocityY(-560);
    }

    if (cursors.left.isDown) {
      // player.body.setVelocityX(-160);
      player.anims.play("left", true)
    
    } 
    else if (cursors.right.isDown) {
      player.anims.play("right", true)
    }
     else {
      player.anims.play("front", true)
    } 
    
   

    aproximaInimigo();

}


function aproximaInimigo(){

    // Faz com que ele fique parado
    inimigo.setVelocityX(-100);

    if(player.body.position.y < inimigo.body.position.y) {
      inimigo.body.setVelocityY(-100);
      inimigo.anims2.play("front", true)
    }
    if(player.body.position.y > inimigo.body.position.y) {
      inimigo.body.setVelocityY(100);
      inimigo.anims2.play("front", true)
    }
    if(player.body.position.x < inimigo.body.position.x) {
      inimigo.body.setVelocityX(-100);
      inimigo.anims2.play("left", true)
    }

    if(player.body.position.x > inimigo.body.position.x) {
      inimigo.body.setVelocityX(100);
      inimigo.anims2.play("right", true)
    }


   
}