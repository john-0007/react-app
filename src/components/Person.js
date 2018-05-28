import React from 'react';

const Person = ({
  name, age, children, change
}) => (
  <div className="person">
    <p>I'm {name} and I'm {age} years old.</p>
    <p>{children}</p>
    <input type="text" onChange={change} value={name} />
  </div>
);

export default Person;
