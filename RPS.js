var userscore = 0
var compscore = 0
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
var count = 0


function getcompchoice(){
  const choices = ['Rock','Paper','Scissor']
  const random = choices[Math.floor(Math.random()*choices.length)]
  return random
}

function game(userchoice){
  count+1
  const computerchoice = getcompchoice()
  switch (userchoice+computerchoice){
    case "RockScissor":
    case "PaperRock":
    case "ScissorPaper":
      win(userchoice,computerchoice)
      break
    case "RockPaper":
    case "PaperScissor":
    case "ScissorRock":
      lose(userchoice,computerchoice)
      break
    case "RockRock":
    case "PaperPaper":
    case "ScissorScissor":
      draw(userchoice,computerchoice)
      break
  }
}
function win(userchoice,computerchoice){
  userscore++
  document.getElementById("user_score").innerHTML=userscore
  const user = "user".sub()
  const comp = "comp".sub()
  document.getElementById("score").innerHTML=`${userchoice}${user} beats ${computerchoice}${comp}`
  document.getElementById("wins").innerHTML= "You Win "
}
function lose(userchoice,computerchoice){
  compscore++
  document.getElementById("comp_score").innerHTML=compscore
  const user = "user".sub()
  const comp = "comp".sub()
  document.getElementById("score").innerHTML=`${computerchoice}${comp} beats ${userchoice}${user}`
  document.getElementById("wins").innerHTML= "Computer Wins "
}
function draw(userchoice,computerchoice){
  document.getElementById("score").innerHTML= `Both chose ${userchoice}`
  document.getElementById("wins").innerHTML= " Its a draw"

}


rock.addEventListener('click', function(){
  count++
  document.getElementById("choosetxt").style.display= "none"
  game("Rock")

})
paper.addEventListener('click', function(){
  document.getElementById("choosetxt").style.display= "none"
  game("Paper")
})
scissor.addEventListener('click', function(){
  document.getElementById("choosetxt").style.display= "none"
  game("Scissor")
})

