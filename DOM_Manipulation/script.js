// Select the container which contains the button, including the quantity by creating a variable.
const headlineContainer = document.querySelector('.c-product-main__actions');
console.log(headlineContainer)

// Select the container that contains the headline where we want to place the buttons beneath.

//I followed the same step as before, but this time I will use the "Insert before method to place the button beneath the headline. (Note, "insertAfter()"" mentod is not supported.)
const paragraphContainer = document.querySelector('.c-product-main__info');
console.log(paragraphContainer)

//This line of code tells the DOM to insert the headlineContainer before it's child element that is at index position 2 (0,1,2)
paragraphContainer.insertBefore(headlineContainer, paragraphContainer.children[2])

//Changes the button color. The button didn't have an ID to use for the "get ElementById method, so I needed to use the querySelector with the setAttribute method to add one in."

const button = document.querySelector('.c-product-add-bag');

button.setAttribute('id', 'button');

//Changes the button color.
const color = document.getElementById('button').style.backgroundColor = "#2ab599";
