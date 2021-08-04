class Form{

constructor(){

}
display(){
var title=createElement("h1")
title.html("car racing game")
var input=createInput("Enter your name ")
var button=createButton("PLAY")
title.position(130,0)
input.position(500,160)
button.position(550,200)
button.mousePressed(function (){
    input.hide()
    button.hide()
    var name=input.value()
    var welcome=createElement("h3")
    welcome.html("hello"+name)
    welcome.position(500,300)
    playerCount=playerCount+1
    player.update(name)
    player.updateCount(playerCount)
})





}









}