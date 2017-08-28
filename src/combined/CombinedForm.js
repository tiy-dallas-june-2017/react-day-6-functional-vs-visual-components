import React from 'react';

class CombinedForm extends React.Component {

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

    let peopleList = null;
    if (this.state.people.length > 0) {
      peopleList = <ol className="person-list">
        {this.state.people.map((person, index) => {
          return <li key={index}>{person.firstName} {person.lastName}</li>
        })}
      </ol>
    }
    else {
      peopleList = <p>No people in the list. Add one!</p>
    }

    let errorList = null;
    if (this.state.errors.length !== 0) {
      errorList = <ul className="error-list">
        {this.state.errors.map((error, index) => <li key={index}>{error}</li>)}
      </ul>
    }

    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>

          <input placeholder="first name" onChange={this.handleFirstNameChange} value={this.state.firstName} />
          <input placeholder="last name" onChange={this.handleLastNameChange} value={this.state.lastName} />
          <button type="submit">Add</button>

          {errorList}

        </form>

        {peopleList}

      </div>
    );
  }

}

export default CombinedForm;
