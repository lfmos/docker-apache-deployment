const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");
const navigationLinks = document.querySelectorAll(".nav-links a");
const copyButtons = document.querySelectorAll("[data-copy-target]");
const revealElements = document.querySelectorAll(".reveal");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);

    if (!target) {
      return;
    }

    const originalText = button.textContent;
    const text = target.textContent.trim();

    try {
      await navigator.clipboard.writeText(text);

      button.textContent = "COPIADO";
      button.classList.add("copied");

      window.setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("copied");
      }, 1600);
    } catch (error) {
      console.error("Não foi possível copiar o conteúdo.", error);
      button.textContent = "ERRO";

      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1600);
    }
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
