$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);

  //Set variables.
  var counter = 0;
	var wins = 0;
  var losses = 0;
  var userTotal= 0; 
	$('#win').text(wins);
	$('#loss').text(losses);

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  //Establish game reset. 
  function reset(){
    Random=Math.floor(Math.random()*101+19);
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 


//Increment wins. 
function success(){
  alert("You won!");
    wins++; 
    $('#win').text(wins);
    reset();
  }
  //Increment losses. 
  function fail(){
  alert ("You lose!");
    losses++;
    $('#loss').text(losses);
    reset()
  }
  //Establish click function. 
    $('#image1').on ('click', function(){
      userTotal = userTotal + num1;
      $('#finalTotal').text(userTotal); 
            //Defines wins and losses. 
          if (userTotal == Random){
            success();
          }
          else if ( userTotal > Random){
            fail();
          }   
    })  
    $('#image2').on ('click', function(){
      userTotal = userTotal + num2;
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            success();
          }
          else if ( userTotal > Random){
            fail();
          } 
    })  
    $('#image3').on ('click', function(){
      userTotal = userTotal + num3;
      $('#finalTotal').text(userTotal);
            if (userTotal == Random){
            success();
          }
          else if ( userTotal > Random){
            fail();
          } 
    })  
    $('#image4').on ('click', function(){
      userTotal = userTotal + num4;
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            success();
          }
          else if ( userTotal > Random){
            fail();
          }
    });   
  })
