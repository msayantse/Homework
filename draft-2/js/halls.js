export const sizes = () => {
  const hallsList = document.querySelector('[data-halls="list"]');
  const hallsButtons = document.querySelectorAll('[data-halls="button"]');

  const handleSizeClick = (event) => {
    const target = event.target;

    if (!target?.classList.contains("halls-selection-button")) return;

    hallsButtons.forEach((button) =>
      button.classList.remove("halls-selection-button--active"),
    );
    target.classList.add("halls-selection-button--active");
  };

  hallsList.addEventListener("click", handleSizeClick);
};
