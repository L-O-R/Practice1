import React from "react";
import "../../Styles/CssFiles/MainSection.css";
import { articleData, keyHighlights, articledata2 } from "../../Array/Data";
import ArticleData2 from "./ArticleData2";
import { HpArray } from "../../Array/HPArray";
import { boxData } from "../../Array/BoxData";
import BoxUI from "../../UI/BoxUI";
const MainSection = () => {
  return (
    <>
      <section className="MainSection">
        <div className="HeadingDiv">
          {HpArray &&
            HpArray.map((item, index) => (
              <div>
                <h1>{item.heading}</h1>
                <p>{item.p}</p>
                <div className="Writer-Info">
                  {item.info.map((infoItem, infoIndex) => (
                    <div key={infoIndex} className="hp-info">
                      <div className="hp-info-header">
                        <img src={infoItem.img} alt="" />
                        <span>
                          {infoItem.name} <br />
                          {infoItem.para}
                        </span>
                      </div>

                      <div className="hp-bottom-section">
                        <div className="bottom-left-col hp-bottom-item">
                          {infoItem.bottom.map((bottomItem, bottomIndex) => (
                            <>
                              {bottomItem.img && (
                                <img
                                  src={bottomItem.img}
                                  alt={`Chatinfo${index}`}
                                />
                              )}
                              <span>{bottomItem.tag}</span>
                            </>
                          ))}
                        </div>
                        <div className="bottom-right-col hp-bottom-item">
                          {infoItem.bottom.map((bottomItem) => (
                            <>
                              {bottomItem.bookmark && (
                                <img
                                  src={bottomItem.bookmark}
                                  alt={`bookmark${(index = 1)}`}
                                />
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <figure>
                  <img src={item.img} alt={`${index}figure `} />
                  <figcaption>ImageSource</figcaption>
                </figure>
              </div>
            ))}
        </div>
        <article className="article1">
          {articleData &&
            articleData.map((item, index) => {
              return <p className={item.className}>{item.text}</p>;
            })}
        </article>
        <article className="article2">
          {keyHighlights &&
            keyHighlights.map((highlight, index) => (
              <div key={index}>
                {highlight.tag ? (
                  <h2>{highlight.text}</h2>
                ) : (
                  <li>{highlight}</li>
                )}
              </div>
            ))}
          <div>
            <ArticleData2 article={articledata2} />
          </div>
        </article>
      </section>
    </>
  );
};

export default MainSection;
