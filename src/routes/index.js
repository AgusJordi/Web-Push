const { Router } = require('express');
const router = Router();

const webpush = require('../webpush')
let pushSubscription;

router.post('/subscription', async (req, res) => {
    pushSubscription = req.body;
    res.status(200).json();
    const payload = JSON.stringify({
        title: 'Notificacion',
        message: 'Esta es una notificacion de Node, HOLA!'
    })
    try {
        await webpush.sendNotification(pushSubscription, payload);
    }catch (err){
        console.log(err);
    }
    console.log('Suscribed!');
})








module.exports = router;
