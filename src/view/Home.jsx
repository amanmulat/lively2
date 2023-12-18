import { enqueueSnackbar } from "notistack";
import menu from "../../public/assets/Menu.svg";
import close from "../../public/assets/close.svg";
import downloadIcon from "../../public/assets/downloadIcon.svg";
import inflated from "../../public/assets/inflated.png";
import logo from "../../public/assets/logo.svg";
import logo3 from "../../public/assets/logo3.svg";
import phoneFlat2 from "../../public/assets/phoneFlat2.png";
import phoneFront from "../../public/assets/phoneFront.png";
import phoneTilt from "../../public/assets/phoneTilt.png";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
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
  // ("fullTab  leading-10 text-black  rounded fixed md:relative h-[100vh] md:h-0 w-[100%] md:w-fit top-0 left-[0] -translate-x-full transition-all duration-300 md:transition-none  text-start  bg-white md:hidden  ");
  return (
    <>
      <div>
        <div
          style={{
            minWidth: "100%",
            background:
              "  linear-gradient(106deg, #008579 22.06%, #00BA63 77.94%)",
          }}
          className="md:min-h-screen   "
        >
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
                <ul className="navigation text-white hidden md:block">
                  <li>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) => {
                        return isActive && " font-bold";
                      }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/privacy-policy"}
                      className={({ isActive }) => {
                        return isActive && " font-bold";
                      }}
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/terms-condition"}
                      className={({ isActive }) => {
                        return isActive && " font-bold";
                      }}
                    >
                      Term and Conditions
                    </NavLink>
                  </li>
                  <li>
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
                  <img alt="Menu" className="cursor-pointer" src={menu} />
                </label>
              </div>
            </div>
          </nav>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              alignItems: "center",
              padding: "70px 0",
            }}
            className="container md:h-[calc(100vh-100px)] "
          >
            <div style={{ position: "relative" }} className="">
              <h1 className="text-7xl lg:text-very 2xl:text-super md:text-9xl  mainText text-white">
                Better <br /> Living
              </h1>
              <img
                src={phoneTilt}
                alt="applook"
                className="phoneTilt w-24 md:w-48 md:-right-[100px] lg:-right-[120px] 2xl:w-96 2xl:-right-[200px] "
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() =>
                    enqueueSnackbar("Coming Soon!", { variant: "success" })
                  }
                  className="buttonH1 text-white px-10 mt-5 py-3"
                >
                  Download
                  <img
                    src={downloadIcon}
                    style={{ width: "30px", marginLeft: "10px" }}
                    alt="download icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:min-h-screen items-center container">
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end ">
            <img
              src={inflated}
              className="lg:mr-28 lg:w-96 w-64"
              alt="inflated"
            />
          </div>
          <div className="lg:w-1/2 w-full flex justify-start flex-col">
            <h2 className="h2size text-start font mb-5 ">About</h2>
            <p className="text-start paragTwo  mb-5">
              Lively offers a wealth of resources to help you on your path to
              mental wellness, such as counseling sessions, nearby mental health
              institutions, and expert advice. You can succeed in your journey
              for mental wellness and find a better tomorrow with Lively by your
              side. Come along with us today as we embark on a life-changing
              journey with your committed mental health partner.
            </p>
            <div className="flex justify- py-3">
              <button className="button2 py-4 px-8">Lets Talk</button>
            </div>
          </div>
        </div>
        <div className="flex md:min-h-screen ">
          <div className="thirdSection md:py-16 md:mx-9 md:mb-9">
            <div className="container">
              <h2 className="h2size mb-6 hidden lg:block text-center ">
                How Lively works
              </h2>
              <div className="flex flex-col lg:flex-row">
                <div className=" w-full lg:w-1/2 flex  justify-center lg:justify-end ">
                  <div className="w-full flex flex-col justify-center items-center lg:items-end">
                    <div className="phoneFrontBg lg:mr-28 lg:w-80 flex justify-center w-64">
                      <img src={phoneFront} className="" alt="inflated" />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-start flex-col mainContent">
                  <h2 className="h2size text-center  lg:hidden ">
                    How Lively works
                  </h2>

                  <ul className="s3ul">
                    <li>
                      <h3 className="lg:text-2xl">01- Download Lively Today</h3>
                      <p className="lg:text-lg">
                        Embrace a brighter future by downloading Lively! Our
                        mobile application is your gateway to a world of
                        improved mental wellbeing.
                      </p>
                    </li>
                    <li>
                      <h3 className="lg:text-2xl">
                        02- Find Nearby Mental Institutions
                      </h3>
                      <p className="lg:text-lg">
                        Discover nearby mental health institutions that align
                        with your needs. Lively&apos;s search feature helps you
                        find reputable and trustworthy mental health facilities
                        in your area.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="lg:text-2xl">
                        03- Book an Appointment with Therapist
                      </h3>
                      <p className="lg:text-lg">
                        Take a proactive step towards healing by booking an
                        appointment with a dedicated therapist. Lively provides
                        a seamless booking system that allows you to schedule in
                        person sessions with experienced professionals.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="lg:text-2xl">
                        04- Book a Phone Therapy Session Here
                      </h3>
                      <p className="lg:text-lg">
                        Experience convenient and effective therapy by booking a
                        phone session through Lively. We understand the need for
                        flexibility and accessibility in today&apos;s fast-paced
                        world.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ minHeight: "70vh" }}
          className=" py-24 lg:py-32 t4section flex"
        >
          <div className="  flex items-center justify-center flex-col container ">
            <div className="w-3/5  max-w-xl">
              <img src={phoneFlat2} className="w-full" alt="inflated" />
            </div>
            <h3 className="h34 text-8xl ">Lively</h3>
            <div className="flex items-center justify-between livelyList">
              <h4 className="text-white md:text-lg sm:text-base">
                Get Healthy
              </h4>
              <div className="dot mx-5" />
              <h4 className="text-white md:text-lg sm:text-base">
                Be yourself
              </h4>
              <div className="dot mx-5" />
              <h4 className="text-white md:text-lg sm:text-base">
                Live Better
              </h4>
            </div>
            <button className="button4 py-5 my-8">Get the App</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
