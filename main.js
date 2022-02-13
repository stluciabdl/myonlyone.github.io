const clock = () => {
  var date    = new Date();
  var hours   = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var midday;

  hours     = updateTime(hours);
  minutes   = updateTime(minutes);
  seconds   = updateTime(seconds);
  var name  = "❤️Bella❤️";

  // if else condition

  midday = (hours >= 12) ? "PM" : "AM";

  document.getElementById("clock").innerHTML =
    ""+hours+"" + ":" + ""+minutes+"" + ":" + ""+seconds+"" + ""+midday+"";

  var time = setTimeout(function () {
    clock();
  }, 1000);

  //   Good Morning and Good Night Conditions

  if (hours <= 11) {
    var greeting = "Good Morning " + name + "Happy Valentine❤️❤️";
  }

  if (hours >= 11 && hours <= 12) {
    var greeting = "Good Afternoon" + name + "Happy Valentine❤️❤️";
  }
  
  if (hours >= 12 && hours <= 18) {
    var greeting = "Good Afternoon " + name + "Happy Valentine❤️❤️";
  }

  if (hours >= 18 && hours <= 22) {
    var greeting = "Good Evening " + name + "Happy Valentine❤️❤️";
  }
  
  if (hours >= 22 && hours <= 24) {
    var greeting = "Good Night" + name + "Happy Valentine❤️❤️";
  }

  document.getElementById("greetings").innerHTML = greeting;
}

const updateTime = (k) => {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

// call clock function 
clock();
