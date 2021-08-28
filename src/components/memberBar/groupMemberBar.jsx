import React from "react";
import "../memberBar/memberBar.style.scss";

const GroupMemberBar = () => {
  return (
    <div className="bar">
      <div className="name">Name </div>
      <div className="vids">Videos</div>
      <div className="hours">Hours</div>
      <div className="placements">Placements</div>
      <div className="returns">returns</div>
      <div className="studies">studies</div>
      <div className="note">notes</div>
    </div>
  );
};

export default GroupMemberBar;
