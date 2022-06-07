import { Outlet, useNavigate, NavLink } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();
    
    const back = () =>{
        navigate(-1);
    }

    const selected = {
        color : "green"
    }

    const styleFunc = ({isActive}) => (isActive ? selected : undefined)

    return (
        <div>
            <header>
                <NavLink to="/" style={styleFunc}>Home</NavLink> | 
                <NavLink to="/about" style={styleFunc}>About</NavLink> | 
                <NavLink to="/board" style={styleFunc}>Board</NavLink>
            </header>

            <main>
                <Outlet/>
                <button onClick={back}>뒤로가기</button>
            </main>
        </div>
    );
};

export default Layout;