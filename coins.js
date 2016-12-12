
function coinamount() {

var money = parseInt(document.getElementsByClassName("userAmount").value)



console.log(money)
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

for (t = someamount; t!==0;) {
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
