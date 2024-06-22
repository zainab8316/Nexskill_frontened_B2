const inputButton = document.getElementById('inputButton');
const userInputContainer = document.getElementById('userInputContainer');

inputButton.addEventListener('click', function() {
    userInputContainer.innerHTML = ''; // Clear previous inputs

    for (let i = 0; i < 3; i++) {
        const userInput = prompt(`Enter input ${i + 1}:`);
        if (userInput !== null) {
            const userInputParagraph = document.createElement('p');
            userInputParagraph.textContent = `Input ${i + 1}: ${userInput}`;
            userInputContainer.appendChild(userInputParagraph);
        } else {
            break; // Exit loop if user cancels prompt
        }
    }
});