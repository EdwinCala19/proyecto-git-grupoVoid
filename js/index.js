
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 800);

});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 80;

            const update = () => {

                current += increment;

                if (current < target) {
                    counter.textContent = Math.ceil(current) + "+";
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target + "+";
                }

            };

            update();

            observer.unobserve(counter);
        }

    });

});

counters.forEach(counter => observer.observe(counter));