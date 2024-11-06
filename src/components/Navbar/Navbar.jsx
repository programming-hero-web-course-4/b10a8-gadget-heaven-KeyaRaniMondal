import { Link, NavLink, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
    const location = useLocation();

    const isHome = location.pathname === '/';

    const navbarStyle = {
        backgroundColor: isHome ? '#9538E2' : '#FFFFFF',  
    };

    const logoStyle = {
        color: isHome? '#FFFFFF' : '#0B0B0B',  
    };

    const linkStyle = {
        color: isHome ? '#FFFFFF' : '#0B0B0BB3', 
    };

    const link = <>
        <li><NavLink to={'/'} style={linkStyle}>Home</NavLink></li>
        <li><NavLink to={'/statics'} style={ linkStyle}>Statistics</NavLink></li>
        <li><NavLink to={'/dashboard'} style={linkStyle}>Dashboard</NavLink></li>
        <li><NavLink to={'/contact'} style={linkStyle}>Contact</NavLink></li>
    </>
    return (
        <nav style={navbarStyle} className="navbar  py-14">
            <div className="navbar-start ml-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5 text-[#FFFFFF]">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-[#FFFFFF]" style={logoStyle}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-[#FFFFFF]">
                    {link}
                </ul>
            </div>
            <div className="navbar-end mr-10">
                <button className="btn btn-circle btn-outline mr-5 bg-[#FFFFFF]">
                    <TiShoppingCart className="w-8 h-8" />
                </button>
                <button className="btn btn-circle btn-outline bg-[#FFFFFF]">
                <GiSelfLove className="w-8 h-8" />
                </button>
            </div>
          </nav>
    )
}
export default Navbar;




