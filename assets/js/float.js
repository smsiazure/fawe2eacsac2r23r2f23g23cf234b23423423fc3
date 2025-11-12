  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar1 = document.getElementById('sidebar1');

  toggleBtn.addEventListener('click', () => {
    sidebar1.classList.toggle('active');

    // Move button along with sidebar
    if(sidebar1.classList.contains('active')){
      toggleBtn.style.right = sidebar1.offsetWidth + 'px';
    } else {
      toggleBtn.style.right = '0px';
    }
  });