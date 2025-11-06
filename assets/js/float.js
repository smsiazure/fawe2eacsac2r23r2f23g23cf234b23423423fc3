  let currentUrl = "";

  // Open overlay only if not already open
  function openOverlay(url) {
    const overlay = document.getElementById("overlay-frame");
    const iframe = document.getElementById("overlay-iframe");

    if (overlay.style.display === "flex") return; // Prevent reopening

    currentUrl = url;
    iframe.src = url;
    overlay.style.display = "flex";
  }

  // Close overlay
  function closeOverlay() {
    const overlay = document.getElementById("overlay-frame");
    const iframe = document.getElementById("overlay-iframe");
    overlay.style.display = "none";

    // Clear iframe so no blank frame appears on reload
    iframe.src = "";
    currentUrl = "";
  }

  // Refresh overlay content
  function refreshOverlay() {
    const iframe = document.getElementById("overlay-iframe");
    if (!currentUrl) return;
    iframe.src = "";
    iframe.src = currentUrl;
  }

  // Inject floating button
  function insertFloatingButtons() {
    const container = document.getElementById("floating-container");
    container.innerHTML = `
      <div class="floating-buttons">
        <button class="button-menu" onclick="openOverlay('elements/emergency.html')">🚨</button>
      </div>
    `;
  }

  window.addEventListener("DOMContentLoaded", insertFloatingButtons);