
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

  money = parseInt(document.getElementById("userAmount").value)

  // money = parseInt(money)

  console.log(money)
  count();

}


//
function count() {
  if (money !== NaN){
    pt();

//     for (t = money; t!==0; t=t) {
//       if (t>.25){
//         t= t-.25;
//         quarters+=1;
//       }else if(t<.25 && t>.10){
//         t= t-.10;
//         dimes+=1;
//       }else if(t<.10 && t>.05){
//         t= t-.05;
//         nickels+=1;
//       }else{
//         t= t-.01;
//         pennies+=1
//       }
//     }
  }else{
    alert("wrong")
  }
}
//
//
function pt() {
  console.log("quarters:"+quarters)
  console.log("dimes:"+dimes)
  console.log("nickels:"+nickels)
  console.log("pennies:"+pennies)
}
