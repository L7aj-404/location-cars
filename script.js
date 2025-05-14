 const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        menu.style.maxHeight = menu.scrollHeight + "px";
      } else {
        menu.style.maxHeight = null;
      }
    });

    // Close menu on window resize if desktop
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 768){
        menu.style.maxHeight = null;
        menuToggle.checked = false;
      }
    });