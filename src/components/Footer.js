

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      position: 'absolute',  // Use 'fixed' for bottom of the screen, 'absolute' for sidebar container
      bottom: "1rem",          // Adjust as needed for bottom positioning
      left: 0,            // Adjust as needed for sidebar container positioning
      width: '200px',
      padding: '0 1rem 0 3rem',
      // Adjust background color as needed backgroundColor: '#f0f0f0',
      // textAlign: 'center',
      fontSize: '1.2rem',
    }}>
      <p>&copy; Gustavo Chitangua. All rights reserved - {currentYear}.</p>
    </footer>
  );
};

export default Footer;


// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//   return (
//     <footer style={{ marginTop: '12rem', fontSize:"1.2rem"}}>
//       <p>&copy; Gustavo Chitangua. All rights reserved - {currentYear}.</p>
//     </footer>
//   );
// };

// export default Footer;
