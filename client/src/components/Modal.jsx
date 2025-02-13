import React from 'react';

function Modal({ isOpen, onClose, children, onNext, onPrev }) {
  if (!isOpen) return null;

  const handleArrowClick = (e, handler) => {
    e.stopPropagation();  // Prevent modal from closing
    handler();  // Call the navigation handler
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button 
        className="modal-arrow modal-prev" 
        onClick={(e) => handleArrowClick(e, onPrev)}
      >
        ←
      </button>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
      <button 
        className="modal-arrow modal-next" 
        onClick={(e) => handleArrowClick(e, onNext)}
      >
        →
      </button>
    </div>
  );
}

export default Modal;