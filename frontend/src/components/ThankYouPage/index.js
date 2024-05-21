import React, { useState } from "react";

function ThankYouPage() {
  const [showThankYou, setShowThankYou] = useState(false);

  // Function to show "Thank You" message
  function handleThankYou() {
    setShowThankYou(true);
  }

  return (
    <div>
      <button onClick={handleThankYou}>Show Thank You Message</button>
      {showThankYou && <p>Thank you for your donation!</p>}
    </div>
  );
}

export default ThankYouPage;
