const webpush = require('web-push');
const PUBIC_VAPID_KEY = "BDjnT0sSxAMsNRvyGeG3UMI4Li4qz1qxh6d6ionUo6H3xtBAAYLiufdW6O72onAJJJgtB5NqJkUO3g9pd8ycz_s";
const PRIVATE_VAPID_KEY = "Q_nifHwjvVvFGeBqASzghH4retUBvDFNDTqYJOOTr3s";



webpush.setVapidDetails('mailto:agusrojasrp@gmail.com', 
PUBIC_VAPID_KEY, 
PRIVATE_VAPID_KEY);

module.exports = webpush;