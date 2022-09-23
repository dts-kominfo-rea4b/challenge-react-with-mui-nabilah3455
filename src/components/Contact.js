// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ContactForm from "./ContactForm";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ contacts, addContact }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <Grid container spacing={2} sx={{marginTop: '2rem'}}>
        <Grid item xs={5}>
          <ContactForm addContact={addContact} />
        </Grid>
        <Grid item xs={7}>
          {/* <Container maxWidth="sm" sx={{ background: "#dbf6f0" }}> */}
            <List sx={{margin: '0 5rem', background: "#dbf6f0"}}>
              {contacts.map((el) => {
                return (
                  <ListItem sx={{ borderBottom: '1px solid #dbd9d4'}}>
                    <ListItemAvatar>
                      <Avatar sx={{width: '65px', height: '65px', marginRight: '3rem'}}>
                        <img src={el.photo} width={65} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={el.name} secondary={el.phone} />
                    {/* <span>{el.email}</span> */}
                  </ListItem>
                );
              })}
            </List>
          {/* </Container> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
