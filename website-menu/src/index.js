function addClickEventToChevron() {
  const chevron = document.querySelector('.fa-chevron-down');
  const dropdownContent = document.querySelector('.dropdown-content');
  chevron.addEventListener('click', () => {
    chevron.classList.toggle('rotated');
    dropdownContent.classList.toggle('hidden');
  });
}

// Add DOMContentLoaded event listener to call manipulateDOM
document.addEventListener('DOMContentLoaded', addClickEventToChevron);
