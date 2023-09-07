window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Prevent the default prompt
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';
  
    installButton.addEventListener('click', () => {
      e.prompt();
      installButton.style.display = 'none';
    });
  });
  