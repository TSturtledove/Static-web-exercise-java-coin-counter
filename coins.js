
var money
var pennies = 0
var quarters = 0
var dimes = 0
var nickels = 0

document.addEventListener("keyup", function(e)
{
  if(e.code=="Enter"){
    coinamount();

  }
})


function coinamount() {

  money = (document.getElementById("userAmount").value)

  // money = parseInt(money)

  console.log(money)
  count();

}



function count() {
  if (!isNaN(money)){
    var t=money
    do {
      t -=0.25;
      quarters+=1;
    } while(t>=0.25)
    do {
      t-=0.10;
      dimes+=1;
    } while(t>=0.10)
    // for (t = money; t!==0; t-=0.25) {
      // if (t>.25){
      //   t= t-.25;
        // quarters+=1;
      // }
      // else if(t<.25 && t>.10){
      //   t= t-.10;
      //   dimes+=1;
      // }else if(t<.10 && t>.05){
      //   t= t-.05;
      //   nickels+=1;
      // }else{
      //   t= t-.01;
      //   pennies+=1
      // }
    // }
    pt();
  }else{
    alert("Please enter a number using the Numeral( 4, 5, 56, etc...)")
  }
}




function pt() {
  console.log("quarters:"+quarters)
  console.log("dimes:"+dimes)
  // console.log("nickels:"+nickels)
  // console.log("pennies:"+pennies)
  quarters=0
  dimes = 0
  nickels = 0
  pennies = 0

}
