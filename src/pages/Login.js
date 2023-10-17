import React, { useState } from "react";
import { signin, signUp, signInWithGoogle } from "../config/Auth";
import "./login.css";
import { toast, Toaster } from "react-hot-toast";
import sample from "../images/loginvid.mp4";

function Login() {
  <Toaster />;
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [confpassword, setConfPassword] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setemail(value);
    if (name === "password") setPassword(value);
    if (name === "confpassword") setConfPassword(value);
  };

  const handleToggleSignup = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      if (password === confpassword) {
        try {
          await signUp(email, password);
          toast.success("User Created Successfully!");
          window.location.href = `/`;
        } catch (error) {
          toast.error(`Error: ${error.response.data.message} Try Again!`);
        }
      } else {
        toast.error("Passwords do not match!");
      }
    } else {
      try {
        const success = await signin(email, password);
        if (success) {
          toast.success("Login successful!");
          window.location.href = "/";
        } else {
          toast.error("Invalid email or password. Try Again!");
        }
      } catch (error) {
        toast.error(`${error.message}. Try Again!`);
      }
    }
  };

  return (
    <div>
      <div className="split left">
        <div className="centered">
          <video className="videoTag" autoPlay muted width="125%">
            <source src={sample} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="split right">
        <div className=" col-lg-6 col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    id="name"
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Id"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  id="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">jhsgdwhefndwebPassword</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  id="password"
                />
              </div>
              {isSignup && (
                <>
                  <div className="form-group">
                    <label htmlFor="confpassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confpassword"
                      name="confpassword"
                      placeholder="Confirm Password"
                      value={confpassword}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div className="mt-3">
                <button type="submit" className="btn btn-black">
                  {isSignup ? "Signup" : "Login"}
                </button>
                <button
                  type="submit"
                  onClick={signInWithGoogle}
                  className="btn btn-black"
                  style={{ paddingLeft: "5px" }}
                >
                  signInWithGoogle
                </button>
              </div>
            </form>
            <p className="mt-3">
              {isSignup ? (
                <span>
                  Already have an account?{" "}
                  <button
                    className="btn btn-link p-0"
                    onClick={handleToggleSignup}
                  >
                    Continue
                  </button>
                </span>
              ) : (
                <span>
                  Don't have an account?{" "}
                  <button
                    className="btn btn-link p-0"
                    onClick={handleToggleSignup}
                  >
                    Signup
                  </button>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>

    //  <div>
    //     <div className="sidenav">
    //       <div className="login-main-text">
    //         <h2>{isSignup ? "SignUp" : "Login"}</h2>
    //         <p>Login or register from here to access.</p>
    //       </div>
    //     </div>

    //   </div>
  );
}

export default Login;
