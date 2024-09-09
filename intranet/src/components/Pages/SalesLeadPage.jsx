import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import logo from '../../assets/IntranetLogo.png';
import { BASE_URL, ENDPOINTS } from '../../Services/ApiConfig';
import axios from 'axios';

const SalesLeadPage = () => {
  const initialFormData = {
    clientName: '',
    contactno1: '',
    contactno2: '',
    slicRequirement: '',
    slicContactName: '',
    slicMobile: '',
    slicExtension: '',
    slicDepartment: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    // Navigate to the login page with a source query parameter
    navigate('/login');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    const trimmedContactno1 = formData.contactno1.trim();
    const trimmedContactno2 = formData.contactno2.trim();

    if (!/^[a-zA-Z\s]+$/.test(formData.clientName)) {
      formErrors.clientName = 'Client name should only contain letters and spaces.';
    }

    if (!/^\d{10}$/.test(trimmedContactno1)) {
      formErrors.contactNo1 = 'Contact No 1 should only contain 10 digits.';
    }

    if (!/^\d{10}$/.test(trimmedContactno2)) {
      formErrors.contactNo2 = 'Contact No 2 should only contain 10 digits.';
    }

    if (!/^[a-zA-Z\s]{1,120}$/.test(formData.slicRequirement)) {
      formErrors.clientRequirement = 'Client requirement should only contain letters and be up to 120 characters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.slicContactName)) {
      formErrors.yourName = 'Your name should only contain letters and spaces.';
    }

    if (!/^\d{10}$/.test(formData.slicMobile)) {
      formErrors.mobileNumber = 'Mobile number should only contain 10 digits.';
    }

    if (!/^\d{1,6}$/.test(formData.slicExtension)) {
      formErrors.extension = 'Extension should only contain up to 6 digits.';
    }

    if (!/^[a-zA-Z\s]{0,120}$/.test(formData.slicDepartment)) {
      formErrors.department = 'Department/Branch should only contain letters and be up to 120 characters.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const requestBody = {
        clientName: formData.clientName,
        contactno1: formData.contactno1,  // Make sure it's contactno1, not contact1
        contactno2: formData.contactno2,  // Same here, contactno2
        slicRequirement: formData.slicRequirement,
        staffmembername: formData.slicContactName,
        staffcontactno: formData.slicMobile,
        slicExtension: formData.slicExtension,
        slicDepartment: formData.slicDepartment,
      };
  
      // Log the request body before sending it
      console.log("Request Body:", requestBody);
  
      try {
        const response = await axios.post(
          `${BASE_URL}/${ENDPOINTS.SetSalasLeads}`, 
          requestBody,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
  
        if (response.status === 200 && response.data === 1) {
          console.log('Data inserted successfully:', response.data);
          setFormData(initialFormData);
          setErrors({});
        } else {
          console.error('Failed to insert data:', response.data);
        }
      } catch (error) {
        console.error('Error inserting data:', error);
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
    fontFamily: '"Gloock", serif',
    fontWeight: 500,
    fontSize: '48px',
    fontStyle: 'normal',
    color: 'white',
    marginLeft: '30px',
    marginTop: '10px',
  };

  const subtitle = {
    fontFamily: '"Onest", sans-serif',
    fontSize: '17px',
    fontStyle: 'normal',
    color: '#161616',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const paragraph = {
    fontFamily: '"Onest", sans-serif',
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
    backgroundColor: '#2F5BDA',  // Blue color for the button
    color: '#FFFFFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    height: '37px',
    width: '171px',
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

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={container}>
          <div style={up}>
            <DrawerMenu />
            <div style={contactList}>new customer Introducing</div>
          </div>
          <div style={down}>
            <div style={subtitle}>Thank you for introducing new customers to us !</div>
            <div style={paragraph}>
              <p>
              As the nation’s first choice for Risk Protection and Life Investment, this initiative not only helps our customers and their loved ones but also contributes significantly to the growth of our company. 
Your efforts enable us to achieve our goals and ensure that we can all share in the benefits and accomplishments of our company’s success. 
One of our sales team members will contact them soon. 
Keep up the great work!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      <div style={rightStyle}>
        <div style={border}>
          <div className="logo">
            <img src={logo} alt="Logo" style={logoStyle} />
            <h3 style={titleStyle}>Sales Contact Form</h3>
          </div>
          {/* Form area */}
          <div style={formContainerStyle}>
            <form onSubmit={handleSubmit}>
              <div style={formColumnStyle}>
                <label>Name of the client:</label>
                <input type="text" name="clientName" placeholder="Enter your name.." style={inputStyle} value={formData.clientName}
                  onChange={handleChange}/>
                  {errors.clientName && <p style={{color: 'red'}}>{errors.clientName}</p>}
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <label>Contact No 1:</label>
                  <input type="text" name="contactno1" placeholder="0704561233" style={inputStyle} value={formData.contactno1}
                    onChange={handleChange}/>
                    {errors.contactNo1 && <p style={{color: 'red'}}>{errors.contactNo1}</p>}
                </div>
                <div style={formColumnStyle}>
                  <label>Contact No 2:</label>
                  <input type="text" name="contactno2" placeholder="0785642350" style={inputStyle} value={formData.contactno2}
                    onChange={handleChange}/>
                    {errors.contactNo2 && <p style={{color: 'red'}}>{errors.contactNo2}</p>}
                </div>
              </div>
              <div style={formColumnStyle}>
                  <label>Client's Requirement</label>
                  <textarea
                    name="slicRequirement"
                    value={formData.slicRequirement}
                    onChange={handleChange}
                    placeholder="Type your requirement here..."
                    rows="10"
                    cols="50"
                    style={inputStyle} />
                    {errors.clientRequirement && <p style={{color: 'red'}}>{errors.clientRequirement}</p>}
                    <p>Client Requirement: {formData.slicRequirement}</p>
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <h4>Your Contact :</h4>
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <label>Name:</label>
                  <input type="text" name="slicContactName" placeholder="xxxxxxxxx" style={inputStyle} value={formData.slicContactName}
                    onChange={handleChange}/>
                    {errors.yourName && <p style={{color: 'red'}}>{errors.yourName}</p>}
                </div>
                <div style={formColumnStyle}>
                  <label>Mobile number:</label>
                  <input type="text" name="slicMobile" placeholder="xxxxxxxxx" style={inputStyle} value={formData.slicMobile}
                    onChange={handleChange}/>
                    {errors.mobileNumber && <p style={{color: 'red'}}>{errors.mobileNumber}</p>}
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <label>Extension:</label>
                  <input type="text" name="slicExtension" placeholder="Enter company name ..." style={inputStyle} value={formData.slicExtension}
                    onChange={handleChange}/>
                    {errors.extension && <p style={{color: 'red'}}>{errors.extension}</p>}
                </div>
                <div style={formColumnStyle}>
                  <label>Department/Branch:</label>
                  <input type="text" name="slicDepartment" placeholder="xxxxxxxxx" style={inputStyle} value={formData.slicDepartment}
                    onChange={handleChange}/>
                    {errors.department && <p style={{color: 'red'}}>{errors.department}</p>}
                </div>
              </div>
              <div>
                <button type="submit" style={buttonStyle}>Submit</button>
                <button onClick={handleNavigateToLogin} style={buttonStyle}>Navigate Admin</button>
              </div>
            </form>
          </div>
          {/* Form area */}
        </div>
      </div>
    </div>
  );
};

export default SalesLeadPage;