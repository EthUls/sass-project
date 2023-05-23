const menuToggleBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open');
})