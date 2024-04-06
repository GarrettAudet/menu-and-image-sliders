// Function to adjust the position of the dropdown
function positionDropdown() {
  // Get the .website-dropdown-menu element
  const dropdownTrigger = document.querySelector('.website-dropdown-menu');

  // Calculate its height
  const triggerHeight = dropdownTrigger.offsetHeight; // height including padding and border

  // Get the .dropdown element
  const dropdownContent = document.querySelector('.dropdown');

  // Set the top position of the dropdown to be just below the .website-dropdown-menu
  dropdownContent.style.top = `${triggerHeight}px`;
}

// Event listener for when the window is resized or if the layout changes
window.addEventListener('resize', positionDropdown);

// Event listener for when the dropdown is supposed to be shown
document.querySelector('.fa-chevron-down').addEventListener('click', () => {
  const dropdownContent = document.querySelector('.dropdown');
  // Toggle dropdown visibility
  dropdownContent.style.display =
    dropdownContent.style.display === 'block' ? 'none' : 'block';
  // Position dropdown
  positionDropdown();
});
