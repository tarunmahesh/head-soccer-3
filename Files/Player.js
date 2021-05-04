class Player {
    constructor() {
        this.name = null;
        this.index = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.rotation = 0;
        this.score = 0;
    }

    update(){
        fireBase.ref('players/player'+this.index).set({
            name: this.name,
            score:this.score,
            posX:this.positionX,
            posY:this.positionY,
            rotate:this.rotation
        })
    }

    updatePlayerCount(playerCount){
        fireBase.ref('/').update({
            playerCount: playerCount
        })
    }

    getPlayerCount(){
        fireBase.ref('playerCount').on("value", (data)=>{
            playerCount = data.val()
        })
    }

    static read(){
        fireBase.ref('players').on("value", (data)=>{
            playerInfo = data.val()
        })
    }
}