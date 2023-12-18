import contact from "../assets/contact.svg";
import location from "../assets/location.svg";
import call from "../assets/call.svg";
import mail from "../assets/mail.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import ld from "../assets/ld.svg";
import twitter from "../assets/twitter.svg";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("Thank You For Your Submission", { variant: "success" });
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <div className="flex flex-wrap">
        <div className="md:w-1/2 md:pr-8  w-full">
          <h1 className="contactHeader text-3xl font-bold mb-1">
            Get In Touch
          </h1>
          <h2>We are here for you! How can we help</h2>
          <form className="bg-white  rounded pt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Phone number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="submitButton hover:bg-green-700 w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-1/2 w-full mt-10 md:mt-0">
          <img
            src={contact}
            alt="contact banner "
            className="w-96 mx-auto md:w-[70%]"
          />
          <div className="">
            <div className="flex items-center gap-3 mb-2">
              <img src={location} alt="Location Icon" />
              <span>DH Geda | 7Th Floor| 704 | Bole, Addis Ababa</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={call} alt="Location Icon" />
              <span>+251900110011</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={mail} alt="Location Icon" />
              <span>Contact@Lively-et.com</span>
            </div>
            <div className="absolute right-0 -bottom-40 md:bottom-40">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=61554878990909"
              >
                <img src={fb} alt="Facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/lively.betterliving?igshid=YTQwZjQ0NmI0OA=="
              >
                <img src={ig} alt="Instagram" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/lively-betterliving/"
              >
                <img src={ld} alt="Linkdn" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=61554878990909"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
