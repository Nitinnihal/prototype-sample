let currentIndex = 1; // Start at 1 to show the first item properly
const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".testimonial-item");
const totalItems = items.length;

// Clone first and last items for circular effect
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);

track.appendChild(firstClone); // Append the clone of the first item at the end
track.insertBefore(lastClone, items[0]); // Insert the clone of the last item at the beginning

const newTotalItems = totalItems + 2; // Update total items count due to clones

function moveCarousel(direction) {
  const itemWidth = items[0].offsetWidth; // Width of each item
  currentIndex += direction;

  // Check for circular motion
  if (currentIndex === 0) {
    track.style.transition = "none"; // Disable transition to jump instantly
    currentIndex = newTotalItems - 2; // Jump to the last clone
    track.style.transform = `translateX(-${
      (currentIndex - 1) * (itemWidth + 20)
    }px)`;
  } else if (currentIndex === newTotalItems - 1) {
    track.style.transition = "none"; // Disable transition to jump instantly
    currentIndex = 1; // Jump to the first item
    track.style.transform = `translateX(-${
      (currentIndex - 1) * (itemWidth + 20)
    }px)`;
  }

  track.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
  track.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
}

// Initialize the carousel to show the first set of items
moveCarousel(0);
