import React from "react";
import "./entry-page.css";
import SectionLeft from "./entry-sectionLeft";
import SectionRight from "./entry-sectionRight";

export default function EntryPage() {
  return (
    <div className="entry-page_main-container">
      <SectionLeft />
      <SectionRight />
    </div>
  );
}
