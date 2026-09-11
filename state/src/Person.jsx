import { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const fullName = `${firstName} ${lastName}`;

  function handlefirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handlelastNameChange(e) {
    setlastName(e.target.value);
  }

  return (
    <>
      <div className="input-box">
        <label htmlFor="first-name">First Name</label>
        <input
          value={firstName}
          onChange={handlefirstNameChange}
          type="text"
          name="firstName"
          id="first-name"
        />
      </div>

      <div className="input-box">
        <label htmlFor="last-name">Last Name</label>
        <input
          value={lastName}
          onChange={handlelastNameChange}
          type="text"
          name="lastName"
          id="last-name"
        />
      </div>

      <h1>{fullName}</h1>
    </>
  );
}

export default Person;
