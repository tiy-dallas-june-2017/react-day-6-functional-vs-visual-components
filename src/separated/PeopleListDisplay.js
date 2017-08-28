import React from 'react';

import ErrorList from './ErrorList';
import PeopleList from './PeopleList';

class PeopleListDisplay extends React.Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.formSubmit}>

          <input placeholder="first name" onChange={this.props.handleFirstNameChange} value={this.props.firstName} />
          <input placeholder="last name" onChange={this.props.handleLastNameChange} value={this.props.lastName} />
          <button type="submit">Add</button>

          <ErrorList errors={this.props.errors} />

        </form>

        <PeopleList people={this.props.people} />

      </div>
    );
  }
}

export default PeopleListDisplay;
