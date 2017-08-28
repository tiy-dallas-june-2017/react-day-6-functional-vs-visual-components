import React from 'react';
import './Gallery.css';

import ErrorList from './separated/ErrorList';
import PeopleList from './separated/PeopleList';
import PeopleListDisplay from './separated/PeopleListDisplay';

class Gallery extends React.Component {

  render() {
    return (
      <div className="gallery">

        <h2>Gallery</h2>

        <p>This is the gallery version of the same form. This is built to give you an example of how it can be useful to break large components into multiple components and separate visual from functional components.</p>

        <section>
          <h3>Error List</h3>

          <p>These are samples of styling the error list.</p>

          <p className="example-description">No Error (You shouldn't see anything)</p>

          <ErrorList />

          <p className="example-description">One Error</p>

          <ErrorList errors={['You must include a first name.']} />

          <p className="example-description">Two Errors</p>

          <ErrorList errors={['First error.', 'Second error.']} />
        </section>

        <section>
          <h3>People List</h3>

          <p>These are samples of styling the people list.</p>

          <p className="example-description">No people in the list.</p>

          <PeopleList />

          <p className="example-description">One person in the list.</p>

          <PeopleList people={[
            { firstName: 'Barbara', lastName: 'Smith' }
          ]} />

          <p className="example-description">Two people in the list.</p>

          <PeopleList people={[
            { firstName: 'Barbara', lastName: 'Smith' },
            { firstName: 'Frank', lastName: 'Robertson' },
          ]} />


        </section>

        <section>
          <h3>People List Display</h3>

          <p>This component combines the form, the people list, and the error list into one component.</p>

          <p className="example-description">Default state.</p>

          <PeopleListDisplay />

          <p className="example-description">With error, people, and partially filled-out form.</p>

          <PeopleListDisplay
            errors={['The last name is required.']}
            people={[
              { firstName: 'Barbara', lastName: 'Smith' },
              { firstName: 'Frank', lastName: 'Robertson' },
            ]}
            firstName="James"
            />

          <p className="example-description">With error, 10 people, and partially filled-out form.</p>

            <PeopleListDisplay
              people={[
                { firstName: 'Barbara', lastName: 'Smith' },
                { firstName: 'Frank', lastName: 'Robertson' },
                { firstName: 'Barbara', lastName: 'Smith' },
                { firstName: 'Frank', lastName: 'Robertson' },
                { firstName: 'Barbara', lastName: 'Smith' },
                { firstName: 'Frank', lastName: 'Robertson' },
                { firstName: 'Barbara', lastName: 'Smith' },
                { firstName: 'Frank', lastName: 'Robertson' },
                { firstName: 'Barbara', lastName: 'Smith' },
                { firstName: 'Frank', lastName: 'Robertson' },
              ]}
              />


        </section>

      </div>
    );
  }

}

export default Gallery;
