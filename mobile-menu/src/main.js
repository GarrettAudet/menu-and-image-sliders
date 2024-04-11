import { manipulateDOM, setupCarousel } from './dom-manipulation.js';

let cleanupCarousel; // To hold the cleanup function

document.addEventListener('DOMContentLoaded', () => {
  manipulateDOM();
  // Clean up the previous carousel if needed
  if (cleanupCarousel) cleanupCarousel();

  // Set up the new carousel
  cleanupCarousel = setupCarousel();
});
