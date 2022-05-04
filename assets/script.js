function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
  document.documentElement.scrollLeft -= (delta * scrollSpeed);
  document.body.scrollLeft -= (delta * scrollSpeed);
  e.preventDefault();
}

if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
  // IE 6/7/8
  window.attachEvent("onmousewheel", scrollHorizontally);
}

function myFunction1() {
  var x = document.getElementById("shelf");
  if (x.style.display !== "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("shelf2");
  if (x.style.display !== "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("shelf3");
  if (x.style.display !== "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
