async function getUserData(id, url) {
  try {
    const response = await fetch(`${url}${id}`);
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}

async function saveUserData(user, url) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    });

    if (response.status !== 200) {
      return Promise.reject(new Error(`Failed to save user data. Status: ${response.status}`));
    }

    return Promise.resolve('User data saved successfully');
  } catch (error) {
    return Promise.reject(new Error(`Failed to save user data: ${error.message}`));
  }
}

getUserData(1)
  .then(data => console.log('User Data:', data))
  .catch(error => console.log('Error:', error.message));

const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com'
};

saveUserData(user)
  .then((message) => {
    console.log(message);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });