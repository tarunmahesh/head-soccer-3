class Game {
    constructor(){

    }

    updateGameState(gameState) {
        fireBase.ref('/').update({
            gameState: gameState
        })
    }

    getGameState(){
        fireBase.ref('gameState').on("value", (data)=>{
            gameState = data.val() 
        })
    }

    async start(){
       if(gameState === 0){
           player = new Player()
           var playerCountRef = await fireBase.ref('playerCount').once("value")
           if (playerCountRef.exists()){
               playerCount = playerCountRef.val()
               player.getPlayerCount()
           }
           form = new Form()
           form.display()
       }

       player1 = createSprite(21,21,21,21)
       player1.addImage(player1IMG)
       player1.scale = 0.2
       player2 = createSprite(width-21,21,21,21)
       player2.addImage(player2IMG)
       player2.scale = 0.45;
       playerArray = [player1b, player2b]

       player1Leg = createSprite(21,121,21,21)
       player1Leg.addImage(player1LegIMG)
       player1Leg.scale = 0.1
       player2Leg = createSprite(width-21,121,21,21)
       player2Leg.addImage(player2LegIMG)
       player2Leg.scale = 0.1
       legArray = [player1Legb, player2Legb]
    }

    play(){
        form.playHide()
        Player.read()
        background("lightblue")
        image(bgIMG,0,0,width,height)

        if(playerInfo !== undefined){
            var i = 0;
            for(var plr in playerInfo){
                i++;
                if(i===player.index){
                    if(keyDown === UP_ARROW&&player.index!==null&&player.y > 30){
                        Matter.Body.setPosition(playerbArray[i-1],{x:0,y:50})
                        player.positionY = playerbArray[i-1].position.y
                        player.update()
                    }
            
                    if(keyDown === RIGHT_ARROW&&player.index!==null){
                        player.positionX += 20;
                        player.update()
                    }
            
                    if(keyDown === LEFT_ARROW&&player.index!==null){
                        player.positionX -= 20;
                        player.update()
                    }
                }
            }
        }
    }
}