import React from "react";
import "./ResumeItem.scss";

function ResumeItem({ year, placeName, subTitle, text }) {
  return (
    <section className="app__ResumeItem">
      {/* LEFT */}
      <div className="app__ResumeItem-left">
        <p>{year}</p>
      </div>
      {/* RIGHT */}
      <div className="app__ResumeItem-right">
        <h5>{placeName}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default ResumeItem;
