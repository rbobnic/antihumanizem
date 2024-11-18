document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});

function toggleContent(id) {
    const abstract = document.getElementById(id);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}

function navigation(id) {
   const navigation = document.getElementById(id);
  }
