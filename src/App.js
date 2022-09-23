import "./App.css";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import Header from "./components/Header";
const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (data) => {
    setContacts([...contacts, data]);
  };

  return (
    <div className="App">
      <Header />
      <Contact contacts={contacts} addContact={addContact} />
    </div>
  );
};

export default App;
