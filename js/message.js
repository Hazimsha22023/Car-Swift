    // JavaScript code for countdown timer and redirection
    var count = 6; // Initial value for countdown
    var timerElement = document.getElementById("timer");

    function updateTimer() {
      count--; // Decrement count
      timerElement.textContent = count; // Update timer display
      if (count <= 0) {
        clearInterval(timerInterval); // Stop the timer
        window.location.href = "index.html"; // Redirect to index.html
      }
    }

    // Call updateTimer function every second (1000 milliseconds)
    var timerInterval = setInterval(updateTimer, 1000);