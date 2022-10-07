import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { array } from "yup";
import { loginAPI } from "../api/auth";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  
  const navigate = useNavigate();
  
  const signin = async (luser) => {
      const { userss } = await loginAPI();
      setUsers(userss);
      let emailSame = null;
      let passSame = null;

      userss.map((u)=>{
        emailSame = luser.email.match(u.email);
        if(emailSame){
            passSame = luser.cpassword.match(u.password);
            if(passSame){
                setToken(u.token);
                setUser(u);
                navigate('/email');
            }
            else{
            navigate('not-authorized');
            }
        }
    }
    );
    if(!emailSame){
        if(!passSame){
        navigate('not-authorized');
        }
    }
  };

  const signout = () => {
    setToken(null);
  };

  const register = async (ruser) => {
    const { userss } = await loginAPI();
        userss.push(ruser);
    }
    // return userss;



  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        users,
        signin,
        signout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;