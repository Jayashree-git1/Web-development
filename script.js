function adoptAnimal(animal) {
    var animalCard = document.querySelector(`[data-animal="${animal}"]`);
    animalCard.classList.add("adopted");
    animalCard.querySelector("button").disabled = true;
  }
  function adoptAnimal(animal) {
    // Implementation for animal adoption goes here
    console.log("Adopting " + animal);
    // You can perform further actions like making API calls or updating the UI based on the adoption.
  }
    // Get all animal cards
const animalCards = document.querySelectorAll('.animal-card');

// Attach click event listener to each animal card
animalCards.forEach((card) => {
  card.addEventListener('click', () => {
    // Toggle the active class on the clicked card
    card.classList.toggle('active');
  });
});
