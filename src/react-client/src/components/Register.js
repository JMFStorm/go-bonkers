import React, { useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerUser, setError } from "../redux/userActions";
import logo from "../images/logo.png";

const schema = yup.object().shape({
  username: yup.string().min(5).required(),
  password: yup.string().min(5).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const setStyle = {
  fontSize: "15px",
  padding: "15px",
  color: "rgb(26, 26, 110)",
};

const Register = ({ setIsLogin, setOpen }) => {
  const dispatch = useDispatch();

  const registerError = useSelector((state) => state.user.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    return () => {
      dispatch(setError(null));
    };
  }, []);

  const submitForm = async (data) => {
    await dispatch(registerUser({ username: data.username, password: data.password }));
  };

  const usernameChange = () => {
    dispatch(setError(null));
  };

  return (
    <div>
      <Modal.Header style={setStyle}>Rekisteröidy</Modal.Header>
      <Modal.Content>
        <div>
          <form onSubmit={handleSubmit(submitForm)} className="login-wrapper">
            <section className="login-header">
              <img src={logo} />
            </section>

            <section className="login-inputs">
              <input {...register("username")} onChange={usernameChange} type="text" placeholder="Käyttäjätunnus" />
              <input {...register("password")} type="password" placeholder="Salasana" />
              <input {...register("confirmPassword")} type="password" placeholder="Varmista salasana" />
              {registerError && <p className="error">{registerError}</p>}
              {errors.username && <p className="error">Käyttäjätunnuksen täytyy olla vähintään 5 merkkiä pitkä</p>}
              {errors.password && <p className="error">Salasanan täytyy olla vähintään 5 merkkiä pitkä</p>}
              {errors.confirmPassword && <p className="error">Salasanojen täytyy täsmätä</p>}
              <Button className="signin-Btn" variant="contained" id="test">
                Rekisteröidy
              </Button>
            </section>

            <section className="login-newUser">
              <div>
                Onko sinulla jo tili?
                <button className="modal-button" onClick={() => setIsLogin(true)}>
                  Kirjaudu tästä
                </button>
              </div>
            </section>
          </form>
        </div>
      </Modal.Content>
    </div>
  );
};

export default Register;
