import React, { useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import logo from "../images/logo.png";
import { loginUser, setError } from "../redux/userActions";

const setStyle = {
  fontSize: "15px",
  padding: "15px",
  color: "rgb(26, 26, 110)",
};

const Login = ({ setIsLogin, setOpen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const loginError = useSelector((state) => state.user.error);

  useEffect(() => {
    return () => {
      dispatch(setError(null));
    };
  }, []);

  const submitForm = async (data) => {
    await dispatch(loginUser({ username: data.username, password: data.password }));
  };

  return (
    <div>
      <Modal.Header style={setStyle}>Kirjaudu sisään</Modal.Header>
      <Modal.Content>
        <div>
          <form onSubmit={handleSubmit(submitForm)} className="login-wrapper">
            <section className="login-header">
              <img src={logo} />
            </section>
            <section className="login-inputs">
              <input {...register("username")} type="text" placeholder="Käyttäjätunnus" />
              <input {...register("password")} type="password" placeholder="Salasana" />
              {loginError && <p className="error">{loginError}</p>}
              <Button className="signin-Btn" variant="contained" id="test">
                Kirjaudu
              </Button>
            </section>
            <div className="login-newUser">
              <div>
                Uusi käyttäjä?
                <button className="modal-button" onClick={() => setIsLogin(false)}>
                  Rekisteröidy tästä
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal.Content>
    </div>
  );
};

export default Login;
