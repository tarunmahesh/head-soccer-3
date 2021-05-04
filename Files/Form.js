class Form {
    constructor(){
        this.input = createInput("Enter your name")
        this.button = createButton("Enter")
        this.reset = createButton("Reset")
        this.title = createElement('h1')
        this.greeting = createElement('h3')
    }

    startHide(){
        this.input.hide()
        this.button.hide()
    }

    playHide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }

    display(){
        this.input.position(width/2 - 100,2*height/5)
        this.button.position(width/2 - 100,3*height/5)
        this.title.html("Head Soccer Game")
        this.title.position(width/2-150,height/15)
        this.reset.position(7*width/8,14*height/15)

        this.button.mousePressed(()=>{
            this.startHide()
            playerCount += 1;
            player.index = playerCount
            player.updatePlayerCount(player.index)
            player.name = this.input.value();
            player.update()
            this.greeting.html("Hello " + player.name)
            this.greeting.position(width/2-90,height/2)
        })

        this.reset.mousePressed(()=>{
            game.updateGameState(0)
            player.updatePlayerCount(0)
        })
    }
}