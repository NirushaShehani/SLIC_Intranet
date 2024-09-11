import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import axios from 'axios';
import logo from '../../assets/IntranetLogo.png';
import { BASE_URL, ENDPOINTS } from '../../Services/ApiConfig';

const IdeaHub = () => {
  const [formData, setFormData] = useState({
    userEPF: '',
    deptOrBranch: '',
    name: '',
    userIdea: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [typedText, setTypedText] = useState(""); // State to hold typed text
  const fullText = `We believe your ideas are invaluable for improving our services and enhancing our company's value. 
                Your suggestions drive positive change, fostering a culture of innovation and making this a great place to work. 
                At our Idea Hub, we welcome your creative insights to help us grow and better serve our customers. 
                Thank you for your dedication and inspiration; we look forward to your valuable input.`; // Full text to be typed

  // Function to auto-type text
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 50); // Speed of typing (lower value = faster typing)

    return () => clearInterval(intervalId); // Clear interval when component unmounts
  }, []);



  const handleNavigateToLogin = () => {
    navigate('/login?redirect=/Idea_Hub_Admin_View');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!/^[a-zA-Z0-9]{1,6}$/.test(formData.userEPF)) {
      formErrors.userEPF = 'User EPF should only contain letters and numbers, and not be longer than 6 characters.';
    }

    if (!/^[a-zA-Z\s]{1,120}$/.test(formData.deptOrBranch)) {
      formErrors.deptOrBranch = 'Department/Branch should only contain letters and be up to 120 characters.';
    }

    if (!/^[a-zA-Z\s]{1,120}$/.test(formData.name)) {
      formErrors.name = 'Name of the User should only contain letters and be up to 120 characters.';
    }

    if (!/^[a-zA-Z\s]{1,120}$/.test(formData.userIdea)) {
      formErrors.userIdea = 'User Idea should only contain letters and be up to 120 characters.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.SetIdeas}`, formData);
        console.log('Response:', response.data);
        console.log('Form submitted successfully!');
        alert('Submitted Successfully'); // Show the pop-up message
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
  };

  const leftStyle = {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const verticalLineStyle = {
    width: '3px',
    backgroundColor: '#646464',
    margin: '-1px',
  };

  const rightStyle = {
    flex: 4,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column', // Ensure vertical alignment
    justifyContent: 'center',
    alignItems: 'center',
  };

  const border = {
    border: '2px solid #0000002B',
    borderRadius: '20px',
    boxShadow: '0 10px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    height: '95vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    padding: '20px',
  };

  const container = {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
  };

  const formContainerStyle = {
    padding: '20px',
    backgroundColor: '#F4F4F4',
    width: '100%'
  };

  const contentStyle = {
    display: 'flex',
    flex: 1,
  };

  const up = {
    flex: '0 0 15%',
    backgroundColor: '#31769F',
    padding: '10px',
    marginLeft: '-20px',
    marginRight: '-20px',
    marginTop: '-20px',
    width: 'auto',
    height: 'auto',
  };

  const down = {
    flex: '1',
    padding: '10px',
    marginLeft: '-20px',
    marginRight: '-20px',
  };

  const contactList = {
    fontWeight: 500,
    fontSize: '48px',
    fontStyle: 'normal',
    color: 'white',
    marginLeft: '30px',
    marginTop: '10px',
  };

  const subtitle = {
    fontWeight: "700",
    fontSize: '17px',
    fontStyle: 'normal',
    color: '#161616',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const paragraph = {
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#585858',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const logoStyle = {
    width: '240px',
    height: 'auto',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '100%',
    marginBottom: '10px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    backgroundColor: '#2F5BDA',
    color: '#FFFFFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    height: '37px',
    width: '171px',
  };

  const adminButtonStyle = {
    ...buttonStyle,
    marginLeft: '10px', // Add spacing between the buttons
    width: 'auto', // Adjust width if needed
  };

  const formRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    width: '100%',
  };

  const formColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: '10px',
    marginRight: '10px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={container}>
          <div style={up}>
            <DrawerMenu />
            <div style={contactList}>Idea Hub</div>
          </div>
          <div style={down}>
            <div style={subtitle}>Welcome to the Idea Hub !!!</div>
            <div style={paragraph}>
            <p>{typedText}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      <div style={rightStyle}>
        <div style={border}>
          <div className="logo">
            <img src={logo} alt="Logo" style={logoStyle} />
            <h3 style={titleStyle}>IdeaHub Form</h3>
          </div>
          <div style={formContainerStyle}>
            <form onSubmit={handleSubmit}>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <h4>User Details :</h4>
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <label>User EPF :</label>
                  <input type="text" name="userEPF" placeholder="L1234" style={inputStyle} value={formData.userEPF} onChange={handleChange} />
                  {errors.userEPF && <p style={{ color: 'red' }}>{errors.userEPF}</p>}
                </div>
                <div style={formColumnStyle}>
                  <label>Department/Branch :</label>
                  <input type="text" name="deptOrBranch" placeholder="eg: Colombo" style={inputStyle} value={formData.deptOrBranch} onChange={handleChange} />
                  {errors.deptOrBranch && <p style={{ color: 'red' }}>{errors.deptOrBranch}</p>}
                </div>
              </div>
              <div style={formColumnStyle}>
                <label>Name of the User :</label>
                <input type="text" name="name" placeholder="eg: John Smith" style={inputStyle} value={formData.name} onChange={handleChange} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </div>
              <br />
              <div style={formColumnStyle}>
                <label>Share Your Idea :</label>
                <input type="text" name="userIdea" placeholder="Your Idea" style={inputStyle} value={formData.userIdea} onChange={handleChange} />
                {errors.userIdea && <p style={{ color: 'red' }}>{errors.userIdea}</p>}
              </div>
              <br />
              <div style={buttonContainerStyle}>
                <button type="submit" style={buttonStyle}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaHub;