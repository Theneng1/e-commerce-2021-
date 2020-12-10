import React from "react";
import "./homepage.style.scss";
import Directory from "../components/directory/directory.component";
import { withRouter } from "react-router-dom";

const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default withRouter(HomePage);
