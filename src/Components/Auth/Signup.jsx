import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";
import "./Auth.css"; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, // Pass the auth object as the first argument
        email,
        password
      );
    
      // Redirect or show a success message
      console.log(userCredential);
    }
      catch (error) {
      // Handle signup errors
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      
      <form className="auth-form" onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <label>Enter your Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

       <label>Enter your Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account? Login <span> <Link to="/Login">here</Link></span></p>
      </form>
    </div>
  );
}

export default Signup;
