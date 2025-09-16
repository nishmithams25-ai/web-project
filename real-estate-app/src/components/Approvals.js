import React from "react";

export default function Approvals() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text); // Replace with Bootstrap tooltip/toast for smoother UX
  };

  return (
    <section className="mb-4">
      <h3 className="mb-3">Project Approvals</h3>

      {/* RERA Details */}
      <div className="d-flex align-items-start mb-4">
        <div className="me-3 flex-shrink-0">
          {/* Document with text icon */}
          <svg
            role="img"
            aria-label="RERA approval icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-secondary"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="7" y1="8" x2="17" y2="8" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="7" y1="16" x2="13" y2="16" />
          </svg>
        </div>
        <div>
          <div className="fw-bold mb-1">RERA Details</div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="codechip p-2 bg-light border rounded">
              PRM/KA/RERA/1250/303/PR/0...
            </div>
            {/* Copy Button with Bootstrap Icon */}
            <button
              onClick={() => copyToClipboard("PRM/KA/RERA/1250/303/PR/0...")}
              className="btn btn-sm btn-light border"
              title="Copy code"
            >
              <i className="bi bi-clipboard"></i>
            </button>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-primary">
              Check RERA Details ▾
            </a>
          </div>
        </div>
      </div>

      {/* BIAPPA Details */}
      <div className="d-flex align-items-start">
        <div className="me-3 flex-shrink-0">
          {/* Clipboard/approval document icon */}
          <svg
            role="img"
            aria-label="BIAPPA approval icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-secondary"
          >
            <path d="M3 7h18" />
            <path d="M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </div>
        <div>
          <div className="fw-bold mb-1">BIAPPA Details</div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="codechip p-2 bg-light border rounded">
              BIAPPA/TPC/03/2024-25/3...
            </div>
            {/* Copy Button with Bootstrap Icon */}
            <button
              onClick={() => copyToClipboard("BIAPPA/TPC/03/2024-25/3...")}
              className="btn btn-sm btn-light border"
              title="Copy code"
            >
              <i className="bi bi-clipboard"></i>
            </button>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-primary">
              Check BIAPPA Details ▾
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
