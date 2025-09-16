import React from "react";

export default function Header() {
  return (
    <div className="header">
      {/* Project title + subtitle */}
      <div>
        <div className="title">Siri Vatika</div>
        <div className="subtitle">
          Just off NH 44, close to Devanahalli Business Park
        </div>
      </div>

      {/* Buttons */}
      <div>
        <button className="btn">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.6 13.5l6.8 3.9M15.4 6.6L8.6 10.5" />
          </svg>
          <span>Share</span>
        </button>

        <button className="btn">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="10" r="1" />
            <path d="M12 12v2" />
          </svg>
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}
