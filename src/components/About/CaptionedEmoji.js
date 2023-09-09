import React from "react";

function CaptionedEmoji({ emoji, caption }) {
  return (
    <div style={{ display: "block", lineHeight: "35px" }}>
      <em
        style={{ marginRight: "-20px" }}
        data-emoji={emoji}
        className="small"
      />
      <span
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          fontSize: "clamp(12px, .9vw, 1em)",
          marginLeft: "clamp(-100px, 1vw, 20px)",
        }}
      >
        {caption}
      </span>
    </div>
  );
}

export default CaptionedEmoji;
