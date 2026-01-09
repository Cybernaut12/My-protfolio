import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './PolicyPopup.css';

/**
 * @typedef {Object} PolicyPopupProps
 * @property {boolean} open - Whether popup is open
 * @property {(open: boolean) => void} setOpen - Set open state
 * @property {string} content - Popup content
 * @property {string} title - Popup title
 */

/**
 * @param {PolicyPopupProps} props
 */
function PolicyPopup({ open, setOpen, content, title }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    /** @param {KeyboardEvent} e */
    const handleEscape = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, setOpen]);

  /** @param {string} markdown */
  /** @returns {string} */
  const parseMarkdown = (markdown) => {
    let html = markdown;

    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/^(?!<[h|u|l])(.*)/gm, '<p>$1</p>');

    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>(<h[1-3]>.*<\/h[1-3]>)<\/p>/g, '$1');
    html = html.replace(/<p>(<ul>.*<\/ul>)<\/p>/gs, '$1');

    return html;
  };

  if (!open) return null;

  return (
    <div className="policy-overlay" onClick={() => setOpen(false)}>
      <div className="policy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="policy-header">
          <h2>{title}</h2>
          <button className="policy-close-btn" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="policy-body">
          <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
        </div>
      </div>
    </div>
  );
}

export default PolicyPopup;
