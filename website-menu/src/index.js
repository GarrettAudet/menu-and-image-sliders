function addClickEventToChevron() {
  const chevron = document.querySelector('.fa-chevron-down');
  chevron.addEventListener('click', () => {
    chevron.classList.toggle('rotated');
    console.log('test');
  });
}

// Add DOMContentLoaded event listener to call manipulateDOM
document.addEventListener('DOMContentLoaded', addClickEventToChevron);
