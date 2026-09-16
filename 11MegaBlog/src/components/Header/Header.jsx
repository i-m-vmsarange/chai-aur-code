import React from "react";
import { Container, LogoutBtn, Logo } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => {
    return state.auth.status;
  });

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About",
      slug: "/about",
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width={"70px"} />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item, index) => {
              return item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                    }}
                    className="px-4 py-2 rounded-full duration-200 hover:bg-blue-100"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null;
            })}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
