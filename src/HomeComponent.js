import React from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {

  render() {
    return (
      <div className="home">
        <h2><Link to="/combined">Combined</Link></h2>
        <p>The combined component combines all functional and visual aspects of the app together.</p>

        <h2><Link to="/separated">Separated</Link></h2>
        <p>The separated component separates the functional from the visual aspects of the app.</p>

        <h3><Link to="/gallery">Gallery</Link></h3>
        <p>Taking advantage of the separated visual components, I created a gallery to show how you can host the purely visual components outside of their functional counterparts, in this case for the purpose of styling.</p>
      </div>
    );
  }

}

export default HomeComponent;
