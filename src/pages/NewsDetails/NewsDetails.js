import React from "react";
import "./NewsDetails.scss";
import data from "../../data/data.json";
const NewsDetails = () => {
  return (
    <div className="wrapper">
      <div className="story_wrapper">
        <div className="title">
          <h2>{data.selected.items[0].headline}</h2>
        </div>
        <div className="image_wrapper">
          <img src={data.selected.items[0].thumb} alt="" />
        </div>
        <div
          className="descriptions_wrapper"
          dangerouslySetInnerHTML={{
            __html: data.selected.items[0].descriptions,
          }}
        >
          {/* {data.selected.items[0].descriptions} */}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
