function compute() {
  document.getElementById("intro").innerHTML = "<hr>Hello, Here is your Events booking details: ";
  var total = 0;
  var event1 = document.getElementById("select1").value;
  var people1 = document.getElementById("people1").value;
  var event11 = document.getElementById("event11").value;
  if (event1 == "YES"){
  payment1 = 35*people1;
  total += payment1;
  document.getElementById("output1").innerHTML = "<hr>\"Expo 2020: The Closing Cermony\" Event<br>" + "Payment: "
  + payment1 +" AED"+ "<br>No. of People: " + people1 + "<br>Event Timing: " + event11;
  }

  var event2 = document.getElementById("select2").value;
  var people2 = document.getElementById("people2").value;
  var event22 = document.getElementById("event22").value;
  if (event2 == "YES"){
  payment2 = 30*people2;
  total += payment2;
  document.getElementById("output2").innerHTML = "<hr>\"Expo 2020: Would You Rather?\" Event<br>" + "Payment: "
  + payment2 +" AED"+ "<br>No. of People: " + people2 + "<br>Event Timing: " + event22;
  }

  var event3 = document.getElementById("select3").value;
  var people3 = document.getElementById("people3").value;
  var event33 = document.getElementById("event33").value;
  if (event3 == "YES"){
  payment3 = 40*people3;
  total += payment3;
  document.getElementById("output3").innerHTML = "<hr>\"Expo 2020: Grand Finale Firework Display\" Event<br>" + "Payment: "
  + payment3 +" AED"+ "<br>No. of People: " + people3 + "<br>Event Timing: " + event33;
}

var event4 = document.getElementById("select4").value;
var people4 = document.getElementById("people4").value;
var event44 = document.getElementById("event44").value;
if (event4 == "YES"){
payment4 = 95*people4;
total += payment4;
document.getElementById("output4").innerHTML = "<hr>\"Expo 2020: Kids Winter Festival\" Event<br>" + "Payment: "
+ payment4 +" AED"+ "<br>No. of People: " + people4 + "<br>Event Timing: " + event44;
}

  document.getElementById("output5").innerHTML = "<hr><img src = 'Images_Project/money.png' width = '150px' height = '150px'>&nbsp;&nbsp;&nbsp;Your total payment is " + total +" AED "+", looking forward to seeing you!! &nbsp;&nbsp;&nbsp;<img src = 'Images_Project/smile.png' width = '100px' height = '100px'>";
}
