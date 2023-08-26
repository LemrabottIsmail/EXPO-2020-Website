function compute() {
  var name = document.getElementById("name").value;
  document.getElementById("output1").innerHTML = "Hello " + name + ", here is your booking details:";
  var restaurant = document.getElementById("restaurant").value;
  document.getElementById("output2").innerHTML = "Restaurant: " + restaurant;
  var date = document.getElementById("date").value;
  document.getElementById("output3").innerHTML = "The date: " + date;
  var time = document.getElementById("time").value;
  document.getElementById("output4").innerHTML = "Time: " + time;
  var people = document.getElementById("people").value;
  document.getElementById("output5").innerHTML = "No. of people: " + people + "<p>We are Excited to meet You!!</p><hr>";
}
