importScripts('https://www.gstatic.com/firebasejs/4.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.0/firebase-messaging.js');

firebase.initializeApp({
	'messagingSenderId': "350271608143"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	console.log('Received background message ', payload);

	return self.registration.showNotification({},{});
})