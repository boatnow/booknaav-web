import { useState } from 'react'
import Modal from './Modal'

export default function SignInModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(form)
    setForm({ email: '', password: '' })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Welcome Back!">
      <p className="modal-subtitle">Sign in to manage your bookings</p>
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="form-field">
          <label htmlFor="user-email" className="form-label">
            Email Address
          </label>
          <input
            id="user-email"
            type="email"
            required
            placeholder="yourname@example.com"
            className="form-input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="user-password" className="form-label">
            Password
          </label>
          <input
            id="user-password"
            type="password"
            required
            placeholder="Enter your password"
            className="form-input"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary form-submit">
          Sign In
        </button>
      </form>
    </Modal>
  )
}

