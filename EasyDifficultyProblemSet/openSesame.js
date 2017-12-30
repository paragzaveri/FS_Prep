

function openSesame(passwords, passwordStr){
	for (var i = 0; i < passwords.length; i++){
		if (passwordStr === passwords[i]){
			return 'You may pass.';
		}
	}
	return 'You shall not pass!';
}




