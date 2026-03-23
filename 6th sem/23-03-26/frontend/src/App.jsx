import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      alert(`Response: ${data.message}`);
    } catch (error) {
      alert('Error connecting to backend');
      console.error('Error:', error);
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Page</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
        />
        <br />
        <button
          onClick={handleLogin}
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default App