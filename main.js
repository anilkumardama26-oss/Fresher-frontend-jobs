<script>
  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Smooth scroll & active nav
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (pageYOffset >= top) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Hero text slider
  const slides = document.querySelectorAll(".hero-slide");
  let slideIndex = 0;
  setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 2500);

  // Animate skill bars when visible
  const skillFills = document.querySelectorAll(".skill-fill");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.4 }
  );
  skillFills.forEach(bar => observer.observe(bar));
</script>
