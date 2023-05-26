import React from "react";
import "../../Styles/CssFiles/ArticleData2.css";
import { articledata2 } from "../../Array/Data";
const ArticleData2 = ({ article }) => {
  const getLabelText = (list) => {
    const start = list.indexOf(":");
    return list.substring(0, start + 1);
  };

  const getDescriptionText = (list) => {
    const start = list.indexOf(":");
    return list.substring(start + 1);
  };
  return (
    <div className="ArticleData2">
      {articledata2 &&
        articledata2.map((item, index) => {
          return (
            <div key={item.id}>
              <h3>{item.heading}</h3>
              {Array.isArray(item.text) &&
                item.text.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              <div>
                {Array.isArray(item.subHeading) &&
                  item.subHeading.map((subSection, index) => (
                    <div key={subSection.id}>
                      {subSection.list ? (
                        <ul>
                          <li key={subSection.id}>
                            <b>{getLabelText(subSection.list)}</b>
                            {getDescriptionText(subSection.list)}
                          </li>
                        </ul>
                      ) : (
                        <>
                          <h4>
                            {index + 1}. {subSection.subhead}
                          </h4>
                          {Array.isArray(subSection.para) ? (
                            subSection.para.map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))
                          ) : (
                            <p>{subSection.para}</p>
                          )}
                          {subSection.highlight && (
                            <p>{subSection.highlight}</p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ArticleData2;
