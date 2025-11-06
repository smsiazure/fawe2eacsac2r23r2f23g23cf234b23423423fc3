  function openRightFrame(index) {
    const tabs = document.querySelectorAll('.tab1');
    const frames = document.querySelectorAll('.frame-right');

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      frames[i].classList.toggle('active', i === index);
    });
  }

  // Refresh right frame on right-click (context menu)
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // prevent default context menu

    const activeFrame = document.querySelector('.frame-right.active');
    if (activeFrame) {
      const currentSrc = activeFrame.src;
      activeFrame.src = ''; // force reload
      activeFrame.src = currentSrc;
    }
  });