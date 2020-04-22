function calculatime(){

  let v = 10

  let Gate A = 200
  
  let Gate B = 500
  
  let Gate C = 1500

  let Duty Free = 700

  let calculatetime = abs("currentgate" - "targetgate")/v          
  console.log(calculatetime)

  document.getElementById("tleft").innerHTML = calculatetime
  
}
