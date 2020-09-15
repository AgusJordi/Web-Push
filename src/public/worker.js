

self.addEventListener('push', e => {
    const data = e.data.json()
    self.registration.showNotification(data.tittle, { 
        body: data.message,
        icon: "https://image.flaticon.com/icons/png/512/919/919825.png"
    })
})