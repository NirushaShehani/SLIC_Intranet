import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import ReactDOM from 'react-dom/client';


const ContactListPage = () => {
  const containerStyle = {
    width: '100%',
    height: '100vh'
  };

  const leftStyle = {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const verticalLineStyle = {
    width: '3px',
    backgroundColor: '#646464', // You can change the color of the line
    margin: '-1px' // Adjust spacing as needed
  };

  const rightStyle = {
    flex: 4,
    backgroundColor: '#c0c0c0',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const container = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
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

  const up2 = {
    flex: '0 0 15%',
    backgroundColor: '#F4F4F4',
    padding: '10px',
    marginLeft: '-20px',
    marginRight: '-20px',
    marginTop: '-20px',
    width: 'auto',
    height: 'auto',
  };

  const Down = {
    flex: '1',
    backgroundColor: '#FFFFFF',
    padding: '1p0x',
    marginLeft: '-20px',
    marginRight: '-20px',
  };

  const ContactList = {
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

  return (
    <div style={{ display: 'flex', ...containerStyle }}>
      <div style={leftStyle}>
        <div style={{ display: 'flex', ...container }}>
          <div style={up}>
            <DrawerMenu/>
            <div style={ContactList}>
              Contact List
            </div>
          </div>
          <div style={Down}>
              <div style={subtitle}>
              ADD NAMES TO YOUR PHONE BOOK
              </div>
              <div style={paragraph}>
              You can add the numbers you need most to your Personal Phone Book by clicking the link 
            "Add" next to the name in the SLIC phone directory. 
            Now your Personal Phone Book is ready to give your most needed numbers instantly.
              </div>
              <br/>
              <br/>
              <div style={subtitle}>
              LOCATE YOUR PHONE BOOK
              </div>
              <div style={paragraph}>
              If you are away from your own computer, by typing your Computer No. 
            (IP No.) you can still access your address book from any other computer.
              </div>
              <PCnumberForm/>
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      <div style={rightStyle}>
      <div style={{ display: 'flex', ...container }}>
          <div style={up2}>
            hi
          </div>
          <div style={Down}>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  width: '250px',
  marginBottom: '10px',
  outline: 'none'
};

const buttonStyle = {
  backgroundColor: '#1A73E8',  // Blue color for the button
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

function PCnumberForm() {
  const [PCno, setPCno] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The PC Number you entered was: ${PCno}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text" 
          value={PCno}
          onChange={(e) => PCno(e.target.value)}
          placeholder="Type your computer number here..."  // Add placeholder text
          style={inputStyle}/>
      </label>
      <br />  
      <input type="submit" style={buttonStyle} value="Submit" />
    </form>
  );
}

export default ContactListPage;
