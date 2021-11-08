import React from "react";
import "../memberBar/memberBar.style.scss";

const GroupMemberBar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    let inputBox = document.querySelectorAll("input");
    let inputBoxSibling = document.querySelectorAll("input ~ h3");

    function inputBoxToObject(inputBox) {
      let obj = {};
      inputBox.forEach((input, i) => {
        obj[i] = input.value;
      });
      return obj;
    }

    const output = inputBoxToObject(inputBox);
    console.log(output);
    //save to json file in the root called group-time.json
    let data = JSON.stringify(output);
    //save JSON string to a local file in the browser
    let blob = new Blob([data], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "group-time.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  let { name, hours, placements, video, returns, studies, notes } = props;

  return (
    <div>
      <table className="table user-list">
        <thead>
          <tr>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Hours</span>
            </th>
            <th>
              <span>Placements</span>
            </th>
            <th>
              <span>Video showing</span>
            </th>
            <th>
              <span>Return visits</span>
            </th>
            <th>
              <span>Studies</span>
            </th>
            <th>
              <span>Notes</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <td>
            <h3>{name}</h3>
          </td>
          <td>
            <h3>{hours}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{placements}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{video}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{returns}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{studies}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <p>{notes}</p>
            <input
              type="text"
              className="form-control note-input"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
        </tbody>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
        <button
          type="button"
          className="btn btn-success update"
          onClick={handleClick}
        >
          Update
        </button>
      </table>
    </div>
  );
};

export default GroupMemberBar;
