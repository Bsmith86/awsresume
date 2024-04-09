// apiRequest.js

// Replace this URL with your API Gateway endpoint
const apiUrl = 'https://wj7z0n145l.execute-api.us-east-1.amazonaws.com';

// Function to make a GET request to the API Gateway endpoint
function makeApiRequest() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data);
            // You can perform further actions with the API response here
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
