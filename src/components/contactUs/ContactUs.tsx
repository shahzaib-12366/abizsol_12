import "./ContactUs.css";
import Rectangle5556 from "../../assets/Rectangle 5556.png";
import Frame1686557854 from "../../assets/Frame 1686557854.png"
const ContactUs = () => {


  return (
    <div className="contact-container">
      <div className="left-div">
        <img src={Frame1686557854} alt="Frame 1686557854" className="logo-image" />
        <img src={Rectangle5556} alt="Your Image" className="contact-image" />
      </div>
      <div className="right-div">
        <div className="right-content">
          <h2 className="contact-heading">Transformation starts here</h2>
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nulla vitae ex fermentum, vitae
            consectetur nisl convallis. Curabitur id ultrices purus.
          </p>
          <button>Contact us </button>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
