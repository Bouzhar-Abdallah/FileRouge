import React from "react";
import { Avatar } from "flowbite-react";
import { Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../features/login/loginSlice";
export default function NavbarComp() {
  const { user, isLoggedIn, isLoading, role } = useSelector(
    (state) => state.login
  );
  /* console.log('user', user)
  console.log('role', role) */
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutRequest());
  };

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
      <div className="flex md:order-2 hid">
        {isLoggedIn && (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <svg
                alt="User settings"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonjour</span>
              <span className="block truncate text-sm font-medium">
                {user.name}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="fantazy">Fantazy</Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            {isLoggedIn && (
              <Dropdown.Item>
                <button onClick={handleLogout}>Sign out</button>
              </Dropdown.Item>
            )}
          </Dropdown>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/fixtures" active={false}>
          Fixtures
        </Navbar.Link>
        <Navbar.Link href="/signup" active={false}>
          Signup
        </Navbar.Link>
        <Navbar.Link href="/login" active={false}>
          Login
        </Navbar.Link>

        {/* <Link to="signup">signup</Link>
        <Link to="login">Login</Link>
        <Link to="standings">standings</Link>
        <Link to="/">fixtures</Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
