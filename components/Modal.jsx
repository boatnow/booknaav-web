export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-center" onClick={(e) => e.stopPropagation()}>
        <div className="modal-card">
          <div className="modal-header">
            {title && <h3 className="modal-title">{title}</h3>}
            <button
              aria-label="Close modal"
              className="modal-close"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

