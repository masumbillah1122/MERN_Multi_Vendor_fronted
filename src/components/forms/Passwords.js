import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Passwords = ({ setOpen }) => {

  const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const submitHandlerPassword = async(e) => {
    e.preventDefault();
   
    //if equal pass with r_pass
    if (password === rPassword) {
       try {
         const { data } = await axios.put("/api/users/update", {
           _id: userInfo._id,
           password,
         });
         localStorage.removeItem("userInfo", JSON.stringify(data));
         alert("Password updated successfully!");
         navigate("/login");

       } catch (error) {
         alert("Password not update");
      }
      
    }else{

      alert("Password doesn't match");
    }

  }

  return (
    <div className="passwords">
      <form onSubmit={submitHandlerPassword}>
        <div className="close-form" onClick={() => setOpen(false)}>
          X
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="pass"
          />
        </div>
        <div className="form-group">
          <label htmlFor="r_pass">Retype Password</label>
          <input
            required
            type="password"
            onChange={(e) => setRPassword(e.target.value)}
            value={rPassword}
            id="r_pass"
          />
        </div>
        <div className="form-btn">
          <button>
            <FontAwesomeIcon icon={faRefresh} /> Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Passwords
