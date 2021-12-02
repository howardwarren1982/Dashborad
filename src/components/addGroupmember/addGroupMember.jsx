import React from "react";
import "../addGroupmember/addGoupMember.style.scss";

//functional component named addGroupMember
const AddGroupMember = () => {
  return (
    <div className="addGroupMemberBox">
      <h4 className="header">Add Group Member</h4>
      <input type="text" className="get-name" placeholder="Name" />
      <button className="add-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default AddGroupMember;
