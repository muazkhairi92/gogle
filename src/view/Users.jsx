import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from 'react-redux';


const Users = () => {

  const { users } = useAuth();
  const {userss} = useSelector(state=>state.email);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h2>This is the users database page</h2>


     <ol>
      { users.map((u,i) => (
        <li key={i}>
          <p>Name: {u.name}</p>
          <p>roles: {u.roles}</p>
          <p>Email: {u.email}</p>
        </li>
      ))}
      </ol>
    </div>
  );
}

export default Users;