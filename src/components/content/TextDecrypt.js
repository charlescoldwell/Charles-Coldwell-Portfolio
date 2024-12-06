import React, { useState, useEffect } from "react";

const TextDecrypt = ({ text }) => {
  const [result, setResult] = useState(""); // State to hold the decrypted text
  const chars = "-./*!?%&@$€()[]{}<>~0123456789abcdefghijklmnopqrstuvwxyz"; // Character set for scrambling

  useEffect(() => {
    if (!text) return; // Avoid running if text is empty

    let index = 0; // Index for traversing the text
    const totalLength = text.length; // Length of the provided text

    // Function to update the text with random characters
    const interval = setInterval(() => {
      setResult((prev) => {
        const randomChar = chars[Math.floor(Math.random() * chars.length)]; // Random character
        const newText = prev + randomChar; // Add the random character to the result
        return newText;
      });

      // Once the random characters fill the text, stop and set the final text
      if (index === totalLength) {
        clearInterval(interval); // Stop the interval once the text is fully displayed
        setResult(text); // Set the final text after scrambling
      } else {
        index++;
      }
    }, 50); // Update every 50ms

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [text]); // Re-run effect if the text prop changes

  return <p>{result}</p>; // Display the result
};

export default TextDecrypt;
