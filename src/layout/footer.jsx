import { NavLink, Outlet } from "react-router-dom";
import icon from "../assets/icon.svg";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";
import icon4 from "../assets/icon-4.svg";
import logo2 from "../assets/logo2.svg";
import downloadIcon from "../assets/downloadIcon.svg";
import { enqueueSnackbar } from "notistack";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div
        style={{ minHeight: "100vh" }}
        className="flex items-center justify-between flex-col footerContainer  "
      >
        <div></div>
        <div>
          <h3 className="footerHeader text-3xl md:text-5xl mb-10 ">
            Embrace Wellbeing <br /> Elevate Life!
          </h3>
        </div>
        <div className=" footer  w-full flex items-end  ">
          <div className="flex justify-end items-end container w-full">
            <div className="md:w-1/2 w-full  flex md:justify-start  flex-col  md:items-start">
              <div className="flex flex-col items-center">
                <img src={logo2} alt="inflated" />
                <button
                  onClick={() =>
                    enqueueSnackbar("Coming Soon!", { variant: "success" })
                  }
                  className="buttonH1 text-white px-10 py-5"
                >
                  Download
                  <img
                    src={downloadIcon}
                    style={{ width: "30px", marginLeft: "10px" }}
                    alt="download icon"
                  />
                </button>
                <div className="flex  mt-5">
                  <img
                    src={icon}
                    style={{ width: "35px", marginLeft: "10px" }}
                    alt="download icon"
                  />
                  <img
                    src={icon1}
                    style={{ width: "35px", marginLeft: "10px" }}
                    alt="download icon"
                  />
                  <img
                    src={icon2}
                    style={{ width: "35px", marginLeft: "10px" }}
                    alt="download icon"
                  />
                  <img
                    src={icon3}
                    style={{ width: "35px", marginLeft: "10px" }}
                    alt="download icon"
                  />
                  <img
                    src={icon4}
                    style={{ width: "35px", marginLeft: "10px" }}
                    alt="download icon"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end ">
              <ul className="navigation text-white flex-col ">
                <li className="my-2 text-start">
                  <span className="text-white font-bold">Links</span>
                </li>
                <li className="my-1">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) => {
                      return isActive && " font-bold";
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to={"/privacy-policy"}
                    className={({ isActive }) => {
                      return isActive && " font-bold";
                    }}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to={"/terms-condition"}
                    className={({ isActive }) => {
                      return isActive && " font-bold";
                    }}
                  >
                    Term and Conditions
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive && " font-bold";
                    }}
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
