import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo3.svg";
import logo3 from "../assets/logo3.svg";
import menu2 from "../assets/Menu2.svg";
import close from "../assets/close.svg";

const MainLayout = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    if (isCheckboxChecked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isCheckboxChecked]);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const fullTabClasses = `fixed top-0 right-0 h-[100vh] text-start  bg-white md:hidden  w-[100%] md:w-fit transition duration-300 ${
    isCheckboxChecked ? "" : "translate-x-full "
  }`;
  return (
    <div>
      <nav className="z-10 relative ">
        <div className="navBar   ">
          <div className="navContainer items-center">
            <input
              type="checkbox"
              id="check"
              hidden
              onChange={handleCheckboxChange}
            />
            <NavLink to={"/"}>
              <img alt="lively Logo" className="w-32" src={logo} />
            </NavLink>

            <ul className="navigation  hidden md:block">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => {
                    return isActive && "navGreenActive font-bold";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/privacy-policy"}
                  className={({ isActive }) => {
                    return isActive && "navGreenActive font-bold";
                  }}
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/terms-condition"}
                  className={({ isActive }) => {
                    return isActive && "navGreenActive font-bold";
                  }}
                >
                  Term and Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return isActive && "navGreenActive font-bold";
                  }}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className={fullTabClasses}>
              <div className="flex justify-between p-6">
                <img alt="lively Logo" className="w-32" src={logo3} />
                <label htmlFor="check" className="float-right md:hidden">
                  <img alt="Menu" className="cursor-pointer" src={close} />
                </label>
              </div>
              <ul>
                <li className="border-b-2 py-2">
                  <NavLink
                    to={"/"}
                    onClick={() => {
                      setIsCheckboxChecked(false);
                    }}
                    className={({ isActive }) => {
                      return isActive
                        ? "navGreenActive font-bold ml-7"
                        : "ml-7";
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="border-b-2 py-2">
                  <NavLink
                    to={"/privacy-policy"}
                    onClick={() => {
                      setIsCheckboxChecked(false);
                    }}
                    className={({ isActive }) => {
                      return isActive
                        ? "navGreenActive font-bold ml-7"
                        : "ml-7";
                    }}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="border-b-2 py-2">
                  <NavLink
                    to={"/terms-condition"}
                    onClick={() => {
                      setIsCheckboxChecked(false);
                    }}
                    className={({ isActive }) => {
                      return isActive
                        ? "navGreenActive font-bold ml-7"
                        : "ml-7";
                    }}
                  >
                    Terms And Conditions
                  </NavLink>
                </li>

                <li className="border-b-2 py-2">
                  <NavLink
                    onClick={() => {
                      setIsCheckboxChecked(false);
                    }}
                    to={"/contact"}
                    className={({ isActive }) => {
                      return isActive
                        ? "navGreenActive font-bold ml-7"
                        : "ml-7";
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <label htmlFor="check" className="float-right md:hidden">
              <img alt="Menu" className="cursor-pointer w-6 h-6" src={menu2} />
            </label>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
