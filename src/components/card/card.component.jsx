import React from "react";
import "./card.style.css";

/***
 * card.component.jsx
 *
 * Functional component that build a card component
 * based on the name and the email the given object.
 * Add an image from an external API using the object.id.
 *
 * @param object (a user), with a .id, .name, .email
 ***/

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
