const toggleClass = (selector, className) =>
    document.querySelector(selector).classList.toggle(className);

document.addEventListener("click", (event) => {
    const burgerMenuDropdown = document.querySelector(".burger-menu-dropdown");
    const rezepteDropdownBurger = document.querySelector(
        "#rezepte-dropdown-burger"
    );
    const rezepteDropdown = document.querySelector("#rezepte-dropdown");

    if (
        burgerMenuDropdown &&
        !burgerMenuDropdown.contains(event.target) &&
        !event.target.closest(".burger-menu-btn")
    ) {
        burgerMenuDropdown.classList.add("hidden");
    }

    if (
        rezepteDropdownBurger &&
        !rezepteDropdownBurger.contains(event.target) &&
        !event.target.closest('[onclick*="#rezepte-dropdown-burger"]')
    ) {
        rezepteDropdownBurger.classList.add("hidden");
    }

    if (
        rezepteDropdown &&
        !rezepteDropdown.contains(event.target) &&
        !event.target.closest('[onclick*="#rezepte-dropdown"]')
    ) {
        rezepteDropdown.classList.add("hidden");
    }
});
