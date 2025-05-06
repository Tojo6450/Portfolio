import React from 'react';
import '../styles/MyComponent.css';

const MyComponent = ({ theme }) => {
  const imageClass = theme === 'light' ? 'styled-image-day' : 'styled-image';

  return (
    <div className="image-container">
      <img src="mypic.png" alt="Profile" className={imageClass} />
    </div>
  );
};

export default MyComponent;
