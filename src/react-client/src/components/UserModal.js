import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

import Login from "./Login";
import Register from "./Register";
import SignupButtons from "./SignupButtons";

const UserModal = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const setStyle = {
    borderRadius: "2px",
    width: "500px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <Modal
      style={setStyle}
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<SignupButtons setOpen={setOpen} setIsLogin={setIsLogin} />}
    >
      {isLogin ? (
        <Login setOpen={setOpen} setIsLogin={setIsLogin} />
      ) : (
        <Register setOpen={setOpen} setIsLogin={setIsLogin} />
      )}
    </Modal>
  );
};

export default UserModal;
