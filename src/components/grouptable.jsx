import React from "react";
import axios from "axios";
import { GOOGLE_SHEET_ID, SHEET_ONE, PRIVATE_KEY, CLIENT_EMAIL } from "../env";
import GroupMemberBar from "./memberBar/groupMemberBar";

const Grouptable = () => {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  return (
    <div className="bar">
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box no-header clearfix">
              <div className="main-box-body clearfix">
                <div className="table-responsive container">
                  <button type="button" class="btn btn-success">
                    SAVE ALL
                  </button>
                  <GroupMemberBar
                    name="Howard Warren"
                    hours="30"
                    placements="5"
                    video="3"
                    returns="6"
                    studies="9"
                    notes="Hello how are you"
                  />
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
