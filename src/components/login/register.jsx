import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./register.css";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
function Register() {
  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [fail_email, setfail_email] = useState(false);
  const [fail_passwd, setfail_passwd] = useState(false);
  const register = async (e) => {
    e.preventDefault();
    checkInputValue();
    if (registerEmail !== "" && registerPassword !== "") {
      try {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const [user, setuser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
  }, []);

  useEffect(() => {
    if (user !== "" && user !== null) {
      navigate("/");
    }
  }, [user, navigate]);

  const checkInputValue = () => {
    if (registerEmail === "") {
      setfail_email(true);
    } else {
      setfail_email(false);
    }
    if (registerPassword === "") {
      setfail_passwd(true);
    } else {
      setfail_passwd(false);
    }
  };

  return (
    <div className="register_page">
      <h1>Register</h1>
      <div className="register_form">
        <form>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => {
                setregisterEmail(e.target.value);
              }}
            />

            {fail_email ? <span>Enter your email</span> : null}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => {
                setregisterPassword(e.target.value);
              }}
            />
            {fail_passwd ? (
              <span>Enter the password. The field cannot be empty</span>
            ) : null}
          </div>
          <button onClick={register}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
