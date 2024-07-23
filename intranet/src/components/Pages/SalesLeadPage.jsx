import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import axios from 'axios';
import logo from '../../assets/slicLIfe_New_1.png';

const SalesLeadPage = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    contact1: '',
    contact2: '',
    slicContactName: '',
    slicMobile: '',
    slicExtension: '',
    slicDepartment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/salesLead/submit', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
      <div style={{ flex: 1, backgroundColor: '#f0f0f0', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
          <div style={{ flex: '0 0 15%', backgroundColor: '#31769F', padding: '10px', marginLeft: '-20px', marginRight: '-20px', marginTop: '-20px', width: 'auto', height: 'auto' }}>
            <DrawerMenu />
            <div style={{ fontFamily: '"Gloock", serif', fontWeight: 500, fontSize: '48px', fontStyle: 'normal', color: 'white', marginLeft: '30px', marginTop: '10px' }}>New Customer Request</div>
          </div>
          <div style={{ flex: '1', padding: '10px', marginLeft: '-20px', marginRight: '-20px' }}>
            <div style={{ fontFamily: '"Onest", sans-serif', fontSize: '17px', fontStyle: 'normal', color: '#161616', marginLeft: '18px', marginTop: '20px' }}>Welcome to SLIC's New Customer Request Form</div>
            <div style={{ fontFamily: '"Onest", sans-serif', fontSize: '15px', fontStyle: 'normal', color: '#585858', marginLeft: '18px', marginTop: '20px' }}>
              <p>Thank you for your interest in Sri Lanka Insurance Corporation (SLIC). To help us understand your insurance needs and provide you with the best service possible, please fill out the form below with your contact details and the type of insurance you are interested in. Your information will be used by our sales team to get in touch with you and offer personalized assistance.</p>
              <p>Personalized Service: By providing us with your information, we can tailor our services to meet your specific insurance needs.</p>
              <p>Expert Advice: Our experienced team will contact you to discuss the best insurance options available to you.</p>
              <p>Convenience: Save time by letting us reach out to you at your preferred contact method and time.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '3px', backgroundColor: '#646464', margin: '-1px' }}></div>
      <div style={{ flex: 4, backgroundColor: '#F4F4F4', padding: '20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: '2px solid #0000002B', borderRadius: '20px', boxShadow: '0 10px 8px rgba(0, 0, 0, 0.1)', width: '80%', height: '95vh', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px', padding: '20px' }}>
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '240px', height: 'auto', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Sales Contact Form</h3>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#F4F4F4', width: '100%' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                <label>Name of the client:</label>
                <input
                  type="text"
                  name="clientName"
                  placeholder="Enter your name.."
                  style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }}
                  value={formData.clientName}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                  <label>Contact No 1:</label>
                  <input
                    type="text"
                    name="contact1"
                    placeholder="0704561233"
                    style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }}
                    value={formData.contact1}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                  <label>Contact No 2:</label>
                  <input
                    type="text"
                    name="contact2"
                    placeholder="0785642350"
                    style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }}
                    value={formData.contact2}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                  <h4>SLIC Contact :</h4>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="slicContactName"
                    placeholder="xxxxxxxxx"
                    style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }}
                    value={formData.slicContactName}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                  <label>Mobile number:</label>
                  <input
                    type="text"
                    name="slicMobile"
                    placeholder="xxxxxxxxx"
                    style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }}
                    value={formData.slicMobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                  <label>Extension:</label>
                  <input
                    type="text"
                    name="slicExtension"
                    placeholder="Enter company name ..."
                    style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }}
                    value={formData.slicExtension}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '10px', marginRight: '10px' }}>
                  <label>Department:</label>
                  <input
                    type="text"
                    name="slicDepartment"
                    placeholder="xxxxxxxxx"
                    style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }}
                    value={formData.slicDepartment}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button type="submit" style={{ backgroundColor: '#2F5BDA', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', height: '37px', width: '171px' }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesLeadPage;