function setupDropdowns() {
  const dropdownToggles = document.querySelectorAll('.chevron-dropdown');

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const dropdownContent = this.parentElement.nextElementSibling;
      this.classList.toggle('rotated');
      dropdownContent.classList.toggle('hidden');
    });
  });
}

export { setupDropdowns };
