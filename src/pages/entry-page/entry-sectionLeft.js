import React, { useEffect, useState } from "react";
import "./entry-sectionLeft.css";

//imported images
import fpLogo from "../../assets/images/entry-page_left-section-top-dummyLogo.jpg";

export default function SectionLeft() {
  //held states
  const [imageArray, setImageArray] = useState([]);

  //useEffect(() => {}, []);
  return (
    <div className="entry-page_left-section-container">
      <div className="left-section-top">
        <h1>Facepage</h1>
        <img alt="Facepage logo" src={fpLogo} />
        <h4>All your friends, for every page of your life.</h4>
      </div>
      <div className="left-section-mid">mid</div>
      {/* make sliding array items linked to section bot array items as they move */}
      <div className="left-section-bot">
        {/* make sliding array items linked to section mid images as they move */}
      </div>
    </div>
  );
}
