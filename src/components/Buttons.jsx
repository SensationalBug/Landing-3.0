import React from "react";
import "./buttons.css";

const Buttons = (props) => {
  const { title, clase, href1, href2, href3, icon1, icon2, icon3 } = props;
  return (
    <div className={clase}>
      <div className="cardButton row">
        <div className="titleButton col-12">
          <h4>{title}</h4>
        </div>
        <div className="listContainer col-12">
          <div className="list">
            <a target="new-blank" href={href1}>
              {icon1}
            </a>
            <a target="new-blank" href={href2}>
              {icon2}
            </a>
            <a target="new-blank" href={href3}>
              {icon3}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
