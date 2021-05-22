import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/investigator.png";

const NotFound = () => {
  const history = useHistory();

  // Back to main page
  const goBack = () => {
    // eslint-disable-next-line fp/no-mutating-methods
    history.push("/search");
  };

  return (
    <div className="page-container notFound--page">
      <div className="notFound--wrapper">
        <div className="notFound--heading">
          <h3>404</h3>
        </div>
        <div className="notFound--row">
          <div>
            <figure>
              <img src={logo} alt="" />
            </figure>
          </div>
          <div className="notFound--text">
            <h4>Sivua ei löytynyt.</h4>
          </div>
        </div>
        <button onClick={goBack} type="button" className="notFound--button">
          Takaisin
        </button>
      </div>
    </div>
  );
};

export default NotFound;
