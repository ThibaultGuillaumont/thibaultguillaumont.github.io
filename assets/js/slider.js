function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-container");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(container) {
    console.log(container.children[1].children[0])
    img = container.children[1]
    loaded=false;

    while(loaded) {
      container.children[1].children[0].onload = function() {loaded=true;console.log("loaded")}
    }
    console.log("loaded")

    var ratio = 0.5;
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    console.log(w)
    //set container size
    //container = document.getElementById("slider");
    container.style.minHeight = h + "px";
    /*set the width of the img element to 50%:*/
    img.style.clip = "rect(0px, " + (w * ratio) + "px, " + img.offsetHeight  + "px, 0px)";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h * ratio) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w * ratio) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    window.addEventListener("resize", slideResize);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideResize() {
      console.log("resized!");
      x = ratio*img.offsetWidth;
      w = img.offsetWidth;
      h = img.offsetHeight;
      container.style.minHeight = h + "px";
      img.style.clip = "rect(0px, " + x + "px, " + img.offsetHeight  + "px, 0px)";
      slider.style.left = x - (slider.offsetWidth / 2) + "px";
      slider.style.top = (h * ratio) - (slider.offsetHeight / 2) + "px";
    }
    function slideMove(e) {

      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      dx = e.pageX || e.changedTouches[0].pageX
      x = dx - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      //img.style.width = x + "px";
      img.style.clip = "rect(0px, " + x + "px, " + img.offsetHeight  + "px, 0px)";

      /*position the slider:*/
      slider.style.left = x - (slider.offsetWidth / 2) + "px";
      //save ratio
      ratio = x/img.offsetWidth;
    }
  }
}
window.addEventListener("load",initComparisons,false);
window.attachEvent && window.attachEvent("onload",initComparisons);
//document.onload = initComparisons();
