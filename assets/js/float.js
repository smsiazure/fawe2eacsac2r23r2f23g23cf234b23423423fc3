  let currentUrl = "";

  function openOverlay(url) {
    const overlay = document.getElementById("overlay-frame");
    const iframe = document.getElementById("overlay-iframe");
    if (overlay.style.display === "flex") return;
    currentUrl = url;
    iframe.src = url;
    overlay.style.display = "flex";
  }

  function closeOverlay() {
    const overlay = document.getElementById("overlay-frame");
    const iframe = document.getElementById("overlay-iframe");
    overlay.style.display = "none";
    iframe.src = "";
    currentUrl = "";
  }

  // === Overlay #2 ===
  let currentUrl1 = "";

  function openOverlay1(url) {
    const overlay = document.getElementById("overlay-frame1");
    const iframe = document.getElementById("overlay-iframe1");
    if (overlay.style.display === "flex") return;
    currentUrl1 = url;
    iframe.src = url;
    overlay.style.display = "flex";
  }

  function closeOverlay1() {
    const overlay = document.getElementById("overlay-frame1");
    const iframe = document.getElementById("overlay-iframe1");
    overlay.style.display = "none";
    iframe.src = "";
    currentUrl1 = "";
  }

  // === Floating Buttons ===
  function insertFloatingButtons() {
    document.getElementById("floating-container").innerHTML = `
      <div class="floating-buttons">
        <button class="button-menu" onclick="openOverlay('elements/emergency.html')">🚨</button>
      </div>
    `;

    document.getElementById("floating-container1").innerHTML = `
      <div class="floating-buttons1">
        <button class="button-menu" onclick="openOverlay1('elements/chatbot.html')">💬</button>
      </div>
    `;
  }

  window.addEventListener("DOMContentLoaded", insertFloatingButtons);