import React from "react";
import "../memberBar/memberBar.style.scss";

const GroupMemberBar = (props) => {
  let inputBox = document.querySelectorAll("input");
  let inputBoxSibling = document.querySelectorAll("input ~ h3");

  function handleClick(e) {
    e.preventDefault();
    console.log({ inputBox, inputBoxSibling });
  }

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
            <input
              type="text"
              class="form-control name-input"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{hours}</h3>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{placements}</h3>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{video}</h3>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{returns}</h3>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <h3>{studies}</h3>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
          <td>
            <p>{notes}</p>
            <input
              type="text"
              class="form-control note-input"
              id="basic-url"
              aria-describedby="basic-addon3"
            ></input>
          </td>
        </tbody>
        <button type="button" class="btn btn-danger">
          Delete
        </button>
        <button type="button" class="btn btn-success" onClick={handleClick}>
          Save
        </button>
      </table>
    </div>
  );
};

export default GroupMemberBar;
