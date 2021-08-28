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
    <div>
      {" "}
      <GroupMemberBar />{" "}
    </div>
  );
};

export default Grouptable;
