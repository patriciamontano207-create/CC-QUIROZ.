// ===== SESIÓN SIMULADA (solo para el proyecto, no es seguridad real) =====
const CLAVE = "sesionQuiroz";
const haIniciado = localStorage.getItem(CLAVE);

// 1. Login: guardar la sesión y pasar a matrícula
const formLogin = document.getElementById("form-login");

if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    localStorage.setItem(CLAVE, "1");
    window.location.href = "matricula.html";
  });
}

// 2. Si ya inició sesión, ocultar los avisos
if (haIniciado) {
  document.querySelectorAll(".aviso").forEach(function (aviso) {
    aviso.hidden = true;
  });
}

// 3. Si ya inició sesión, el menú muestra "Cerrar sesión"
const enlaceSesion = document.getElementById("enlace-sesion");

if (enlaceSesion && haIniciado) {
  enlaceSesion.textContent = "Cerrar sesión";
  enlaceSesion.addEventListener("click", function () {
    localStorage.removeItem(CLAVE);
  });
}