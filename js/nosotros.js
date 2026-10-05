// MENÚ

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// CONTADORES

const counters = document.querySelectorAll("[data-number]");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.number);

        let current = 0;

        const interval = setInterval(() => {

            current += Math.ceil(target / 40);

            if (current >= target) {
                current = target;
                clearInterval(interval);
            }

            element.textContent = current + "+";

        }, 40);

        observer.unobserve(element);
    });

}, {
    threshold: .5
});

counters.forEach(counter => observer.observe(counter));