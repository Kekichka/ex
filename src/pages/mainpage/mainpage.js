import React, { useState } from 'react';
import './mainpage.css';

const MainPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="mainpage-container">
      {showPopup && (
        <div className="hello-window">
          Welcome to the Malice Mizer page!<br/> <br/> Here you can get to know more about this beautiful band!
          <button className="start-button" onClick={closePopup}>
            Let's Start
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
