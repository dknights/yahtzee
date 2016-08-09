countVar=0;
diceArray=[];
var currentDice;
var currentState;
var n1State=false;
var n2State=false;
var n3State=false;
var n4State=false;
var n5State=false;
var n6State=false;
var check1Count=0;
var check1=false;
var check2Count=0;
var check3Count=0;
var check4Count=0;
var check5Count=0;
var check6Count=0;
var shortArray=false;
var longArray=false;


function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}




/* click function */
$(document).ready(function(){
  
  

  
  /* hold functions */

      $( "#n1").click(function() { 
        n1State =!n1State;
        console.log(n1State)
       
      })
      
      $( "#n2").click(function() { 
      n2State =!n2State;
        console.log(n2State)
      })
       
      $( "#n3").click(function() { 
        n3State =!n3State;
       console.log(n3State)
      })
      
      $( "#n4").click(function() { 
        n4State =!n4State;
      console.log(n4State)
      })
      
      $( "#n5").click(function() { 
        n5State =!n5State;
        console.log(n5State)
      })
      

      
    

  /* DICE THROW */  
$( "#buttonClick" ).click(function() {

  diceThrow()
  if (countVar==3){
    reset();
  }
});

 /* DICE THROW Result */ 
  function diceThrow(){
    reset();
      for (var i = 0; i < 5; i++) {
      var currentState = window['n'+(i+1)+'State'];
        console.log(i+" === "+currentState)
        if (currentState==false){
        randomThrow();
        diceArray[i] = diceResult ;
        $( "#n"+(i+1)).text(diceResult);
        }
      }
     console.log(diceArray);
    diceArray.sort();
    console.log(diceArray);
    /*check dice */
    checkKind();
    checkRun();
    
     /*reset */
    
  }
  
/* RESET */ 
  function reset() {
    countVar=0; 
    check1Count=0;
    check2Count=0
    check3Count=0
    check4Count=0
    check5Count=0
  }
 
  /* Random */ 
  function randomThrow(){
    diceResult= Math.floor((Math.random() * 6) + 1); 
  } 
  
  /*3 of a kind */
  function checkKind(){
  
   
    check1Count=countInArray(diceArray, 1);
    check2Count=countInArray(diceArray, 2);
    check3Count=countInArray(diceArray, 3);
    console.log("1 count "+check1Count);
    console.log("2 count "+check2Count);
    console.log("3 count "+check3Count);
 
    
    
    console.log(check1Count)

    }
  
   function checkRun(){
     var diceResultString=diceArray.toString();
      if (diceResultString.indexOf('1,2,3,4') !== -1 || diceResultString.indexOf('2,3,4,5') !== -1  ||        diceResultString.indexOf('3,4,5,6') !== -1){
        shortArray=true;
        console.log("shortArray "+shortArray);
      };
     if (diceResultString.indexOf('2,3,4,5,6') !== -1 || diceResultString.indexOf('1,2,3,4,5') !== -1){
        longArray=true;
        console.log("longArray "+longArray);
      }
   }
  
  
  /* BUTTON CHECK */
  
   $("#oneButton").click(function() { 
        
     if (check1==false){
        alert(check1Count);
       check1==true
     }
    
    })
  
    
});