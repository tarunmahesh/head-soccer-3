const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var form
var playerCount = 0
var gameState = 0
var player
var fireBase,playerInfo
var player1, player2, player1IMG, player2IMG
var player1b, player2b
var player1Leg, player2Leg, player1LegIMG, player2LegIMG
var player1Legb, player2Legb
var ground, rightWall, leftWall
var bgIMG
var game
var ball
var chain1, chain2
var playerArray = []
var playerbArray = []
var legArray = []
var legbArray

function preload(){
    bgIMG = loadImage("Images/real-soccer-field.png")
    player1IMG = loadImage("Images/ronaldo.png")
    player2IMG = loadImage("Images/messi-removebg-preview.png")
    player1LegIMG = loadImage("Images/messi-leg.png")
    player2LegIMG = loadImage("Images/ronaldo-leg.png")
}

function setup(){

    engine = Engine.create()
    world = engine.world
    ball = new Ball(width/2,height/2)

    fireBase = firebase.database()
    createCanvas(displayWidth-20,displayHeight-30)
    game = new Game()
    player1b = new Character(500,height/2,50)
    player2b = new Character(width-500,height/2,50)
    playerbArray = [player1b.body, player2b.body]

    player1Legb = new Leg(100,100,10)
    player2Legb = new Leg(width-100,100,10)
    legbArray = [player1Legb.body, player2Legb.body]
    chain1 = new Chain(player1b.body, player1Legb.body)
    chain2 = new Chain(player2b.body, player2Legb.body)

    game.start()
    ground = new Ground(width/2, height-10, width, 20)
    rightWall = new Ground(width-5,height/2,10,height)
    leftWall = new Ground(5,height/2,10,height)
    Engine.run(engine)
}

function draw(){
    background("green")
    Engine.update(engine)

    game.getGameState()

    if(playerCount === 2){
        game.updateGameState(1)
    }


    if(gameState === 1){
        clear()
        game.play()
        console.log("gameState")
        player1.x = player1b.body.position.x;
        player2.x = player2b.body.position.x;
        player1.y = player1b.body.position.y;
        player2.y = player2b.body.position.y;

        player1Leg.x = player1Legb.body.position.x;
        player2Leg.x = player2Legb.body.position.x;
        player1Leg.y = player1Legb.body.position.y;
        player2Leg.y = player2Legb.body.position.y;

        ball.display()
        player1b.display()
        player2b.display()
        player1Legb.display()
        player2Legb.display()
        //ground.display()
        drawSprites()

    }
}