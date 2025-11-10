  let currentUrl = "";

  // Open overlay only if not already open
  function openOverlay1(url) {
    const overlay = document.getElementById("overlay-frame1");
    const iframe = document.getElementById("overlay-iframe1");

    if (overlay.style.display === "flex") return; // Prevent reopening

    currentUrl = url;
    iframe.src = url;
    overlay.style.display = "flex";
  }

  // Close overlay
  function closeOverlay1() {
    const overlay = document.getElementById("overlay-frame1");
    const iframe = document.getElementById("overlay-iframe1");
    overlay.style.display = "none";

    // Clear iframe so no blank frame appears on reload
    iframe.src = "";
    currentUrl = "";
  }

  // Refresh overlay content
  function refreshOverlay1() {
    const iframe = document.getElementById("overlay-iframe1");
    if (!currentUrl) return;
    iframe.src = "";
    iframe.src = currentUrl;
  }

  // Inject floating button
  function insertFloatingButtons() {
    const container = document.getElementById("floating-container1");
    container.innerHTML = `
      <div class="floating-buttons1">
        <button class="button-menu" onclick="openOverlay('elements/chatbot.html')">🚨</button>
      </div>
    `;
  }

  window.addEventListener("DOMContentLoaded", insertFloatingButtons);