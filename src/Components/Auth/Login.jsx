import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import "./Auth.css"; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, // Pass the auth object as the first argument
        email,
        password
      );
      // Redirect or show a success message
      alert("Login successful");
      navigate('/HomePage');
      console.log(userCredential);
    } catch (error) {
      // Handle login errors
      console.log(error);
      alert("Login Failed, recheck your entries");
    }
    
  };
  

  return (
    <div className="auth-container">
      
      <form className="auth-form" onSubmit={handleLogin}>
      <h2>Login</h2>
        <div>
          <label htmlFor="Email">Enter your Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        
        <div>
          <label htmlFor="Email">Enter your Email</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit">Login</button>
        <p>No account yet? SignUp <span> <Link to="/Signup">here</Link></span></p>
      </form>
    </div>
  );
}

export default Login;
