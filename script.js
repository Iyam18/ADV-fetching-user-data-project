// Fetches an array of user objects from a public API
// then hands the data off to the DOM rendering function.
async function fetchUsers() {
    try {
        // perform the network request
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // check for HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // parse the JSON payload
        const users = await response.json();

        // update the page with the retrieved data
        displayUsers(users);
    } catch (error) {
        // log the failure and show a user-friendly message
        console.error('Failed to fetch users:', error);
        const container = document.getElementById('user-container');
        container.textContent = 'An error occurred while fetching user data.';
    }
}

// Takes an array of user objects and injects markup into the page
// so each user's name, email and city are visible.
function displayUsers(users) {
    const container = document.getElementById('user-container');
    container.innerHTML = ''; // clear any previous content

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
        `;
        container.appendChild(userDiv);
    });
}

// kick off the network request when the script loads
fetchUsers();
