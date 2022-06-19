import React from "react";
import User from "../image/User.png"

function ContactCard(props) {
  const  {id, name, email} = props.contact;

  return (
    <div className="item">
        <img className="ui avatar image" src={User} />
      <div className="content">
        <div className="Header">{name}</div>
        <div>{email}</div>
      </div>
    
      <i
        className="trash alternate outline icon"
        style={{ float: "right", marginTop: "7px" }}
      ></i>
        <i
        className="edit alternate outline icon"
        style={{ float: "right", marginTop: "7px",marginRight:"30px" }}
      ></i>
    </div>
  );
}

export default ContactCard;
