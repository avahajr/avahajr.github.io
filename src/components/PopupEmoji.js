import React from "react";
import "fomantic-ui-css/semantic.min.css";

function PopupEmoji({ emojiName, popupContent, position }) {
  return (
    <span data-tooltip={popupContent} data-position={position}>
      <em data-emoji={emojiName} className="small" />
    </span>
  );
}

export default PopupEmoji;
