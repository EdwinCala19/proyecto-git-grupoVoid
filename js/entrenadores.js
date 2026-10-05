

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});




const filters = document.querySelectorAll(".filter");
const trainers = document.querySelectorAll(".trainer-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        trainers.forEach(trainer => {

            if (
                category === "todos" ||
                trainer.dataset.category === category
            ) {

                trainer.classList.remove("hidden");

            } else {

                trainer.classList.add("hidden");

            }

        });

    });

});