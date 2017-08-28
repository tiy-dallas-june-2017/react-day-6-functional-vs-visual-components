import React from 'react';

import PeopleListDisplay from './PeopleListDisplay';

class SeparatedForm extends React.Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      people: [],
      errors: []
    };
  }

  handleFirstNameChange = (evt) => {
    this.setState({
      firstName: evt.target.value
    });
  }

  handleLastNameChange = (evt) => {
    this.setState({
      lastName: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const errors = [];
    if (this.state.firstName === '') {
      errors.push('A first name must be supplied.');
    }
    if (this.state.lastName === '') {
      errors.push('A last name must be supplied.');
    }

    if (errors.length === 0) {
      const people = this.state.people.slice();
      people.push({ firstName: this.state.firstName, lastName: this.state.lastName });
      this.setState({
        firstName: '',
        lastName: '',
        people: people,
        errors: errors
      });
    }
    else {
      this.setState({
        errors: errors
      })
    }

  }

  render() {

    return (
      <PeopleListDisplay
        formSubmit={this.handleSubmit}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}

        firstName={this.state.firstName}
        lastName={this.state.lastName}
        errors={this.state.errors}
        people={this.state.people}
        />
    );

  }

}

export default SeparatedForm;
