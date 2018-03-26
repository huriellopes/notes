console.log('[Application] Start push listening');

const messaging = firebase.messaging();

messaging.requestPermission().then(function() {
	console.log('Permission granted');

	return messaging.getToken().then(function(currentToken) {
		if (currentToken) {
			console.log(currentToken);
			return currentToken;
		}else{
			console.warn('Nenhum id disponínel, Solicite permissão para gerar um!');
		}
	});
});

messaging.getToken().then(function(currentToken) {
		if (currentToken) {
			console.log(currentToken);
			return currentToken;
		}else{
			console.warn('Nenhum id disponínel, Solicite permissão para gerar um!');
		}
	}).catch(function(err) {
		console.warn('get Token err', err);
	});