
function coinamount() {

  var money = document.getElementById("userAmount").value

  money = parseInt(money)

  console.log(money)
  counter()
  print()
}



document.addEventListener("keyup", function(e)
{
  if(e.code=="Enter"){
    coinamount();
  }
})

var pennies
var quarters
var dimes
var nickels


function counter() {
  if (money!==NaN){
    for (t = money; t!==0;) {
      if (t>25){
        t= t-25
        quarters+=1
      }else if(t<25 && t>10){
        t= t-10
        dimes+=1
      }else if(t<10 && t>5){
        t= t-5
        nickels+=1
      }else if(t<5){
        t= t-1
        pennies+=1
      }
    }
  }
}


function print() {
  console.log("quarters:"quarters)
  console.log("dimes:"dimes)
  console.log("nickels:"nickels)
  console.log("pennies:"pennies)
}
