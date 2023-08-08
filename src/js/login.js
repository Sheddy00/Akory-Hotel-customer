function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}
  
function showRegisterForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
}
  
showLoginForm(); // Afficher le formulaire de connexion par défaut
