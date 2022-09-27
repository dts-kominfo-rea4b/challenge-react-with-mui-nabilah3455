// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      {/* {data.map((el, index) => {
        return ( */}
      <ListItem sx={{ borderBottom: "1px solid #dbd9d4" }}>
        <ListItemAvatar>
          <Avatar
            sx={{
              width: "65px",
              height: "65px",
              marginRight: "3rem",
            }}
          >
            <img src={data.photo} width={65} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={
            <div>
              <div>{data.phone}</div>
              <div>{data.email}</div>
            </div>
          }
        ></ListItemText>
        {/* <span>{data.email}</span> */}
      </ListItem>
      {/* );
      })} */}
    </>
  );
};

export default Contact;
