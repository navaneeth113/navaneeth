// Small interactive helpers for the portfolio
document.addEventListener('DOMContentLoaded', function () {
// Smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
link.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) target.scrollIntoView({ behavior: 'smooth' });
});
});


// Fallback if profile image not found
const img = document.getElementById('profilePic');
img.addEventListener('error', () => {
img.src = 'https://via.placeholder.com/180?text=Navaneeth';
});
});