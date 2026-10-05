

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


const planSelect = document.getElementById("plan");

const planGuardado = localStorage.getItem("planSeleccionado");

if (planGuardado) {

    planSelect.value = planGuardado;

    localStorage.removeItem("planSeleccionado");

}


const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const edad =
        document.getElementById("edad").value;

    const plan =
        document.getElementById("plan").value;

    const terminos =
        document.getElementById("terminos").checked;



    document.getElementById("nombreError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("telefonoError").textContent = "";
    document.getElementById("planError").textContent = "";
    document.getElementById("terminosError").textContent = "";


    let valido = true;


    if (nombre.length < 3) {

        document.getElementById("nombreError").textContent =
            "Ingresa un nombre válido.";

        valido = false;

    }


    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        document.getElementById("emailError").textContent =
            "Ingresa un correo válido.";

        valido = false;

    }

    if (telefono.length < 7) {

        document.getElementById("telefonoError").textContent =
            "Ingresa un número válido.";

        valido = false;

    }


    // PLAN

    if (plan === "") {

        document.getElementById("planError").textContent =
            "Selecciona un plan.";

        valido = false;

    }


    if (!terminos) {

        document.getElementById("terminosError").textContent =
            "Debes aceptar los términos.";

        valido = false;

    }


    const message =
        document.getElementById("formMessage");


    if (!valido) {

        message.className = "";
        message.textContent =
            "Por favor, revisa los campos marcados.";

        return;

    }


    message.className = "success";

    message.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <strong> ¡Inscripción enviada!</strong>
        <br>
        Gracias ${nombre}. Nos pondremos en contacto contigo
        para confirmar tu inscripción al plan ${plan}.
    `;


    form.reset();

});