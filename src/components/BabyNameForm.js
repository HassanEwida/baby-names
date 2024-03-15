import React, { useState } from 'react';

const BabyNameForm = ({ initialValues, onSubmit }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [gender, setGender] = useState(initialValues.gender || '');
  const [origin, setOrigin] = useState(initialValues.origin || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, gender, origin });
    setName('');
    setGender('');
    setOrigin('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BabyNameForm;