import React from "react";
import "../memberBar/memberBar.style.scss";

const GroupMemberBar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();

    const form = document.querySelectorAll(".form-control");
    const h3 = document.querySelectorAll(".output");
    //loop through the form-control values and set nearest h3 to the value
    for (let i = 0; i < form.length; i++) {
      if (form[i].value === "") {
        h3[i].innerHTML = h3[i].innerHTML;
        continue;
      }
      h3[i].innerHTML = form[i].value;
    }

    //load a json file
    const xhr = new XMLHttpRequest();
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
            <h3 className="output">{hours}</h3>
            <input
              type="text"
              className="form-control input"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3 className="output">{placements}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3 className="output">{video}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3 className="output">{returns}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3 className="output">{studies}</h3>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <p className="output">{notes}</p>
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
