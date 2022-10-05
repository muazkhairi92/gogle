import {NavLink} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const UpperNav = () => {

    const { signout, token, user } = useAuth();
    const style = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color:"black"
      });

    return (
        <nav
        style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
            paddingTop: '1rem',
            paddingRight: '10%',
            width:"95vw",
            display:"flex",
            justifyItems:'flex-end',
            justifyContent:"flex-end",
            gap:"2%",
            position:"fixed",
            top:"0",
            backgroundColor:"beige"
        }}
      >
        {user?.roles.includes('admin') && token ?<NavLink to="/users" style={style}>Users</NavLink> : null}
        {token ?<NavLink to="/email/:id" style={style}>Email</NavLink> : null}
        {token ?<NavLink to="/userdet" style={style}>User Detail</NavLink> : null}
        {/* <NavLink to="/universities" style={style}>Universities</NavLink> */}
        {token ? <NavLink onClick={() => signout()}>Logout</NavLink> : <NavLink to="/login" style={style}>Log In</NavLink>}
      </nav>
    );

}