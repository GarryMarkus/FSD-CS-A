import React, { useState, useMemo } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Bulbul Singh',
      email: 'bulbulaa@gmail.com',
      designation: 'MEA',
      company: 'ABES',
      address: 'Laalkua'
    },
    {
      id: 2,
      name: 'Aditya Narayan',
      email: 'narayan@example.com',
      designation: 'Photuuuuuugrapher',
      company: 'Picturesque',
      address: 'IIT Laalkuaaaaaa'
    },
  ]);
  const [searchId, setSearchId] = useState('');
  const [newUser, setNewUser] = useState({ name: '', email: '', designation: '', company: '', address: '' });
  const [errors, setErrors] = useState({});

  // 1. Search by ID
  const filteredUsers = useMemo(() => {
    if (!searchId.trim()) return users;
    // We treat search as loose matching (e.g. typing "1" shows 1, 10, etc.) or exact match
    return users.filter(user => user.id.toString().includes(searchId.trim()));
  }, [users, searchId]);

  // 5. Validate User
  const validateUser = () => {
    const newErrors = {};
    if (!newUser.name.trim()) newErrors.name = 'Name is required';

    if (!newUser.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!newUser.designation.trim()) newErrors.designation = 'Designation is required';
    if (!newUser.company.trim()) newErrors.company = 'Company is required';
    if (!newUser.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 2. Add User
  const handleAddUser = (e) => {
    e.preventDefault();
    if (validateUser()) {
      const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
      setUsers([{ id: nextId, ...newUser }, ...users]);
      // Reset form
      setNewUser({ name: '', email: '', designation: '', company: '', address: '' });
      setErrors({});
    }
  };

  // 4. Delete User
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // 3. View User (Rendered via JSX below)
  return (
    <div className="um-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .um-container {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          width: 100%;
          background-color: #f0f4f8; /* Soft light background */
          color: #334155; /* Dark gray text */
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .um-header {
          text-align: center;
          margin-bottom: 2.5rem;
          width: 100%;
        }

        .um-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f172a; /* Dark text for heading */
          margin: 0;
        }

        .um-header p {
          color: #64748b;
          margin-top: 0.5rem;
          font-size: 1.1rem;
        }

        .um-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 2rem;
          width: 100%;
          max-width: 1400px; /* Wider content for full screen feel */
        }

        @media (max-width: 900px) {
          .um-content {
            grid-template-columns: 1fr;
          }
        }

        /* Card Styles */
        .um-card {
          background: #ffffff; /* White card */
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          height: fit-content;
        }

        .um-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 1.5rem;
          color: #0f172a;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.75rem;
        }

        /* Form Controls */
        .um-form-group {
          margin-bottom: 1.25rem;
        }

        .um-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .um-input {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: #0f172a;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .um-input:focus {
          outline: none;
          background: #ffffff;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .um-input-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .um-input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
        }

        .um-error-text {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.35rem;
          display: block;
        }

        .um-btn-primary {
          width: 100%;
          background: #3b82f6; /* Solid blue */
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.2s;
          margin-top: 1rem;
        }

        .um-btn-primary:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .um-btn-primary:active {
          transform: translateY(0);
        }

        /* Search area */
        .um-search-container {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .um-search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
        }

        .um-search-input {
          padding-left: 2.75rem;
          background: #ffffff;
          border-color: #cbd5e1;
        }

        /* Users Grid View */
        .um-users-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .um-user-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        .um-user-card:hover {
          border-color: #93c5fd;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .um-user-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .um-user-info h3 {
          margin: 0 0 0.35rem 0;
          font-size: 1.15rem;
          color: #0f172a;
          font-weight: 600;
        }

        .um-user-id {
          display: inline-block;
          background: #e0f2fe;
          color: #0284c7;
          padding: 0.25rem 0.6rem;
          font-size: 0.75rem;
          border-radius: 999px;
          font-weight: 600;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .um-user-designation {
          color: #64748b;
          font-size: 0.875rem;
        }

        .um-user-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .um-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.4;
        }

        .um-icon {
          color: #94a3b8;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .um-btn-delete {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
          border-radius: 0.375rem;
          padding: 0.375rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .um-btn-delete:hover {
          background: #ef4444;
          color: white;
          border-color: #ef4444;
        }

        /* Empty State */
        .um-empty-state {
          text-align: center;
          padding: 3rem;
          grid-column: 1 / -1;
          color: #64748b;
          background: #ffffff;
          border: 1px dashed #cbd5e1;
          border-radius: 1rem;
        }

        .um-empty-state svg {
          margin-bottom: 1rem;
          color: #94a3b8;
        }
      `}</style>

      <div className="um-header">
        <h1>User Management</h1>
        <p>Manage your team directory</p>
      </div>

      <div className="um-content">
        {/* Left Column: Form Section */}
        <div className="um-card">
          <h2 className="um-card-title">Add New User</h2>
          <form onSubmit={handleAddUser} noValidate>
            <div className="um-form-group">
              <label className="um-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                className={`um-input ${errors.name ? 'um-input-error' : ''}`}
                placeholder="e.g. Jane Doe"
              />
              {errors.name && <span className="um-error-text">{errors.name}</span>}
            </div>

            <div className="um-form-group">
              <label className="um-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className={`um-input ${errors.email ? 'um-input-error' : ''}`}
                placeholder="e.g. jane@example.com"
              />
              {errors.email && <span className="um-error-text">{errors.email}</span>}
            </div>

            <div className="um-form-group">
              <label className="um-label">Designation</label>
              <input
                type="text"
                name="designation"
                value={newUser.designation}
                onChange={handleInputChange}
                className={`um-input ${errors.designation ? 'um-input-error' : ''}`}
                placeholder="e.g. Product Manager"
              />
              {errors.designation && <span className="um-error-text">{errors.designation}</span>}
            </div>

            <div className="um-form-group">
              <label className="um-label">Company</label>
              <input
                type="text"
                name="company"
                value={newUser.company}
                onChange={handleInputChange}
                className={`um-input ${errors.company ? 'um-input-error' : ''}`}
                placeholder="e.g. Acme Corp"
              />
              {errors.company && <span className="um-error-text">{errors.company}</span>}
            </div>

            <div className="um-form-group">
              <label className="um-label">Address</label>
              <input
                type="text"
                name="address"
                value={newUser.address}
                onChange={handleInputChange}
                className={`um-input ${errors.address ? 'um-input-error' : ''}`}
                placeholder="e.g. 456 Tech Street, NY"
              />
              {errors.address && <span className="um-error-text">{errors.address}</span>}
            </div>

            <button type="submit" className="um-btn-primary">
              Add User
            </button>
          </form>
        </div>

        {/* Right Column: Search & Users List */}
        <div>
          <div className="um-search-container">
            <svg className="um-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="um-input um-search-input"
              placeholder="Search users by ID..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
          </div>

          <div className="um-users-grid">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div key={user.id} className="um-user-card">
                  <div className="um-user-header">
                    <div className="um-user-info">
                      <span className="um-user-id">ID: {user.id}</span>
                      <h3>{user.name}</h3>
                      <span className="um-user-designation">{user.designation}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="um-btn-delete"
                      title="Delete User"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="um-user-details">
                    <div className="um-detail-item">
                      <svg className="um-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      {user.email}
                    </div>
                    <div className="um-detail-item">
                      <svg className="um-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      {user.company}
                    </div>
                    <div className="um-detail-item">
                      <svg className="um-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {user.address}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="um-empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3>No users found</h3>
                <p>Try a different search ID, or add a new user from the form.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
