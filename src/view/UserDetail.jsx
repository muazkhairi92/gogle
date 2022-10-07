
import {useSelector, useDispatch} from 'react-redux';
import { useEffect,useState } from "react";
import { getUser } from '../api/users';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


const UserDetail = () => {


  // const {users} = useSelector(state=>state.user);
  // const dispatch = useDispatch();  
  // const setUsers = (data)=>dispatch({type:'SET_USER_STATE',payload:{users:data}})
  // const fetchUsers = async()=>{
  //   const response = await getUser();
  //   console.log(response.data);
  //   if(response.status === 200 && response.data){
  //       setUsers(response.data);
  //   }
    
    const fetchUsers=()=>{
      return axios.get('https://randomuser.me/api/')
  }
  const {data, isLoading,isError,error,isFetching,refetch} = useQuery(["results"],fetchUsers,{
      enabled:true,
      onSuccess:(res)=>{console.log('tahniah',res)
  },
  onError:(res)=>{console.log('error',res)}
});
// };

// useEffect(()=>{fetchUsers();},[]);
// console.log(users);

  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:'center',alignItems:"center",width:"90vw",justifyItems:"center"}}>
    <div style={{display:"flex",flexDirection:"column", justifyContent:'center',alignItems:"center",width:"65%",justifyItems:"center", backgroundColor:"#E1CEB5", padding:"2% 2% 2% 2%", borderRadius:"10%"}}>
        <img src={data?.data?.results[0].picture.medium} style={{borderRadius:"35%",width:"30%",height:"30%"}}/>
      <h2>Hello, {data?.data?.results[0].name.title} {data?.data?.results[0].name.first} {data?.data?.results[0].name.last} </h2>
      <p>Email: {data?.data?.results[0].email} </p>
      <p>Phone: {data?.data?.results[0].phone} </p>
      <p>Cell: {data?.data?.results[0].cell} </p>
      <p>Address: {data?.data?.results[0].location.street.number} {data?.data?.results[0].location.city} {data?.data?.results[0].location.state} {data?.data?.results[0].location.postcode} {data?.data?.results[0].location.country}</p>
    </div>
    </div>
  );
}

export default UserDetail;