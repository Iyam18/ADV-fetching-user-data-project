
async function fetchUsers() {
    try {
       
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

       
        displayUsers(users);
    } catch (error) {
      
        console.error('Failed to fetch users:', error);
        const container = document.getElementById('user-container');
        container.textContent = 'An error occurred while fetching user data.';
    }
}

function displayUsers(users) {
    const container = document.getElementById('user-container');
    container.innerHTML = ''; 

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


fetchUsers();