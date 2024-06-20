import React from 'react'
import '../../Styles/contactList.css';
import DrawerMenu from '../Sub_Components/DrawerMenu';

const ContactListPage = () => {
  return (
    <div className="container">
      <div className="left-pane">
        <DrawerMenu />
        <h2> Contact List</h2>
        <h3>ADD NAMES TO YOUR PHONE BOOK </h3>
        <p>You can add the numbers you need most to you Personal Phone Book by clicking the link 
          "Add" next to the name in the SLIC phone directory. 
          Now your Personal Phone Book is ready to give your most needed numbers instantly.</p>
        <h3>LOCATE YOUR PHONE BOOK</h3>
        <p>If you are away from your own computer, by typing your Computer No. 
          (IP No.) you can still access your address book from any other computer.</p>
      </div>
      <div className="right-pane">
        Right Pane (75%)
      </div>
    </div>
  )
}

export default ContactListPage;

