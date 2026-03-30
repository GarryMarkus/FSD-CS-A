document.querySelector('#loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value;
  const messageEl = document.querySelector('#message');

  messageEl.textContent = 'Logging in...';
  messageEl.classList.remove('success');

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      messageEl.textContent = result.message;
      messageEl.classList.add('success');
      setTimeout(() => {
        messageEl.textContent = '';
      }, 3000);
    } else {
      messageEl.textContent = result.error || 'Login failed';
    }
  } catch (error) {
    messageEl.textContent = 'Cannot connect to backend';
    console.error(error);
  }
});
