import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { auth } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
const Login = () => {
  const [fail_email, setfail_email] = useState(false);
  const [fail_passwd, setfail_passwd] = useState(false);
  const [LoginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const UpdateField = (e) => {
    setLoginError("");
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
  }, []);

  useEffect(() => {
    if (user !== "" && user !== null) {
      navigate("/Shop/");
    }
  }, [user, navigate]);

  const login = async (e) => {
    e.preventDefault();
    checkInputValue();
    if (form.email !== "" && form.password !== "") {
      try {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        setLoginError("");
      } catch (error) {
        setLoginError(() => {
          console.log(error.message);
          if (error.message.includes("user-not-found")) {
            return "User not found";
          } else if (error.message.includes("wrong-password")) {
            return "Wrong password";
          } else if (error.message.includes("too-many-requests")) {
            return "Too many requests try again later or reset password";
          } else {
            return "Something went wrong";
          }
        });
      }
    }
  };
  console.log(LoginError);
  const checkInputValue = () => {
    if (form.email === "") {
      setfail_email(true);
    } else {
      setfail_email(false);
    }
    if (form.password === "") {
      setfail_passwd(true);
    } else {
      setfail_passwd(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="loginPage">
      <div className="form_login">
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div className="login">
            <h2>Login</h2>
            <form>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={UpdateField}
                  name="email"
                />
                {fail_email ? <span>Enter your email</span> : null}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={UpdateField}
                  name="password"
                />
                {fail_passwd ? (
                  <span>Enter the password. The field cannot be empty</span>
                ) : null}
                {LoginError !== "" ? <span>{LoginError}</span> : null}
              </div>
              <button onClick={login}>
                <Link>Login</Link>
              </button>
            </form>
          </div>
        )}
        <div className="register">
          <div>
            <p>You do not have an account?</p>
            <button>
              {user ? (
                <Link>Create an account</Link>
              ) : (
                <Link to="/Shop/register">Create an account</Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
