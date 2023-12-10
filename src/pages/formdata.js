import React, { useState } from "react";
import jsPDF from 'jspdf';

const FormComponent = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if input data is valid
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all the fields');
      return;
    }

    // Store input data in local storage
    const inputData = { firstName, lastName, email, password, confirmPassword };
    localStorage.setItem('inputData', JSON.stringify(inputData));

    try {
      // Send POST request to API
      const response = await postDataToAPI(inputData);
      if (response.ok) {
        const confirmation = window.confirm("Are you sure you want to submit this form?");
        if (confirmation) {
          // Redirect to selected coin's page
          window.location.href = '/coins';
          // Generate and download PDF file
          generatePDF(inputData);
        }
      } else {
        console.error('Server responded with an error:', response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postDataToAPI = async (inputData) => {
    const response = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    return response;
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmpasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const generatePDF = (inputData) => {
    const doc = new jsPDF();
  
    // Add content to PDF file
    doc.text(`First Name: ${inputData.firstName}`, 10, 10);
    doc.text(`Last Name: ${inputData.lastName}`, 10, 20);
    doc.text(`Email: ${inputData.email}`, 10, 30);
    doc.text(`Password: ${inputData.password}`, 10, 40);
    doc.text(`Confirm Password: ${inputData.confirmPassword}`, 10, 50);
  
    // Download PDF file
    doc.save('form-data.pdf');
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <form controlId="firstName">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </form>
          <form controlId="lastName">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </form>
          <button variant="primary" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <form controlId="email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </form>
          <form controlId="password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </form>
          <form controlId="confirmPassword">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmpasswordChange}
            />
          </form>
          <button variant="primary" onClick={handlePrev}>
            Previous
          </button>{" "}
          <button value={handleSubmit} variant="primary" type="submit">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default FormComponent;