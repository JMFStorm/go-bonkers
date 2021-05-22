import React from "react";
import { Button, Icon } from "semantic-ui-react";
import PersonIcon from "@material-ui/icons/Person";

const SignupButtons = ({ setOpen, setIsLogin }) => {
  return (
    <div className="signup-Buttons">
      <Button
        className="header-Button"
        onClick={() => {
          setOpen(true);
          setIsLogin(true);
        }}
      >
        <PersonIcon className="person-logo" />
      </Button>
    </div>
  );
};

export default SignupButtons;
