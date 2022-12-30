import React from "react";
import "./register-log.css";
import Link, { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });
      await setDoc(doc(db, "user", res.user.uid), {});
      navigate("/");
    } catch (e) {
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wraper">
        <span className="logo">Muly chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="eamil" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {err && <span>Somthing went wrong</span>}
          <button>Sign up</button>
        </form>
        <p>Already Registered ? Login</p>
      </div>
    </div>
  );
};

export default Register;
