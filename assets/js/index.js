document.getElementById('botonRegistrarte').addEventListener('click', () => {
	const nombre = document.getElementById('nombre').value;
	const apellidos = document.getElementById('apellidos').value;
	const dni = document.getElementById('dni').value;

	//errores
	const errorNombres = document.getElementById('error-nombres');
	const errorDni = document.getElementById('error-dni');

	if (!nombre.trim()) {
		errorNombres.style.display = 'block';
	} else {
		errorNombres.style.display = 'none';
	}

	dniValido = false;

	if (!dni) {
		errorDni.style.display = 'block';
		errorDni.textContent = 'Ingrese su DNI';
	} else if (dni.length !== 8) {
		errorDni.textContent = 'El dni debe tener 8 digitos';
		errorDni.style.display = 'block';
	} else {
		errorDni.style.display = 'none';
		errorDni.textContent = '';
		dniValido = true;
	}

	if (nombre && apellidos && dniValido) {
		console.log('*****REGISTRO DEL USUARIO******');
		console.log('Nombres: ', nombre, '\nApellidos: ', apellidos, '\nDNI: ', dni);
		console.log('*******************************');
	}
});
