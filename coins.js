
function coinamount() {

var money = parseInt(document.getElementById("userAmount").vaule)



console.log(money)
}
document.addEventListener("keyup", function(e)
{
  if(e.code=="Enter"){
    coinamount();
  }
})


// pennies();
// quarters();
// dimes();
// nickels();
