function addClickEventToChevron() {
  const dropdownToggles = document.querySelectorAll('.fa-chevron-down');

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const dropdownContent = this.parentElement.nextElementSibling;
      this.classList.toggle('rotated');
      dropdownContent.classList.toggle('hidden');
    });
  });
}

document.addEventListener('DOMContentLoaded', addClickEventToChevron);
