import React, { useState } from "react";
import GroupMemberBar from "./memberBar/groupMemberBar";
import data from "../group-time.json";

const Grouptable = () => {
  //setup state hook
  const [groupData, setGroupData] = useState([data]);

  //function to export groupData to json file
  function exportGroupData() {
    const data = JSON.stringify(groupData);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "group-time.json";
    a.click();
  }

  //set groupData to data from json file

  return (
    <div className="bar">
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box no-header clearfix">
              <div className="main-box-body clearfix">
                <div className="table-responsive container">
                  <button
                    type="button"
                    class="btn btn-success save-all"
                    onClick={exportGroupData}
                  >
                    SAVE ALL
                  </button>

                  {groupData[0].dataOutput.map((group, index) => (
                    <GroupMemberBar
                      key={index}
                      name={group.name}
                      hours={group.hours}
                      placements={group.place}
                      video={group.vid}
                      returns={group.returns}
                      studies={group.studies}
                      notes={group.notes}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grouptable;
