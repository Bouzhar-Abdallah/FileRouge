import React from "react";
import { Avatar } from "flowbite-react";
import { Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/login/loginSlice";
export default function NavbarComp() {
  const {user, isLoggedIn, isLoading, role} = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
  if (!isLoading) {   
    return (
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1680573228/botolapro-low-resolution-logo-color-on-transparent-background_jznqgy.png"
            className="mr-3 h-8 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BotolaPro
          </span>
        </Navbar.Brand>
        {isLoggedIn ? (
        
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <button onClick={handleLogout}>Sign out</button>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        ) : (
          <Link to="/login"> login</Link>
        )}
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Link to="signup">signup</Link>
          <Link to="login">Login</Link>
          <Link to="standings">standings</Link>
          <Link to="/">fixtures</Link>
  
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
