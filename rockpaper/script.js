$(document).ready(function(){
  const choices = ['rock','paper','scissors'];

  function translate(choice){

    if (choice === 'rock'){
        return 'rock'
    }
    if (choice === 'paper'){
        return 'paper'
    }
    if (choice === 'scissors'){
        return 'scissors'
    }
    // let playerChoice = $(this).data('choice')
  }

  $('.img').click(function(){

      let playerChoice = $(this).data('choic');

     

      let computerChoice = choices[Math.floor(Math.random()*3)]

      $('#playerChoice').text(`${translate(playerChoice)}`)

      $('#computerChoice').text(`${translate(computerChoice)}`)

      let result = ""

      if (playerChoice === computerChoice){
        result += 'Draw'

       
      }else if(playerChoice==='rock' && computerChoice==="scissors"  ||

        (playerChoice ==='paper' && computerChoice==="rock") ||

        (playerChoice ==='scissors' && computerChoice==="paper")

      ){
        result += 'Player Win'
      } else {
        result += 'Computer Win'
      }

     $( "#result").html(result)
           
      
      


  })
})