var c = 0;
function color()
{
  if(document.getElementById("rd1").checked)
  {
    document.getElementById("lb1").style.color = "Green";
    document.getElementById("lb2").style.color = "";
    document.getElementById("lb3").style.color = "";  }
  else if(document.getElementById("rd2").checked)
  {
    document.getElementById("lb1").style.color = "";
    document.getElementById("lb2").style.color = "Orange";
    document.getElementById("lb3").style.color = "";  }
  else if(document.getElementById("rd3").checked)
  {
    document.getElementById("lb3").style.color = "red";
    document.getElementById("lb2").style.color = "";
    document.getElementById("lb2").style.color = "";
  }
}
function submitrate(){

document.getElementById("rate").innerHTML = "<hr> Your rate has been submitted! <img src = 'Images_Project/smile.png' style = 'width:45px;'>";
}
