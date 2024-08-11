document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('inputText').value;
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: inputText })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.output);
    
        // Create a new div to hold the question and answer
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        
        // Create and append the question
        const questionElement = document.createElement('p');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<strong>You:</strong> ${inputText}`;
        historyItem.appendChild(questionElement);
    
        // Create and append the answer
        const answerElement = document.createElement('p');
        answerElement.classList.add('answer');
        answerElement.innerHTML = `<strong>SellerBot:</strong> ${data.output.replace(/\n/g, '<br>')}`;
        historyItem.appendChild(answerElement);
    
        // Append the history item to the history container
        document.getElementById('history').appendChild(historyItem);
    
        // Clear the input field
        document.getElementById('inputText').value = '';
    });
    
});

// formHandler.js
function clearForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = document.querySelector('.contact-form');
    
    // Clear all input fields
    form.querySelector('input[name="name"]').value = '';
    form.querySelector('input[name="email"]').value = '';
    form.querySelector('textarea[name="message"]').value = '';

    alert('Your message has been sent!');
}

