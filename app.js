// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Check if the app can be installed
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default browser install prompt
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        event.prompt(); // Show the custom install prompt
        event.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the PWA installation');
                installButton.style.display = 'none';
            } else {
                console.log('User dismissed the PWA installation');
            }
        });
    });
});
