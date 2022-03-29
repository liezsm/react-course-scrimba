import React from "react";
import FactItem from "./FactItem";
const Facts = ({ facts }) => {
  return (
    <main>
      <div className='facts-container'>
        <h1 className='title'>Fun facts about React</h1>
        <ul>
          {facts.map((i) => (
            <FactItem key={i} fact={i} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Facts;
