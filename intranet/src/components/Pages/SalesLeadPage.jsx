import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import ReactDOM from 'react-dom/client';
import logo from '../../assets/slicLIfe_New_1.png';

const SalesLeadPage = () => {
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
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px'
  };

  const container = {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
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
    marginBottom: '-30px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '600px',
    marginLeft: '40px'
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={container}>
          <div style={up}>
            <DrawerMenu />
            <div style={contactList}>Sales Leads</div>
          </div>
          <div style={down}>
            <div style={subtitle}>Welcome to SLIC's Sales Leads Form</div>
            <div style={paragraph}>
              <p>
                Thank you for your interest in Sri Lanka Insurance Corporation (SLIC). To help us understand your
                insurance needs and provide you with the best service possible, please fill out the form below with your
                contact details and the type of insurance you are interested in. Your information will be used by our
                sales team to get in touch with you and offer personalized assistance.
              </p>
            </div>
            <br />
            <br />
            <div style={subtitle}>Why Fill Out This Form?</div>
            <div style={paragraph}>
              <p>
                Personalized Service: By providing us with your information, we can tailor our services to meet your
                specific insurance needs.
              </p>
              <p>Expert Advice: Our experienced team will contact you to discuss the best insurance options available to you.</p>
              <p>Convenience: Save time by letting us reach out to you at your preferred contact method and time.</p>
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
        </div>
      </div>
    </div>
  );
};

const selectStyle = {
  padding: '10px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  width: '200px',
  marginRight: '10px',
  outline: 'none'
};

const inputStyle = {
  padding: '10px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  width: '250px',
  marginBottom: '10px',
  marginLeft: '18px',
  marginTop: '20px',
  outline: 'none'
};

const inputStyle2 = {
  padding: '10px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  width: '250px',
  marginBottom: '10px',
  marginLeft: '18px',
  marginTop: '10px',
  outline: 'none'
};

const buttonStyle = {
  backgroundColor: '#2F5BDA',  // Blue color for the button
  color: '#FFFFFF',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '18px',
  height: '37px',
  width: '171px'
};

function PhoneBookForm({ inputStyle, selectStyle, buttonStyle }) {
  const [inputs, setInputs] = useState({});
  const [Floor, setFloor] = useState("All Floors");
  const [Department, setDepartment] = useState("All Departments");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
    if (name === "Floor") setFloor(value);
    if (name === "Department") setDepartment(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <label>Name</label>
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        placeholder="P.S. Perera"
        style={inputStyle2}
      />
      <label>Floor</label>
      <select name="Floor" value={Floor} onChange={handleChange} style={selectStyle}>
        <option value="All Floors">All Floors</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <label>Department</label>
      <select name="Department" value={Department} onChange={handleChange} style={selectStyle}>
        <option value="All Departments">All Departments</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
        <input type="submit" style={buttonStyle} value="Submit"/>
    </form>
  )
}

export default SalesLeadPage;
