document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger__menu");
  const body = document.body;

  // Проверяем существование элементов, чтобы избежать ошибок
  if (burgerBtn && burgerMenu) {
    burgerBtn.addEventListener("click", () => {
      // Переключаем класс открытого меню
      burgerMenu.classList.toggle("active");

      // Блокируем скролл основного сайта при открытом меню
      body.classList.toggle("no-scroll");
    });

    // Дополнительно: закрывать меню при клике на любую ссылку внутри
    const menuLinks = burgerMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        body.classList.remove("no-scroll");
      });
    });
  }
});
