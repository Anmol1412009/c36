class Player{
 
    constructor(){

    }
    getCount(){

        database.ref("playerCount").on("value",function (data){
       playerCount=data.val()
      
        })
      }
        updateCount(Count) {
            database.ref("/").update({
                playerCount:Count
            })
        }
        update(name) {
            database.ref("player"+playerCount).set({
                name:name
            })
        }




}


