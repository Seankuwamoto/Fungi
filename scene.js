'use strict';

function draw() {  
  document.getElementById('scrollArrow').style.transform = `translate(0, ${Math.sin(frameCount / 13) * 10}px)`;
}