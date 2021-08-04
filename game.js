class Game{
 
    constructor(){

    }
   getstate(){

  database.ref("gameState").on("value",function (data){
 gameState=data.val()

  })
}
  updatepos(state) {
      database.ref("/").update({
          gameState:state
      })
  }

  start(){
      if(gameState=== 0){
          player=new Player()
          player.getCount()
          form=new Form()
          form.display()
          
      }
  }



   }














