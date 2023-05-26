import React from "react";

import "../Styles/CssFiles/BoxUI.css";

const BoxUI = ({ array }) => {
  return (
    <div>
      <div className="box-container">
        {array.map((box, index) => (
          <div className="box" key={index}>
            <img src={box.img} alt={box.alt} />
            <div className="caption">{box.caption}</div>
            <h2>{box.heading}</h2>
            <p>{box.p}</p>
            <div className="tags">
              <span>{box.tag}</span>
            </div>
            <div className="bottom-section">
              {box.bottom.map((item, i) => (
                <div className="bottom-item" key={i}>
                  {item.img && <img src={item.img} alt={`Tag ${i}`} />}
                  {item.tag && <span>{item.tag}</span>}

                  {item.bookmark && <img src={item.bookmark} alt="Bookmark" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxUI;
