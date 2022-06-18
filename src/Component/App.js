import React from "react";
import Header from "./Header";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const Contacts = [
    {
      id: "1",
      name: "Munna",
      email: "niyaz.munna09@gmail.com",
    },
    {
      id: "2",
      name: "Hassan",
      email: "marzooq703@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      {/* <ContactCard /> */}

      <ContactList Contacts={Contacts} />
    </div>
  );
}

export default App;
