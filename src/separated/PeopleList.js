import React from 'react';

class PeopleList extends React.Component {

  render() {
    if (this.props.people === undefined || this.props.people.length === 0) {
      return <p>No people in the list. Add one!</p>
    }
    else {
      return <ol className="person-list">
        {this.props.people.map((person, index) => {
          return <li key={index}>{person.firstName} {person.lastName}</li>
        })}
      </ol>
    }
  }

}

export default PeopleList;
