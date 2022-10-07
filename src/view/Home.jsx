import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import {useSelector, useDispatch} from 'react-redux';


export const Home = () => {
    const [count, setCount] = useState(0);
 
    return (
    <div  style={{ padding: '1rem 0',display:"flex",alignItems:"center",justifyContent:"center",alignContent:"center",width:"90vw"}}>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div>
          <img src={reactLogo} alt="React logo" />
      </div>
      <h1>Vitact</h1>
      <div>
      <input placeholder='search..' style={{height:"30px", borderRadius:"10px"}}></input>
      <button type="submit"><i className="fa fa-search"></i></button>
      </div>
      <div >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  
      </div>
    </div>

      </div>
    );
  };