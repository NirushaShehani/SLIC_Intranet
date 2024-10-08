import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";

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
    fontWeight: 500,
    fontSize: '48px',
    fontStyle: 'normal',
    color: 'white',
    marginLeft: '30px',
    marginTop: '10px',
  };

  const subtitle = {
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
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Request body to send to the API
    const requestBody = {
      p_fln: inputs.floor || "",      
      p_dpn: inputs.department || "", 
      p_pname: inputs.username || ""  
    };

    try {
      const response = await axios.post(`${BASE_URL}/${ENDPOINTS.POSTContact}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log("Request successful, data received:", response.data);
        setResults(response.data); // Store the response data
      } else {
        console.warn("Request completed, but not successful. Status:", response.status);
      }
    } catch (error) {
      console.error('Error fetching phone directory data', error);
    }
  };

  return (
    <div>
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
      <select name="floor" value={inputs.floor || ""} onChange={handleChange} style={selectStyle}>
        <option value="">All Floors</option>
        <option value="BASE">Basement</option>
        <option value="Ground">Ground Floor</option>
        <option value="Mezzanine">Mezzanine Floor</option>
        <option value="001">Floor 1</option>
        <option value="002">Floor 2</option>
        <option value="003">Floor 3</option>
        <option value="004">Floor 4</option>
        <option value="005">Floor 5</option>
        <option value="006">Floor 6</option>
        <option value="007">Floor 7</option>
        <option value="008">Floor 8</option>
        <option value="009">Floor 9</option>
        <option value="010">Floor 10</option>
        <option value="011">Floor 11</option>
        <option value="012">Floor 12</option>
        <option value="013">Floor 13</option>
        <option value="014">Floor 14</option>
      </select>
      <label>Department</label>
      <select name="department" value={inputs.department || ""} onChange={handleChange} style={selectStyle}>
        <option value="">All Departments</option>
        <option value="288-Trans.Workshop">288-Trans.Workshop</option>
        <option value="Abans">Abans</option>
        <option value="Actuarial & Risk Mgt">Actuarial & Risk Mgt</option>
        <option value="Administration Unit">Administration Unit</option>
        <option value="Alternate Dis.Unit">Alternate Dis.Unit</option>
        <option value="B/A(G)CDB Counter">B/A(G)CDB Counter</option>
        <option value="B/Assurance-General">B/Assurance-General</option>
        <option value="CBD">CBD</option>
        <option value="CEO’s Office">CEO’s Office</option>
        <option value="Call Centre">Call Centre</option>
        <option value="Canteen">Canteen</option>
        <option value="Casualty">Casualty</option>
        <option value="Casualty-Claims">Casualty-Claims</option>
        <option value="Chairman’s Office">Chairman’s Office</option>
        <option value="Club Members Sales">Club Members Sales</option>
        <option value="Commercial Bank">Commercial Bank</option>
        <option value="Commission">Commission</option>
        <option value="Compliance & Company Secretariat">Compliance & Company Secretariat</option>
        <option value="Credit Control">Credit Control</option>
        <option value="Customer Care - General">Customer Care - General</option>
        <option value="Customer Service & Experience-Life">Customer Service & Experience-Life</option>
        <option value="Director’s Unit">Director’s Unit</option>
        <option value="Distribution-General">Distribution-General</option>
        <option value="Distribution-Life">Distribution-Life</option>
        <option value="Engineering Services">Engineering Services</option>
        <option value="Enterprise Risk Mgt.">Enterprise Risk Mgt.</option>
        <option value="FBD">FBD</option>
        <option value="FBD-Alliance Finance">FBD-Alliance Finance</option>
        <option value="FBD-CIB Counter">FBD-CIB Counter</option>
        <option value="FBD-LB Finance">FBD-LB Finance</option>
        <option value="FBD-Mercan.Leasing">FBD-Mercan.Leasing</option>
        <option value="FBD-Na.Trust Bank">FBD-Na.Trust Bank</option>
        <option value="FBD-Reliance Ins.Bro">FBD-Reliance Ins.Bro</option>
        <option value="Finance">Finance</option>
        <option value="Fire Claims">Fire Claims</option>
        <option value="Fire Underwriting">Fire Underwriting</option>
        <option value="General Insurance">General Insurance</option>
        <option value="HO-Business Devp.Dep">HO-Business Devp.Dep</option>
        <option value="HR - General">HR - General</option>
        <option value="HR - Life">HR - Life</option>
        <option value="Health Plus Team">Health Plus Team</option>
        <option value="Health Plus Team">Health Plus Team</option>
        <option value="ICT">ICT</option>
        <option value="ICT Project Mgt Unit">ICT Project Mgt Unit</option>
        <option value="ICT-App/Support Unit">ICT-App/Support Unit</option>
        <option value="ICT-Bu.Analytics/Adm">ICT-Bu.Analytics/Adm</option>
        <option value="ICT-Contact Center">ICT-Contact Center</option>
        <option value="ICT-Data Center">ICT-Data Center</option>
        <option value="ICT-Infra.& Services">ICT-Infra.& Services</option>
        <option value="ICT-Network/Communi.">ICT-Network/Communi.</option>
        <option value="ICT-Qua.Assurance">ICT-Qua.Assurance</option>
        <option value="ICT-Software Devp.">ICT-Software Devp.</option>
        <option value="ICT-System Security">ICT-System Security</option>
        <option value="Internal Audit">Internal Audit</option>
        <option value="Investigations Dept.">Investigations Dept.</option>
        <option value="Investments">Investments</option>
        <option value="Legal">Legal</option>
        <option value="Life">Life</option>
        <option value="Life - Accounts">Life - Accounts</option>
        <option value="Life - Meeting Room">Life - Meeting Room</option>
        <option value="Life - PHS">Life - PHS</option>
        <option value="Life - Stage Claims">Life - Stage Claims</option>
        <option value="Life Group Business">Life Group Business</option>
        <option value="Life Payment-Fi/Divi">Life Payment-Fi/Divi</option>
        <option value="Life-Death/D.bility">Life-Death/D.bility</option>
        <option value="Life-Groups Business">Life-Groups Business</option>
        <option value="Life-Groups Payments">Life-Groups Payments</option>
        <option value="Life-Guru Abhimani">Life-Guru Abhimani</option>
        <option value="Life-Health Claims">Life-Health Claims</option>
        <option value="Life-Maturity Claims">Life-Maturity Claims</option>
        <option value="Life-New Business">Life-New Business</option>
        <option value="Marine">Marine</option>
        <option value="Marketing">Marketing</option>
        <option value="Marketing - General">Marketing - General</option>
        <option value="Medical Unit">Medical Unit</option>
        <option value="Meeting Room">Meeting Room</option>
        <option value="Mo/Cl-Offer Unit">Mo/Cl-Offer Unit</option>
        <option value="Mo/Cl-Branch Unit">Mo/Cl-Branch Unit</option>
        <option value="Mo/Cl-Central Unit">Mo/Cl-Central Unit</option>
        <option value="Mo/Cl-Checking Unit">Mo/Cl-Checking Unit</option>
        <option value="Mo/Cl-Cheque Counter">Mo/Cl-Cheque Counter</option>
        <option value="Mo/Cl-Fleet Unit">Mo/Cl-Fleet Unit</option>
        <option value="Mo/Cl-Help Desk(BR)">Mo/Cl-Help Desk(BR)</option>
        <option value="Mo/Cl-MOU Unit">Mo/Cl-MOU Unit</option>
        <option value="Mo/Cl-Porce.Unit I">Mo/Cl-Porce.Unit I</option>
        <option value="Mo/Cl-Porce.Unit II">Mo/Cl-Porce.Unit II</option>
        <option value="Mo/Cl-Porce.Unit III">Mo/Cl-Porce.Unit III</option>
        <option value="Mo/Cl-Total Loss">Mo/Cl-Total Loss</option>
        <option value="Motor Claims">Motor Claims</option>
        <option value="Motor Claims Counter">Motor Claims Counter</option>
        <option value="Motor Payment-Fi.Div">Motor Payment-Fi.Div</option>
        <option value="Motor U/W - Fleet">Motor U/W - Fleet</option>
        <option value="Motor Underwriting">Motor Underwriting</option>
        <option value="PA Claims">PA Claims</option>
        <option value="PA Underwriting">PA Underwriting</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Postal Department">Postal Department</option>
        <option value="Postal Insurance">Postal Insurance</option>
        <option value="Procurement">Procurement</option>
        <option value="Reinsurance">Reinsurance</option>
        <option value="Risk Management">Risk Management</option>
        <option value="SHE Claims">SHE Claims</option>
        <option value="SHE Underwriting">SHE Underwriting</option>
        <option value="Sales Support">Sales Support</option>
        <option value="Salvage">Salvage</option>
        <option value="Scanning Cent-Motor">Scanning Cent-Motor</option>
        <option value="Scanning Centre-Life">Scanning Centre-Life</option>
        <option value="Security">Security</option>
        <option value="Special Projects">Special Projects</option>
        <option value="Stores">Stores</option>
        <option value="Suraksha Claims">Suraksha Claims</option>
        <option value="Thrift Society">Thrift Society</option>
        <option value="Training & Devep(Ge)">Training & Devep(Ge)</option>
        <option value="Transport">Transport</option>
        <option value="Vehicle Loans/Chaws">Vehicle Loans/Chaws</option>
        <option value="Welfare Unit">Welfare Unit</option>
      </select>
        <input type="submit" style={buttonStyle} value="Submit"/>
    </form>
    <div>
      {results.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0', fontSize: '18px', textAlign: 'left' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 15px', backgroundColor: '#2F5BDA', color: 'white', border: '1px solid #ddd' }}>Dept</th>
                <th style={{ padding: '12px 15px', backgroundColor: '#2F5BDA', color: 'white', border: '1px solid #ddd' }}>Designation</th>
                <th style={{ padding: '12px 15px', backgroundColor: '#2F5BDA', color: 'white', border: '1px solid #ddd' }}>Name</th>
                <th style={{ padding: '12px 15px', backgroundColor: '#2F5BDA', color: 'white', border: '1px solid #ddd' }}>Extension</th>
                <th style={{ padding: '12px 15px', backgroundColor: '#2F5BDA', color: 'white', border: '1px solid #ddd' }}>Mobile No</th>
                <th style={{ padding: '12px 15px', backgroundColor: '#2F5BDA', color: 'white', border: '1px solid #ddd' }}>Fax No</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} style={{ border: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                  <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{result.t1dpnm}</td>
                  <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{result.t1desg}</td>
                  <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{result.t1name}</td>
                  <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{result.t1nwex}</td>
                  <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{result.t1mbnm}</td>
                  <td style={{ padding: '12px 15px', border: '1px solid #ddd' }}>{result.t1olex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  )
}

function BranchForm({ selectStyle, buttonStyle }) {
  const [Branchno, setBranchno] = useState("Select the Branch");
  const [branchDetails, setBranchDetails] = useState([]);

  const handleChange = (event) => {
    setBranchno(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}/${ENDPOINTS.GETContactBranch}`, {
        params: {
          p_name: Branchno
        },
      });
      if (response.status === 200) {
        console.log("Request successful, data received:", response.data);
        setBranchDetails(response.data); // Store the response data
      } else {
        console.warn("Request completed, but not successful. Status:", response.status);
      }
    } catch (error) {
      console.error('Error fetching branch details', error);
    }
  }
 

  return (
    <div>
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <select value={Branchno} onChange={handleChange} style={selectStyle}>
        <option value="Select the Branch">Select the Branch</option>
        <option value="Akkaraipattu">Akkaraipattu</option>
        <option value="Akurassa">Akurassa</option>
        <option value="Alawwa - ABDC">Alawwa - ABDC</option>
        <option value="Aluthgama">Aluthgama</option>
        <option value="Ambalangoda">Ambalangoda</option>
        <option value="Ambalantota">Ambalantota</option>
        <option value="Ambampola - ABDC">Ambampola - ABDC</option>
        <option value="Ampara">Ampara</option>
        <option value="Anamaduwa">Anamaduwa</option>
        <option value="Anuradhapura">Anuradhapura</option>
        <option value="Aralaganwila">Aralaganwila</option>
        <option value="Aranayaka - ABDC">Aranayaka - ABDC</option>
        <option value="Athurugiriya">Athurugiriya</option>
        <option value="Avissawella">Avissawella</option>
        <option value="Baddegama">Baddegama</option>
        <option value="Badulla">Badulla</option>
        <option value="Baduraliya - ABDC">Baduraliya - ABDC</option>
        <option value="Bakamoona">Bakamoona</option>
        <option value="Balangoda">Balangoda</option>
        <option value="Bambalapitiya">Bambalapitiya</option>
        <option value="Bandaragsama">Bandaragsama</option>
        <option value="Bandarawela">Bandarawela</option>
        <option value="Battaramulla">Battaramulla</option>
        <option value="Batticaloa">Batticaloa</option>
        <option value="Beitta">Beitta</option>
        <option value="Bibile">Bibile</option>
        <option value="Borella">Borella</option>
        <option value="Bulathkohupitiya - ABDC">Bulathkohupitiya - ABDC</option>
        <option value="Chankanai">Chankanai</option>
        <option value="Chavakachcheri">Chavakachcheri</option>
        <option value="Chilaw">Chilaw</option>
        <option value="Chunnakam - ABDC">Chunnakam - ABDC</option>
        <option value="City Office">City Office</option>
        <option value="Colombo Metro - 1">Colombo Metro - 1</option>
        <option value="Colombo Metro - 10">Colombo Metro - 10</option>
        <option value="Colombo Metro - 11">Colombo Metro - 11</option>
        <option value="Colombo Metro - 2">Colombo Metro - 2</option>
        <option value="Colombo Metro - 3">Colombo Metro - 3</option>
        <option value="Colombo Metro - 4">Colombo Metro - 4</option>
        <option value="Colombo Metro - 6">Colombo Metro - 6</option>
        <option value="Dambulla">Dambulla</option>
        <option value="Dankotuwa - ABDC">Dankotuwa - ABDC</option>
        <option value="Dehiattakandiya">Dehiattakandiya</option>
        <option value="Dehiwala">Dehiwala</option>
        <option value="Deniyaya">Deniyaya</option>
        <option value="Deraniyagala - ABDC">Deraniyagala - ABDC</option>
        <option value="Deyyandara - ABDC">Deyyandara - ABDC</option>
        <option value="Digana">Digana</option>
        <option value="Dikwella">Dikwella</option>
        <option value="Divulapitiya - ABDC">Divulapitiya - ABDC</option>
        <option value="Eheliyagoda">Eheliyagoda</option>
        <option value="Elpitiya">Elpitiya</option>
        <option value="Embilipitiya">Embilipitiya</option>
        <option value="FBD Matara">FBD Matara</option>
        <option value="Galagedara - ABDC">Galagedara - ABDC</option>
        <option value="Galevela">Galevela</option>
        <option value="Galgamuwa">Galgamuwa</option>
        <option value="Galle">Galle</option>
        <option value="Gampaha">Gampaha</option>
        <option value="Gampola">Gampola</option>
        <option value="Ganemulla - ABDC">Ganemulla - ABDC</option>
        <option value="Giriulla">Giriulla</option>
        <option value="Habaraduwa - ABDC">Habaraduwa - ABDC</option>
        <option value="Habarana - ABDC">Habarana - ABDC</option>
        <option value="Hakmana">Hakmana</option>
        <option value="Hambantota">Hambantota</option>
        <option value="Hanwella - ABDC">Hanwella - ABDC</option>
        <option value="Hatton">Hatton</option>
        <option value="Head Office">Head Office</option>
        <option value="Hettiyapola - ABDC">Hettiyapola - ABDC</option>
        <option value="Hettipola - ABDC">Hettipola - ABDC</option>
        <option value="Hingurakgoda">Hingurakgoda</option>
        <option value="Homagama">Homagama</option>
        <option value="Horana">Horana</option>
        <option value="Horowpathana">Horowpathana</option>
        <option value="Imaduwa - ABDC">Imaduwa - ABDC</option>
        <option value="Ingiriya">Ingiriya</option>
        <option value="Ja-Ela">Ja-Ela</option>
        <option value="Jaffna">Jaffna</option>
        <option value="Kadawatha">Kadawatha</option>
        <option value="Kadugannawa">Kadugannawa</option>
        <option value="Kaduwela">Kaduwela</option>
        <option value="Kahawatta">Kahawatta</option>
        <option value="Kalawana">Kalawana</option>
        <option value="Kalmunai">Kalmunai</option>
        <option value="Kalutara">Kalutara</option>
        <option value="Kaluwanchikudy - ABDC">Kaluwanchikudy - ABDC</option>
        <option value="Kamburupitiya - ABDC">Kamburupitiya - ABDC</option>
        <option value="Kandana">Kandana</option>
        <option value="Kandy 1">Kandy 1</option>
        <option value="Kandy City">Kandy City</option>
        <option value="Kandy- Motor Claims">Kandy- Motor Claims</option>
        <option value="Kanthale">Kanthale</option>
        <option value="Karapitiya - ABDC">Karapitiya - ABDC</option>
        <option value="Katugastota">Katugastota</option>
        <option value="Katupotha - ABDC">Katupotha - ABDC</option>
        <option value="Kegalle">Kegalle</option>
        <option value="Kekanadura - ABDC">Kekanadura - ABDC</option>
        <option value="Kekirawa">Kekirawa</option>
        <option value="Kilinochchi">Kilinochchi</option>
        <option value="Kiribathgoda">Kiribathgoda</option>
        <option value="Kirillawala - ABDC">Kirillawala - ABDC</option>
        <option value="Kirindiwela - ABDC">Kirindiwela - ABDC</option>
        <option value="Kirulapone">Kirulapone</option>
        <option value="Kochchikade">Kochchikade</option>
        <option value="Kothalena">Kothalena</option>
        <option value="Kottawa">Kottawa</option>
        <option value="Kuliyapitiya">Kuliyapitiya</option>
        <option value="Kurunegala">Kurunegala</option>
        <option value="Kurunegala City">Kurunegala City</option>
        <option value="Mahabage - ABDC">Mahabage - ABDC</option>
        <option value="Mahabage - ABC">Mahabage - ABC</option>
        <option value="Mahagama">Mahagama</option>
        <option value="Maho">Maho</option>
        <option value="Maharagama">Maharagama</option>
        <option value="Mahiyanganaya">Mahiyanganaya</option>
        <option value="Malabe">Malabe</option>
        <option value="Mallavi - ABDC">Mallavi - ABDC</option>
        <option value="Malsiripura">Malsiripura</option>
        <option value="Mannar">Mannar</option>
        <option value="Marawila">Marawila</option>
        <option value="Matale">Matale</option>
        <option value="Matara">Matara</option>
        <option value="Matugama">Matugama</option>
        <option value="Mawanella">Mawanella</option>
        <option value="Mawathagama">Mawathagama</option>
        <option value="Medawachchiya">Medawachchiya</option>
        <option value="Medirigiriya - ABDC">Medirigiriya - ABDC</option>
        <option value="Middeniya - ABDC">Middeniya - ABDC</option>
        <option value="Minuwangoda">Minuwangoda</option>
        <option value="Mirigama - ABDC">Mirigama - ABDC</option>
        <option value="Monaragala">Monaragala</option>
        <option value="Moratumulla - ABDC">Moratumulla - ABDC</option>
        <option value="Moratuwa">Moratuwa</option>
        <option value="Morawaka ABDC">Morawaka ABDC</option>
        <option value="Mullaitivu">Mullaitivu</option>
        <option value="Narammla">Narammla</option>
        <option value="Nawalapitiya">Nawalapitiya</option>
        <option value="Negombo">Negombo</option>
        <option value="Nelliadi">Nelliadi</option>
        <option value="Neluwa">Neluwa</option>
        <option value="Nikaweratiya">Nikaweratiya</option>
        <option value="Nittambuwa">Nittambuwa</option>
        <option value="Nugegoda">Nugegoda</option>
        <option value="Nuwara-Eliya">Nuwara-Eliya</option>
        <option value="Padavi Parakramapura">Padavi Parakramapura</option>
        <option value="Padukka - ABDC">Padukka - ABDC</option>
        <option value="Pallebadda">Pallebadda</option>
        <option value="Panadura">Panadura</option>
        <option value="Pannala - ABDC">Pannala - ABDC</option>
        <option value="Passara - ABDC">Passara - ABDC</option>
        <option value="Peradeniya - ABDC">Peradeniya - ABDC</option>
        <option value="Pettah">Pettah</option>
        <option value="Pilimatlalawa">Pilimatlalawa</option>
        <option value="Piliyandala">Piliyandala</option>
        <option value="Pitakotte">Pitakotte</option>
        <option value="Pitigala C S C">Pitigala C S C</option>
        <option value="Polgahawela">Polgahawela</option>
        <option value="Polgtigama - ABDC">Polgtigama - ABDC</option>
        <option value="Pothuvil - ABDC">Pothuvil - ABDC</option>
        <option value="Pugoda - ABDC">Pugoda - ABDC</option>
        <option value="Puttalam">Puttalam</option>
        <option value="Ragama">Ragama</option>
        <option value="Rambukkana">Rambukkana</option>
        <option value="Ratmalana">Ratmalana</option>
        <option value="Ratnapura">Ratnapura</option>
        <option value="Rideegama">Rideegama</option>
        <option value="Rikillagaskada">Rikillagaskada</option>
        <option value="Ruwanwella">Ruwanwella</option>
        <option value="Salvage Yard - Katubedda">Salvage Yard - Katubedda</option>
        <option value="Siyambalanduwa - ABDC">Siyambalanduwa - ABDC</option>
        <option value="Suriyawawe - ABDC">Suriyawawe - ABDC</option>
        <option value="Tangalle">Tangalle</option>
        <option value="Thalgsawla">Thalgsawla</option>
        <option value="Thambuththegama">Thambuththegama</option>
        <option value="Thanipolgaha - ABDC">Thanipolgaha - ABDC</option>
        <option value="Tissamaharama">Tissamaharama</option>
        <option value="Trincomalee">Trincomalee</option>
        <option value="Udugama">Udugama</option>
        <option value="Udugampola - ABDC">Udugampola - ABDC</option>
        <option value="Urapola - ABDC">Urapola - ABDC</option>
        <option value="Urubokka - ABDC">Urubokka - ABDC</option>
        <option value="Vavuniya">Vavuniya</option>
        <option value="Veyangoda">Veyangoda</option>
        <option value="Walasamulla - ABDC">Walasamulla - ABDC</option>
        <option value="Warakapola">Warakapola</option>
        <option value="Wariyapola">Wariyapola</option>
        <option value="Wattala">Wattala</option>
        <option value="Waththegama ABDC">Waththegama ABDC</option>
        <option value="Weigama">Weigama</option>
        <option value="Welimada">Welimada</option>
        <option value="Weliweriya - ABDC">Weliweriya - ABDC</option>
        <option value="Wellawaya">Wellawaya</option>
        <option value="Wenappuwa">Wenappuwa</option>
        <option value="Yakkala">Yakkala</option>
      </select>
      <input type="submit" style={buttonStyle} value="Find" />
    </form>
    {branchDetails.length > 0 && (
  <div>
    <h2>Branch Details:</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0', fontSize: '18px', textAlign: 'left' }}>
    <tbody>
              {branchDetails.map((detail, index) => (
                <React.Fragment key={index}>
                  <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#f2f2f2' }}>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Branch Name</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.brname}</td>

                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Fax</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.brtel2}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Address</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{`${detail.bradd1}, ${detail.bradd2}, ${detail.bradd3}`}</td>

                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Intercom</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.brint}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Telephone</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.brtel1}</td>
                    
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Branch Email</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bremail || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Sales Manager</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.brsmg}</td>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Mobile (SM)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.smmobil}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Email Address (SM)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.smemail}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Admin Officer</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.brmgr}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Branch Manager</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.brmgr || "N/A"}</td>

                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Mobile (BAO)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bao_mob_phone_nos}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Email Address (AO)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.braoem}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Reg. Manager Life</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bmmgrl}</td>

                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Mobile (RML)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.rmmlmo}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Email Address (RML)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.rmemil}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Reg. Manager General</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.rmmgrg}</td>

                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Mobile (RMG)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.rmmgmo}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Email Address (RMG)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.rmemig}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Manager Life</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bmmgrl}</td>

                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Mobile (ML)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bmmlmo}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Email Address (ML)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bmemil}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Manager General</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bmmgrg}</td>

                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Mobile (MG)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bmmgmo}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold', border: '1px solid #ddd', textAlign: 'left' }}>Email Address (MG)</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #ddd', textAlign: 'left' }}>{detail.bmemig}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
  </table>
  </div>
)}
  </div>
);
}

export default ContactListPage;
