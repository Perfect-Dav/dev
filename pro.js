window.onscroll = function() {myfunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myfunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
     navbar.classList.remove("sticky");
  }
}

function animateValue(obj, start = 0, end = null, duration = 3000) {
    if (obj) {

        var textStarting = obj.innerHTML;

        // remove non-numeric from starting text if not specified
        end = end || parseInt(textStarting.replace(/\D/g, ""));

        var range = end - start;

        // no timer shorter than 50ms
        var minTimer = 50;

        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));

        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);

        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, -0);
            var value = Math.round(end - (remaining * range));
            // replace numeric digits only in the original string
            obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }
}

animateValue(document.getElementById('value'));
animateValue(document.getElementById('value1'));
animateValue(document.getElementById('value2'));
animateValue(document.getElementById('value3'));

/* Back to Top */
scroll = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
