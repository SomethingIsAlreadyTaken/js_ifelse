(function(){
	'use strict';

	let login, password; 

	login = prompt('Enter your login');

	if (login == 'Админ') {

		password = prompt('Enter your password');

		if (password == 'Чёрный Властелин') {
		alert('Добро пожаловать!') 
		} else if (password === null) {
		alert('Вход отменён');
		} else {
		alert('Пароль неверен');
		}

	} else if (login === null) {
		alert('Вход отменён');
	} else {
		alert('Я вас не знаю');
	}

})();