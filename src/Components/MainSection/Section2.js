import React from "react";
import "../../Styles/CssFiles/Section2.css";
import { Section2headArray } from "../../Array/Section2headArray";
import BoxUI from "../../UI/BoxUI";
import { boxData } from "../../Array/BoxData";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="section2-heading">
        {Section2headArray &&
          Section2headArray.map((item, index) => (
            <>
              <div className="section2-left-col">
                <img src={item.img} alt="writer" />
                <span>{item.name}</span>
                <span>{item.info}</span>
                <p>{item.para}</p>
              </div>
              <div className="section2-right-col">
                <button className="button">{item.follow}</button>
                <button className="button">
                  <img src={item.mailImg} alt="Mail" />
                </button>
              </div>
            </>
          ))}
      </div>
      <BoxUI array={boxData} />
    </section>
  );
};

export default Section2;
