const button = document.querySelector(".navbar__ham");
const menu = document.querySelector(".navbar__links");
const overlay = document.querySelector("#overlay");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
});

function infoNumbers() {
  var counters = document.querySelectorAll(".infoNumbers__number");

  function animeNumbers() {
    //observer to check if counters are on viewport
    if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setTimeout(function () {
              updateCount(entry.target);
            }, 900);
          }
        });
      });

      counters.forEach((el) => observer.observe(el));
    } else {
      // IE Fallback
      counters.forEach(function (el) {
        el.innerText = el.getAttribute("data-target");
      });
    }
  }

  function updateCount(el) {
    var speed = 500;
    //target number
    var target = +el.getAttribute("data-target");
    //initial number
    var count = +el.innerText;
    //increment numbers
    var inc = target / speed;
    var inc2 = target + 1;

    if (count < target) {
      el.innerText = Math.floor(count + inc);
      setTimeout(function () {
        updateCount(el);
      }, 3);

      if (target < 40) {
        el.innerText = Math.floor(count + 1);
        setTimeout(function () {
          updateCount(el);
        }, 1400);
      }
    } else {
      el.innerText = target;
    }
  }

  animeNumbers();
}
infoNumbers();
