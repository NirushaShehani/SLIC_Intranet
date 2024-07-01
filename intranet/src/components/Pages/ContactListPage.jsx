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

  const formContainerStyle = {
    padding: '20px',
    backgroundColor: '#F4F4F4',
    width: '100%'
  };
  
  const contentStyle = {
    display: 'flex',
    flex: 1,
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
            <div style={contentStyle}>
              <div style={formContainerStyle}>
                <PhoneBookForm inputStyle={inputStyle} selectStyle={selectStyle} buttonStyle={buttonStyle} />
                <BranchForm selectStyle={selectStyle} buttonStyle={buttonStyle}/>
              </div>
            </div>
          </div>
          <div style={Down}>
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
          onChange={(e) => setPCno(e.target.value)}
          placeholder="Type your computer number here..."  
          style={inputStyle}/>
      </label>
      <br />  
      <input type="submit" style={buttonStyle} value="Submit" />
    </form>
  );
}

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

function BranchForm({ selectStyle, buttonStyle }) {
  const [Branchno, setBranchno] = useState("Select the Branch");

  const handleChange = (event) => {
    setBranchno(event.target.value);
  }

 

  return (
    <form style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <select value={Branchno} onChange={handleChange} style={selectStyle}>
        <option value="Select the Branch">Select the Branch</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <input type="submit" style={buttonStyle} value="Find" />
    </form>
  );
}

export default ContactListPage;
