// Membuka dan menutup menu pada tampilan HP.
const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

menuButton.addEventListener("click", function () {
    mainNav.classList.toggle("show");

    const menuSedangTerbuka = mainNav.classList.contains("show");
    menuButton.setAttribute("aria-expanded", menuSedangTerbuka);
});

// Menutup menu setelah pengunjung memilih tautan.
mainNav.querySelectorAll("a").forEach(function (tautan) {
    tautan.addEventListener("click", function () {
        mainNav.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Formulir ini hanya menampilkan pesan contoh.
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.querySelector("#nama").value.trim();

    formMessage.textContent =
        "Terima kasih, " + nama + "! Formulir contoh berhasil diisi.";

    formMessage.style.color = "#d5a342";
    contactForm.reset();
});