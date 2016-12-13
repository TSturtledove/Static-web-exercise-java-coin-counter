
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


  console.log(money)
  count();

}



function count() {
  if (!isNaN(money)){
    var t=money*100
    while(t>=25){
      t -=25;
      quarters+=1;
    }
    while(t<25 && t>=10){
      t-=10;
      dimes+=1;
    }
    while(t<10 && t>=5){
      t-=5;
      nickels+=1;
    }
    while(t<5 && t>=1){
      t-=1;
      pennies+=1;
    }
    pt();
  }else{
    alert("Please enter a number using the Numeral( 4, 5, 56, etc...)")
  }
}




function pt() {
  console.log("quarters:"+quarters)
  document.getElementsByClassName("quart")[0].innerHTML = quarters
  console.log("dimes:"+dimes)
  document.getElementsByClassName("dime")[0].innerHTML = dimes
  console.log("nickels:"+nickels)
  document.getElementsByClassName("nick")[0].innerHTML = nickels
  console.log("pennies:"+pennies)
  document.getElementsByClassName("penn")[0].innerHTML = pennies
  quarters=0
  dimes = 0
  nickels = 0
  pennies = 0

}
