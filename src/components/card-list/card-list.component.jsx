import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

/***
 * card-list.component.jsx
 *
 * Functional component that build a list of cards component
 * based on each element of the given array.
 *
 * @param array of objects (a list of users)
 ***/

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
