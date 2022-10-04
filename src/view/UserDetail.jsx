
import {useSelector, useDispatch} from 'react-redux';
import { useEffect,useState } from "react";
import { getUser } from '../api/users';


const UserDetail = () => {


  const {users} = useSelector(state=>state.user);
  const dispatch = useDispatch();  
  const setUsers = (data)=>dispatch({type:'SET_USER_STATE',payload:{users:data}})
  const fetchUsers = async()=>{
    const response = await getUser();
    console.log(response.data);
    if(response.status === 200 && response.data){
        setUsers(response.data);
    }
    
};

useEffect(()=>{fetchUsers();},[]);
console.log(users);

  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:'center',alignItems:"center"}}>
        <img src={users.results[0].picture.medium} style={{borderRadius:"35%",width:"50%",height:"50%"}}/>
      <h2>Hello {users.results[0].name.title} {users.results[0].name.first} {users.results[0].name.last} </h2>
      <p>Email: {users.results[0].email} </p>
      <p>Phone: {users.results[0].phone} </p>
      <p>Cell: {users.results[0].cell} </p>
      <p>Address: {users.results[0].location.street.number} {users.results[0].location.city} {users.results[0].location.state} {users.results[0].location.postcode} {users.results[0].location.country}</p>
    </div>
  );
}

export default UserDetail;