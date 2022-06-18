import React from "react";

function ContactList(props) {
  console.log(props);
 const renderContactList = props.Contacts.map((contact) =>{
    return <div className="item">
        <div className="content">
            <div className="Header">{contact.name}</div>
            <div>{contact.email}</div>
        </div>
    </div>
 })
  return <div className="ui celled list">{renderContactList}</div>;
}

export default ContactList;
