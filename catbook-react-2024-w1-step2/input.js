// TODO 2.1: Create input event listeners for controlling the snake
// Hint: Create a "keydown" event listener
// (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
// 
// Hint: Take a look at the object returned from the event to figure out which
// key has been pressed
// (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
// List of key values:
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values

let inputDirection = {x: 0, y: 1};

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && inputDirection.x !== 0) {
        inputDirection = {x: 0, y: -1};
    } else if (event.key === 'ArrowDown' && inputDirection.x !== 0) {
        inputDirection = {x: 0, y: 1};
    } else if (event.key === 'ArrowLeft' && inputDirection.y !==0) {
        inputDirection = {x: -1, y: 0};
    } else if (event.key === 'ArrowRight' && inputDirection.y !==0) {
        inputDirection = {x: 1, y: 0};
    }
});

const getInputDirection = () =>{
    return inputDirection;
};

