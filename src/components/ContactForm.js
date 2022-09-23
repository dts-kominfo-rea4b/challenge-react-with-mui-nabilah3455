// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [newContact, setNewContact] = useState([]);
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const handleChange = (event) => {
    let name = event.target.name;
    setNewContact({ ...newContact, [name]: event.target.value });
  };

  const handleSubmit = () => {
    addContact(newContact);
    setNewContact({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{ padding: "1rem", background: "#f3f1eb", margin: "0 50px", boxShadow: '0 1px 1px gray' }}
      >
        <TextField
          id="filled-basic"
          label="Name *"
          name="name"
          variant="filled"
          value={newContact.name}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          label="Phone *"
          name="phone"
          variant="filled"
          value={newContact.phone}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          label="Email *"
          name="email"
          variant="filled"
          value={newContact.email}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          label="Photo Url *"
          name="photo"
          variant="filled"
          value={newContact.photo}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <Button
          variant="text"
          onClick={handleSubmit}
          sx={{ color: "green", float: "left", marginTop: '10px', marginBottom: '-10px'}}
        >
          ADD NEW
        </Button>
      </Card>
    </>
  );
};

export default ContactForm;
