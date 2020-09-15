const PUBLIC_VAPID_KEY="BDjnT0sSxAMsNRvyGeG3UMI4Li4qz1qxh6d6ionUo6H3xtBAAYLiufdW6O72onAJJJgtB5NqJkUO3g9pd8ycz_s"

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }


const subscription = async () => {
    //service worker
    const register = await navigator.serviceWorker.register('/worker.js',{ 
    scope: '/' 
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });

    await fetch("/subscription", {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log('subscribed!')
}


subscription();