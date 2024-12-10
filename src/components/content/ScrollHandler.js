import React, { useState, useEffect } from 'react';
import { SocialIcons } from './SocialIcons'; // Import SocialIcons
import { SpeedDials } from '../speedDial/SpeedDials';

export const ScrollHandler = () => { // Named export
  const [visible, setVisible] = useState(true); // Track visibility of the social icons

  useEffect(() => {
    let lastScrollTop = 0; // Track the last scroll position

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // If scrolling down and not already hidden
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setVisible(false); // Hide social icons and show SpeedDial
      } else {
        setVisible(true); // Show social icons when scrolling up
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Keep track of scroll position
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Pass visibility state to SocialIcons and SpeedDials */}
      <SocialIcons visible={visible} />
      <SpeedDials visible={!visible} />
    </div>
  );
};
