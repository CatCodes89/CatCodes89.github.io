document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded!"); // Check if script is running

  // Set the end date to 7 days from now
  function getSaleEndDate() {
    const now = new Date();
    now.setDate(now.getDate() + 7);
    now.setHours(23, 59, 59, 999); // End of the day
    return now.getTime();
  }

  let saleEndDate = getSaleEndDate();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = saleEndDate - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days-num").innerHTML = days;
      document.getElementById("hours-num").innerHTML = hours;
      document.getElementById("minutes-num").innerHTML = minutes;
      document.getElementById("seconds-num").innerHTML = seconds;
    } else {
      // Reset timer to 7 days from now again
      saleEndDate = getSaleEndDate();
    }
  }

  // Start countdown
  setInterval(updateCountdown, 1000);
  updateCountdown();
});