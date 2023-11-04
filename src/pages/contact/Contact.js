import "./contact.scss";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const userName = useRef();
  const offer = useRef();
  const notify = () => toast.success("Success");

  const contactSubmit = (e) => {
    e.preventDefault();
    userName.current.value = "";
    offer.current.value = "";
    notify();
  };

  return (
    <div className="container">
      <div className="contact">
        <div className="contact-title">Contact Us</div>
        <div className="question-block">
          <div className="question">
            <form onSubmit={contactSubmit}>
              <label htmlFor="userName">Your Telegram UserName</label>
              <input
                ref={userName}
                type="text"
                placeholder="@userName"
                id="userName"
              />
              <p className="info">We can contact you using this username.</p>
              <label htmlFor="offer">Your offer*</label>
              <textarea ref={offer} name="" id="offer"></textarea>
              <p className="info">
                Write your suggestion to improve our platform.
              </p>
              <button type="submit" className="contact-btn">
                Send
              </button>
              <ToastContainer />
            </form>
          </div>
          <div className="contact-img">
            <img src="images/contact-us.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
