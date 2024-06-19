import React from 'react'
import '../../Styles/contactList.css';
import DrawerMenu from '../Sub_Components/DrawerMenu';

const ContactListPage = () => {
  return (
    <div className="container">
      <div className="left-pane">
        <DrawerMenu />
      </div>
      <div className="right-pane">
        Right Pane (75%)
      </div>
    </div>
  )
}

export default ContactListPage
