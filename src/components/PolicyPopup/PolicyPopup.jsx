import ReactMarkdown from "react-markdown";
import "./PolicyPopup.css";

export default function PolicyPopup({ open, setOpen, content }) {
  if (!open) return null;

  return (
    <div className="policy-popup-overlay">
      <div className="policy-popup-container">
        <div className="markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <button
          className="policy-popup-close-btn"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
