// TODO 3.1: Create the food
let food = {
  x: 4,
  y: 16,
};


// TODO 3.2: Create a function to update the food
const updateFood = () => {
  if (onSnake(food)) {
    growSnake();
    food = getNewFoodPosition();
  }
};


// Don't change me!
const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
};
