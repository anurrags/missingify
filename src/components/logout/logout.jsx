import React,{useContext} from "react";
import { AuthContext } from "../../store/FirebaseContext";
import { useNavigate } from "react-router-dom";
import "../navigation/navigation.css";

const Logout = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogout=()=>{
    setUser(user.loader=true) 
      setUser(user.isLogged=false)
      setUser(user.userName=undefined) 
      navigate("/");
      setUser(user.loader= false);

  }
  const handlelogoutno=()=>{

    navigate("/");

}
  

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize:"20px",
        padding:"50px",
        marginTop:"200px"
      }}
    >
      Are You Sure? <br/>
      <div className="button-link" onClick={handlelogout}>Yes</div>
      <div className="button-link" onClick={handlelogoutno}>No</div>
    </div>
  );
};

export default Logout;
