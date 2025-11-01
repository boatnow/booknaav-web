import { useState } from 'react'
import Modal from './Modal'

export default function PartnerModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ businessName: '', email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(form)
    setForm({ businessName: '', email: '', password: '' })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Partner with BookNaav">
      <p className="modal-subtitle">Join our network and grow your business</p>
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="form-field">
          <label htmlFor="merchant-business" className="form-label">
            Business Name
          </label>
          <input
            id="merchant-business"
            type="text"
            required
            placeholder="Your Company Name"
            className="form-input"
            value={form.businessName}
            onChange={(e) => setForm({ ...form, businessName: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="merchant-email" className="form-label">
            Business Email
          </label>
          <input
            id="merchant-email"
            type="email"
            required
            placeholder="business@company.com"
            className="form-input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="merchant-password" className="form-label">
            Password
          </label>
          <input
            id="merchant-password"
            type="password"
            required
            placeholder="Create a password"
            className="form-input"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary form-submit">
          Submit Application
        </button>
      </form>
    </Modal>
  )
}

