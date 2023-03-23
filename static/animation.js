function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  
  function updateClickCount() {
    clickCount += 1;
    var countElement = document.getElementById("click-count");
    countElement.innerHTML = clickCount;
  }
  
  function animateButton() {
    bashBtn.classList.add("animated");
    setTimeout(function() {
      bashBtn.classList.remove("animated");
    }, 500);
  }
  
  function saveClickCount() {
    localStorage.setItem("clickCount", clickCount);
  }
  
  function loadClickCount() {
    var storedCount = localStorage.getItem("clickCount");
    if (storedCount) {
      clickCount = parseInt(storedCount);
      var countElement = document.getElementById("click-count");
      countElement.innerHTML = clickCount;
    }
  }
  
  loadClickCount();
  