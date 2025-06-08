document.addEventListener("DOMContentLoaded", function () {
  let countdown = 25;
  const countdownSpan = document.getElementById("countdown");
  const countdownBox = document.getElementById("countdown-box");
  const shareBox = document.getElementById("share-box");
  const shareBtn = document.getElementById("facebookShareBtn");
  const warningMessage = document.getElementById("warning-message");

  const interval = setInterval(() => {
    countdown--;
    countdownSpan.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(interval);
      countdownBox.style.display = "none";
      shareBox.style.display = "block";
    }
  }, 1000);

  let clickCount = 0;

  shareBtn.addEventListener("click", function () {
    clickCount++;

    if (clickCount < 10) {
      warningMessage.style.display = "block";
    } else {
      warningMessage.textContent = "✅ Thanks for sharing!";
      warningMessage.style.color = "green";
      warningMessage.style.display = "block";
    }
  });
});
document.getElementById("copyBtn").addEventListener("click", function () {
    const url = "https://chatgptgiveway.netlify.app/";
    navigator.clipboard.writeText(url).then(() => {
        document.getElementById("copySuccess").style.display = "block";
        setTimeout(() => {
            document.getElementById("copySuccess").style.display = "none";
        }, 3000);
    }).catch((err) => {
        alert("Failed to copy the link.");
    });
});
