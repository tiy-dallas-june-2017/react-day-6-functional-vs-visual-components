import React from 'react';

class ErrorList extends React.Component {

  render() {
    if (this.props.errors === undefined || this.props.errors.length === 0) {
      return null;
    }
    else {
      return (
        <ul className="error-list">
          {this.props.errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
      );
    }
  }

}

export default ErrorList;
