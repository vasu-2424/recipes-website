

/*sliding bcg*/
// script.js
let currentIndex = 0;

// List of background images
const backgrounds = [
'url("bcg2.avif")',
  'url("b1.webp")',
  'url("b2.jpeg")',
  'url("b3.avif")',
  'url("b4.jpeg")',
  'url("b5.webp")',
  'url("b6.jpeg")',
  'url("b7.jpeg")',
  'url("b8.jpg")',
  'url("b9.jpg")',
  'url("b10.jpg")',
  'url("b11.jpg")',
  // Add more URLs for more backgrounds
];

const sliderContainer = document.querySelector('.slider-container');

// Function to show the background based on index
function showBackground(index) {
  currentIndex = index;

  if (currentIndex >= backgrounds.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = backgrounds.length - 1;
  }

  sliderContainer.style.backgroundImage = backgrounds[currentIndex];
}

// Function to change background when button is clicked
function moveSlide(direction) {
  showBackground(currentIndex + direction);
}

// Auto-change background every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 2000);

// Initial background setup
showBackground(currentIndex);


/*recipes*/
function filterRecipes() {
    const ageGroup = document.getElementById('age').value;
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        if (ageGroup === 'all' || recipe.getAttribute('data-age') === ageGroup) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
}






