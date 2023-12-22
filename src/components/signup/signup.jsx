import React, { useState, useContext } from "react";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navigation/navigation";
import { FirebaseContext,AuthContext } from "../../store/FirebaseContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Signup = () => {
  const firestore = getFirestore();
  const navigate = useNavigate();
  const {user, setUser}=useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { firebaseApp } = useContext(FirebaseContext);
  const auth = getAuth(firebaseApp);

  const handleSubmit = async (e) => {
    // console.log("E in handlesubmit : ", e);
    setUser({...user,loader:true})
    e?.preventDefault();

    const usersCollection = collection(firestore, "users");
    const querySnapshot = await getDocs(usersCollection);
    let emailExists = false;
    let phoneExists = false;

    querySnapshot.docs.forEach((doc) => {
      const userData = doc.data();
      if (userData.email === email) {
        emailExists = true;
      }
      if (userData.phone === phone) {
        phoneExists = true;
      }
    });

    if (emailExists) {
      document.getElementById("errMsg").innerText = "Email already Exists";
      return;
    }
    if (phoneExists) {
      document.getElementById("errMsg").innerText =
        "Phone Number already Exists";
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            addDoc(usersCollection, {
              id: user.uid,
              username: username,
              phone: phone,
              email: email,
              password: password,
            })
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                console.error("Error adding using to firestore", error);
              });
          })
          .catch((error) => {
            console.error("Error Updating Profile", error);
          });
      })
      .catch((error) => {
        if (error.message.includes("(auth/invalid-email)")) {
          document.getElementById("errMsg").innerText =
            "Invalid email Format! Please enter a valid Email ";
        } else {
          document.getElementById("errMsg").innerText =
            "Server Timed out! Please try again after some time";
        }
        console.log("Error : ", error);
      });
      setUser({...user,loader:false})
      
  };
  return (
    <div>
      <Navbar />
      <div className="login_container">
      
        <div className="login_form_container">
          <div className="left">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                required
                autoComplete="on"
                className="input"
                onChange={(e) => {
                  const formattedUserName = e.target.value.replace(
                    /[^A-Za-z ]/g,
                    ""
                  );
                  // console.log("formatted user name \t",formattedUserName)

                  setUsername(formattedUserName);
                }}
              />
              <input
                placeholder="Email"
                required
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                autoComplete="on"
              />
              <input
                className="input"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  const formatedPhone = e.target.value.replace(/\D/g, "");
                  if (formatedPhone.length <= 10) {
                    setPhone(formatedPhone);
                  }
                }}
                name="phone"
                pattern="[0-9]"
                title="Please Enter only digits, Maximum 10 digits"
                minLength={10}
                maxLength={10}
                required
                autoComplete="on"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                title="Password Should contain 6 characters"
                autoComplete="on"
                required
              />
<p id='errMsg'></p>

              <button type="submit" className="signin">
                Sign Up
              </button>
            </form>
            <div className="signup-div">
              <h1>Welcome Back</h1>
              <Link to="/login">
                <button type="button" className="signup">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
