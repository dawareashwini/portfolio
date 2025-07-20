const toggle = document.getElementById('themeToggle');
const body = document.body;

// Check localStorage for theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

// Toggle handler
toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// about me section----------------------------------------
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("about-full");
  const btn = document.querySelector(".read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  }
}
// skills section----------------------

function toggleSkill(el) {
  el.classList.toggle("active");
}
// education section

  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

