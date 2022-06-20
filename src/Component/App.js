import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "Contact";
  const [Contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
    setContacts([...Contacts, contact]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...Contacts, contact]))
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContacts || []);
  }, []);



  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandler={AddContactHandler} />
      <ContactList Contacts={Contacts} />
    </div>
  );
}

export default App;
