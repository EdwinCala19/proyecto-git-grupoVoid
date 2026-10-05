const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});




const buttons = document.querySelectorAll(".choose-plan");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const plan = button.dataset.plan;

        localStorage.setItem("planSeleccionado", plan);

        window.location.href = "inscripcion.html";

    });

});