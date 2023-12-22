import React,{useEffect,useState,useContext} from 'react';
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../navigation/navigation";
import "./login.css";
import { FirebaseContext,AuthContext } from '../../store/FirebaseContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebaseApp } = useContext(FirebaseContext);
  const {user, setUser}=useContext(AuthContext);

  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setUser({...user,loader:true})
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("login succesful \t",userCredential);
        const user_obj = userCredential?.user
        setUser({...user,isLogged : true,userName:user_obj?.displayName,loader:false});
        console.log("user context \t",{...user},"\n usercredential \t",user_obj);
        navigate("/");
      
      })
      .catch((error) => {
        console.log("LOGIN ERROR", error);
        if (error.message.includes("email")) {
          document.getElementById("errMsg").innerText =
            " Invalid Email Format, Please use a valid Email";
        } else if (error.message.includes("credentials")) {
          document.getElementById("errMsg").innerText =
            "Email or password may be incorrect ";
        } else {
          document.getElementById("errMsg").innerText =
            "Server Timed out, Try again after some time";
        }
      });
  };

  return (
    <div>
      <Navbar />

      <div className="login_container">
        <div className="login_form_container">
          <div className="left">
            <form className="form_container">
              <h1>
                Login to Your <span>Account</span>
              </h1>
              <input
                className="input"
                type="email"
                placeholder='Email'
                value={email}
          
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
              <input
                className="input"
                type="password"
                placeholder='Password'
                value={password}
                id="lname"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              <button onClick={handleLogin} type="submit" className="signin">
                Sign In
              </button>
            </form>
            <div className="signup-div">
              <h1>New Here ?</h1>
              <Link to="/signup">
              <p id='errMsg'></p>
                <button type="button" className="signup">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
