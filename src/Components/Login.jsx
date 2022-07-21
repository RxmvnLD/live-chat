import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { baseURL } from "../config";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    dispatch(login(email.value, password.value));
  };
  return (
    <>
      <>
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
          <h2 className="text-xl font-semibold">INGRESA A TU CUENTA</h2>
          <p>Por favor ingresa tu e-mail y contraseña</p>
          <form
            onSubmit={loginHandler}
            className="flex flex-col items-center gap-3"
          >
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border-2 border-gray-200 rounded"
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              className="border-2 border-gray-200 rounded"
            />
            <Button
              color="bg-sky-500"
              onSubmit={(event) => {
                loginHandler(event);
              }}
            >
              Iniciar sesión
            </Button>
          </form>
          <p>
            ¿No tienes una cuenta?{" "}
            <Link to="/signup" className="hover:font-bold hover:text-sky-500 ">
              Crear una cuenta
            </Link>
          </p>
          <a href={`${baseURL}/auth/google`}>
            <Button textColor={"text-black"} styles="border-2 border-gray-400">
              <span className="flex flex-row items-center">
                <FcGoogle className="mx-2 my-1 text-xl" />
                Iniciar sesión con Google
              </span>
            </Button>
          </a>
          <a href={`${baseURL}/auth/facebook`}>
            <Button color="bg-blue-600">
              <span className="flex flex-row items-center">
                <BsFacebook className="mx-2 my-1 text-xl" />
                Iniciar sesión con Facebook
              </span>
            </Button>
          </a>
        </div>
      </>
    </>
  );
};

export default Login;
