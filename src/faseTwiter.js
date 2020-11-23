//test+++
import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import staricon from "./assets/star.png";
import puma from "./assets/puma_limimari.png";
import highway from "./assets/asfalto.png";
// import mapPNG from "./assets/pngbarn (1).png";
// import mapJSON from "./assets/map2.json";
import playerPNG from "./assets/esticado_2.png";
import inimigoPNG from "./assets/inimigo.png";
import mapaBk from "./assets/background2.jpeg";

import mapPNG from "./assets/background-cartoon.png";
import mapJSON from "./assets/angustiaIO.json";


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1500,
  height: 1000,
  backgroundImage: mapaBk,
  // backgroundImage: '',
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: true
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
  this.load.image("logo", puma);
  this.load.image('inimigo', inimigoPNG, {
    frameWidth: 20,
    frameHeight: 40,
  });

  this.load.image('iconTwiter', '/assets/icon-twiter.png', {
    frameWidth: 40,
    frameHeight: 40,
  });

  this.load.spritesheet("player", playerPNG, {
    frameWidth: 50,
    frameHeight: 50
  });


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
  
  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("background-cartoon", "tiles");
  this.add.image(100, 400, 'iconTwiter');

  this.physics.add.sprite(400, 10, 'iconTwiter')

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
  
  inimigo = this.physics.add.sprite(400, 10, 'inimigo');
  // inimigo.body.collideWorldBounds = true;
  inimigo.setCollideWorldBounds(true);
  this.physics.add.collider(inimigo, colisao);
  this.physics.add.collider(inimigo, player);
  

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

    // anims.create({
    //   key: "back", 
    //   frames: anims.generateFrameNames("player", {start: 40, end: 49}),
    //   frameRate: 20,
    //   repeat: -1
    // })


  // criaInimigo();
  // player.body.setGravityY(300)

  // this.physics.add.collider(player, colisao);

  // this.anims.create({
  //     key: 'left',
  //     frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
  //     frameRate: 10,
  //     repeat: -1
  // });

  // this.anims.create({
  //     key: 'turn',
  //     frames: [ { key: 'player', frame: 4 } ],
  //     frameRate: 20
  // });

  // this.anims.create({
  //     key: 'right',
  //     frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
  //     frameRate: 10,
  //     repeat: -1
  // });


  // this.physics.add.collider(player, colisao);


  // const camera = this.cameras.main;
  // camera.startFollow(player);
  // camera.setBounds(0, 0, 1200, 1200);

  // map.createStaticLayer("chao", tileset, 0, 0);

  
  
  // objectCollider.setCollisionByProperty({ collider: true });

  /*const logo = this.add.image(450, 300, "logo");

  this.tweens.add({
    targets: logo,
    y: 225,
    duration: 800,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });*/

  
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
    }
    if(player.body.position.y > inimigo.body.position.y) {
      inimigo.body.setVelocityY(100);
    }
    if(player.body.position.x < inimigo.body.position.x) {
      inimigo.body.setVelocityX(-100);
    }

    if(player.body.position.x > inimigo.body.position.x) {
      inimigo.body.setVelocityX(100);
    }


    // // Se o inimigo está mais para esquerda do jogador
    // if (inimigo.position.x < player.body.position.x){
    //     // faz ele ir para direita
    //     inimigo.body.setVelocityX(400);
    // }else{
    //     // Senão, faz ele ir para esquerda
    //     inimigo.body.setVelocityX(-400);
    // }
}
/*import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import staricon from "./assets/star.png";
import puma from "./assets/puma_limimari.png"
import highway from "./assets/asfalto.png"


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", puma);
  this.load.image("star", staricon);
  this.load.image("background", highway);
  this.load.image("tiles", "../assets/pngbarn (1).png" )
  this.load.tilemapTiledJSON("map","../assets/test.json")


}

function create() {
  this.add.image(400, 300, "background");

  const logo = this.add.image(400, 150, "logo");
  const icon = this.add.image(40, 15, "star");
  const icon2 = this.add.image(80, 30, "star");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 10000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });

  this.tweens.add({
    targets: icon,
    y: 410,
    duration: 5000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });

  this.tweens.add({
    targets: icon2,
    y: 400,
    duration: 5100,
    ease: "Power",
    yoyo: true,
    loop: -1
  });
}*/
/*import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import mapPNG from "./assets/assetsmap.png";
import mapJSON from "./assets/map.json";
import water from "./assets/water.png";
import playerPNG from "./assets/player5.png";
import enemyPNG from "./assets/slime.png";
import Enemies from "./Enemies";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 650,
  height: 650,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);
let player;
var cursors;
var enemies;

function preload() {
  this.load.image("background", water);

  this.load.image("tiles", mapPNG);
  this.load.tilemapTiledJSON("map", mapJSON);
  this.load.spritesheet("player", playerPNG, {
    frameWidth: 1,
    frameHeight: 60,
  });
  this.load.image("slime", enemyPNG);
}

function create() {
  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("assets", "tiles");

  this.add.image(650, 650, "background");

  const ground = map.createStaticLayer("ground", tileset, 0, 0);
  const objectCollider = map.createStaticLayer("objectCollider", tileset, 0, 0);
  const aboveCollider = map.createStaticLayer("aboveObject", tileset, 0, 0);

  objectCollider.setCollisionByProperty({ collider: true });
  aboveCollider.setDepth(10);
  //player
  
  const spawnPoint = map.findObject(
    //player and not Player like your variable
    "player",
    (objects) => objects.name === "spawning point"
  );

  player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "player");

  this.physics.add.collider(player, objectCollider);

  //first enemy name of the object
  //secound enemy the name now to object
  this.enemies = map.createFromObjects("enemy", "enemy", {});
  this.enemiesGroup = new Enemies(this.physics.world, this, [], this.enemies);

  this.physics.add.collider(this.enemiesGroup, player, hitEnemy, null, this);
  //enemy collider object
  this.physics.add.collider(this.enemiesGroup, objectCollider);
  //animations

  const anims = this.anims;
  anims.create({
    key: "left",
    frames: anims.generateFrameNames("player", { start: 20, end: 21 }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: "right",
    frames: anims.generateFrameNames("player", { start: 20, end: 21 }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: "front",
    frames: anims.generateFrameNames("player", { start: 0, end: 9 }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: "back",
    frames: anims.generateFrameNames("player", { start: 11, end: 19 }),
    frameRate: 10,
    repeat: -1,
  });

  //the CAMERA
  const camera = this.cameras.main;
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
}

function update() {
  //put here  before your velocity is 0
  const prevVelocity = player.body.velocity.clone();
  //stop player when stop press the key
  player.body.setVelocity(0);
  cursors = this.input.keyboard.createCursorKeys();

  //keyboard press to move
  if (cursors.left.isDown) {
    player.body.setVelocityX(-200);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(200);
  } else if (cursors.up.isDown) {
    player.body.setVelocityY(-200);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(200);
  }

  //set animations per key pressed
  if (cursors.left.isDown) {
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.anims.play("right", true);
  } else if (cursors.up.isDown) {
    //its because when you go, you need see the back of your character
    player.anims.play("back", true);
  } else if (cursors.down.isDown) {
    player.anims.play("front", true);
  } else {
    player.anims.stop();

    //front animation
  }
}

function hitEnemy(player, enemyGroup) {
  this.scene.restart();
}


//var config = {
  /*type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }*/
//};
