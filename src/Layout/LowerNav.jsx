import {NavLink} from 'react-router-dom';

export const LowerNav = () => {

    const style = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color:"black"
      });

    return (
        <nav
        style={{
            borderTop: 'solid 1px',
            paddingBottom: '1rem',
            paddingTop: '1rem',
            paddingLeft: '1rem',
            display:"flex",
            justifyContent:"flex-start",
            gap:"2%",
            position:"fixed",
            width:"100%",
            bottom:"0",
            backgroundColor:"beige"
        }}
      >
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/about" style={style}>About Us</NavLink>
        <NavLink to="/terms" style={style}>Terms</NavLink>
      </nav>
    );

}