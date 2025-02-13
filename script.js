const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
            navigation.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
}
