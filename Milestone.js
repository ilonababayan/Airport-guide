function gotopage1(){
  document.getElementById("page1").style = "display: block;"
  document.getElementById("page2").style = "display: none;"
  document.getElementById("page3").style = "display: none;"
}

function gotopage2(){
  document.getElementById("page1").style = "display: none;"
  document.getElementById("page2").style = "display: block;"
  document.getElementById("page3").style = "display: none;"
}

function gotopage3(){
document.getElementById("page1").style = "display: none;"
document.getElementById("page2").style = "display: none;"
document.getElementById("page3").style = "display: block;"
}

function calculatime() {

  let v = 10


  let gate_A = parseInt(document.getElementById("gateA").innerHTML)

  let gate_B = parseInt(document.getElementById("gateB").innerHTML)

  let gate_C = parseInt(document.getElementById("gateC").innerHTML)

  let duty_free = parseInt(document.getElementById("dutyfree").innerHTML)

  let current_gate = parseFloat(document.getElementById("locations").value)

  let middle_point = parseFloat(document.getElementById("locations").value)
   
  let target_gate = parseFloat(document.getElementById("locations").value)

  if (current_gate == gate_A)
      {GateA = 200}
  if (current_gate == gate_B)
      {GateB = 500}
  if (current_gate == gate_C)
      {GateC = 1500}
  if (current_gate == duty_free)
      {DutyFree = 700}

  let calculatetime = ("current_gate" + "<br>" + "middle_point"+ "<br>" - "target_gate"+ "<br>")/v        
  console.log(calculatetime);

  document.getElementById("tleft").innerHTML = calculatetime
  
}

function showfloors() {

  let time = parseFloat(document.getElementById("availabletime").value)
      
  let lessthan15min = parseInt(document.getElementById("less_than_15_minutes").innerHTML)

  let hour_1 = parseInt(document.getElementById("1hour").innerHTML)

  let hours_2 = parseInt(document.getElementById("2hours").innerHTML)

  let hours_3 = parseInt(document.getElementById("3hours").innerHTML)

  let morethan3hours = parseInt(document.getElementById("more_than_3_hours").innerHTML)

      if (time == lessthan15min)
      {avfloor = "-3"}

      if (time == hour_1)
      {avfloor = "-2"}

      if (time == hours_2) 
      {avfloor = "-1"}

      if (time == hours_3)
      {avfloor = "0"}
      
      if (time == morethan3hours) 
      {avfloor = "1"}

  let display = document.getElementById("floors");
  display.innerHTML= "currentfloorbutton"  + avfloor;

  document.getElementById("avfloors").innerHTML = display

}
