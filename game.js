class Game{
    constructor(){
      
    }
    getGameState(){
      var gameStateRef = database.ref('gameState')
      gameStateRef.on("value",function(data){
        gameState = data.val();
      })
    }
    updateState(state){
        database.ref('/').update({
            gameState: state
          });

    }
    async start(){
        if(gameState == 0 ){
            player = new Player()
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getPlayerCount();
              }
              form = new Form()
              form.display();
        }

        
    }
    
    play(){
      form.hide();
      Player.getPlayerInfo();
      background(255,200,200);
      var index = 0;  
     if(allPlayers !== undefined){
       index = index + 1
      for(var plr in allPlayers){
        if(turn ===1 && playerState==1){
          var coin = new Coin(arrBoard[numRow-1][int(numCol/2)]["x"],arrBoard[numRow-1][0]["y"]-squareSize,59,59)
          coin.setImage(redImage)
          coins.push(coin)
          playerState=2
    
        } 
        if(turn==2 && playerState==2){
          var  coin=new Coin(arrBoard[numRow-1][int(numCol/2)]["x"],arrBoard[numRow-1][0]["y"]-squareSize,59,59)
          coin.setImage(yellowImage)
          coins.push(coin)
          playerState=1
        
        }
        for(var i = 0; i<coins.length; i++){
          coins[i].display()
        }
    
        coins[coins.length-1].setCoinX()
     
     
      board.drawBoard()
     } 
      
     }
   }
   end(msg){
    background(255,200,200);
    for(var i = 0; i<coins.length; i++){
      coins[i].display()
    }
    board.drawBoard()
    fill(0, 102, 153)
    textSize(30)
    text("Player "+turn+" - "+msg,200,45)
    
   }
   
      
          
      
   }

    
