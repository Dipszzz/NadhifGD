document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = loginForm.elements['username'].value;
        const password = loginForm.elements['password'].value;

        // Simpan username dan password ke console
        console.log('Username:', username);
        console.log('Password:', password);

        // Beritahu pengguna bahwa informasi telah disimpan
        message.innerText = 'Informasi tersimpan di console.';
        message.style.color = 'green';
    });
});
