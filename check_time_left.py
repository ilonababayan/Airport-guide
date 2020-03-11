v = 10 #1000meter/minut
Gate_A = 200
Gate_B = 500
Gate_C = 1500

currentGate = input("Please insert the name of the closest Gate to you")
targetGate = input("Please insert the name of your target Gate")

currentGateMeters = 0

if (currentGate == "A"):
  currentGateMeters = Gate_A
else:  
  if (currentGate == "B"):
   currentGateMeters = Gate_B
  else:
    if (currentGate == "C"):
      currentGateMeters = Gate_C
    else: 
      if (currentGate == ""):
       currentGate = "No current location"

      

if (targetGate == "A"):
  targetGate = Gate_A
else:
    if (targetGate == "B"):
      targetGate = Gate_B
    else:
      if (targetGate == "C"):
        targetGate = Gate_C
      else:
        if (targetGate == ""):
       targetGate = "No destination"
