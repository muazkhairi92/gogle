import {NavLink,Outlet} from 'react-router-dom';
import { LowerNav } from './LowerNav';
import { UpperNav } from './UpperNav';

export const Layout = () => {

    return (
      <>
      <UpperNav/>
        <main style={{ padding: '1rem 1rem 1rem 1rem', marginTop:"5%",marginBottom:"5%", display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",justifyItems:"center", width:"100%"}}>
          <Outlet />
        </main>
      <LowerNav/>
 </>
    );
  };