  function openListFrame(index) {
    const listItems = document.querySelectorAll('.list-item');
    const iframes = document.querySelectorAll('.list-item iframe');

    // Hide all iframes and deactivate list items
    listItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
      iframes[i].style.display = i === index ? 'block' : 'none';
    });
  }

  // Add event listeners to the list items
  document.querySelectorAll('.list-item a').forEach((link, index) => {
    link.addEventListener('click', () => openListFrame(index));
  });
