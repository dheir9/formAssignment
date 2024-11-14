import React, { useState } from 'react';

function FormComponent() {
  // Initial state object to store form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    recomendUs:'',
    gender: '',
    favoriteCar: '',
    comments: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle change for each input type
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>{}

        {/* text */}
        <label><strong>Name:</strong>
          <input type="text" name="name" value={formData.name}
            onChange={handleChange}/></label>
        <br />

        {/* Number */}
        {}
        <label><strong>Age:</strong>
          <input type="number" name="age" value={formData.age} 
          onChange={handleChange}/></label>
        <br />

        {/* Checkbox */}
        <label><strong>Recomend Us:</strong>
          <input type="checkbox" name="recomendUs" checked={formData.recomendUs}
            onChange={handleChange}/></label>

        <br />

        {/* Radio Btn */}
        <fieldset>
          <legend><strong>Gender:</strong></legend>

          <label>
            <input type="radio" name="gender" value="male" 
            checked={formData.gender === 'male'}onChange={handleChange}
            />Male</label>
            <br/>
            <label>
            <input type="radio" name="gender" value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />Female</label>
        </fieldset>

        <br />

        {/* Select */}
        <label><strong>Favorite Car:</strong>
          <select name="favoriteCar" value={formData.favoriteCar}
            onChange={handleChange}
          >
            <option value="">Select a car</option>
            <option value="Porsche">Porsche</option>
            <option value="Benz">Benz</option>
            <option value="Lamborgini">Lamborgini</option>
          </select>
        </label>
        <br />

        {/* Textarea */}
        <label><strong>Comments:</strong>
          <textarea name="comments" value={formData.comments}
            onChange={handleChange}
          /></label>
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Display the Submitted info */}
      {submittedData && (
        <div>
          
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Recomend Us: {submittedData.recomendUs ? 'Yes' : 'No'}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Favorite Car: {submittedData.favoriteCar}</p>
          <p>Comments: {submittedData.comments}</p>
        </div>
      )}
    </div>
  );
}

export default FormComponent;