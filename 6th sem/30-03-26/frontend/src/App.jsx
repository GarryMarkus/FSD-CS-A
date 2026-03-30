import { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('login'); // login or signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const clearMessages = () => {
    setMessage('');
    setStatus('');
  };

  const login = async (ev) => {
    ev.preventDefault();
    setMessage('Logging in...');
    setStatus('pending');

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const payload = await res.json();
      if (!res.ok) {
        setMessage(payload.error || 'Login failed');
        setStatus('error');
        return;
      }

      setMessage(payload.message);
      setStatus('success');
    } catch (err) {
      setMessage('Unable to connect to backend');
      setStatus('error');
      console.error(err);
    }
  };

  const signup = async (ev) => {
    ev.preventDefault();
    setMessage('Creating account...');
    setStatus('pending');

    try {
      const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile, email, password })
      });

      const payload = await res.json();
      if (!res.ok) {
        setMessage(payload.error || 'Signup failed');
        setStatus('error');
        return;
      }

      setMessage(payload.message);
      setStatus('success');
      setName('');
      setMobile('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setMessage('Unable to connect to backend');
      setStatus('error');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={() => { setMode('login'); clearMessages(); }}
          style={{ flex: 1, marginRight: '0.5rem', background: mode === 'login' ? '#0056b3' : '#ccc', color: '#fff' }}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => { setMode('signup'); clearMessages(); }}
          style={{ flex: 1, marginLeft: '0.5rem', background: mode === 'signup' ? '#0056b3' : '#ccc', color: '#fff' }}
        >
          Signup
        </button>
      </div>

      {mode === 'login' ? (
        <>
          <h2>Login</h2>
          <form onSubmit={login}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <h2>Signup</h2>
          <form onSubmit={signup}>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Mobile Number</label>
            <input value={mobile} onChange={(e) => setMobile(e.target.value)} required />

            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Signup</button>
          </form>
        </>
      )}

      <p className={status}>{message}</p>
    </div>
  );
}
