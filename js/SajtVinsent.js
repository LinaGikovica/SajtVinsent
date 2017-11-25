function emailCheck() {
        var email = document.getElementById("userEmail");
        var userEmail= email.value;
        var message = "";
        if (userEmail == '') {
            message = "Your must enter valid email address";
            alert(message);
        } else {
            message = "Thank You!We will send notification emails to <" + userEmail + "> ";
            alert(message);
            
        }

    }

  var countDownDate = new Date("March 30, 2018 00:00:00").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "Vincent's birthday is in " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds."

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy Birthday, Vincent!";
  }
}, 1000);

 function position(event) {
        var pictureMessageElement = document.getElementById("pictureMessage");
        var rect = event.target.getBoundingClientRect();
        var x = Math.round(event.pageX - rect.x);
        var y = Math.round(event.pageY - rect.y);
        pictureMessageElement.innerHTML = x + "," + y;
    }
