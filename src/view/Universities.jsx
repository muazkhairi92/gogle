import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from 'react-redux';
import { getUniversities } from "../api/universities";
import { useEffect,useState } from "react";


const Universities = () => {

//   const { users } = useAuth();
const [selectedCountry, setSelectedCountry] = useState('Malaysia');

  const {universities} = useSelector(state=>state.email);
  const dispatch = useDispatch();  
  const setUniversities = (data)=>dispatch({type:'SET_EMAIL_STATE',payload:{universities:data}})
  const fetchUniversities = async(country)=>{
    const response = await getUniversities(country);
    if(response.status === 200 && response.data && Array.isArray(response.data)){
      setUniversities(response.data);
    }
    // console.log(universities);
  };
// testtest
  useEffect(() => {
    if(selectedCountry) {fetchUniversities(selectedCountry);}
  }, [selectedCountry]);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h2>List of Universities in </h2>
      <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        {
          ['Malaysia', 'Singapore', 'Thailand', 'Indonesia'].map(c => (
            <option value={c}>{c}</option>
          ))
        }
      </select>


     <ol>
      { universities.map((u,i) => (
        <li key={i}>
          <p>{u.name}</p>
        </li>
      ))}
      </ol>
    </div>
  );
}

export default Universities;