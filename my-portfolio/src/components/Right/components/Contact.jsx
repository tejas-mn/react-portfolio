import { ProjectLinkSvg } from "../../utils/components/Svg";
import '../styles/contact.css';
import '../styles/contact2.css';
import { useRef } from "react";
import { useAlert } from "../../../Providers/AlertProvider";
import { useFeatureToggle } from "../../../Providers/FeatureProvider";
import { Features } from "../../../Providers/Features";
import emailjs from '@emailjs/browser';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <ContactSection />
    </>
  )
}

function ContactSection() {

  const form = useRef();
  const { showAlert } = useAlert();
  const { features } = useFeatureToggle();

  const sendEmail = (e) => {
    e.preventDefault();
    if (features[Features.ENABLE_EMAIL]) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            showAlert({
              message: "Message sent successfully",
              type: "success"
            });
            console.log(result.text);
          },
          (error) => {
            showAlert({
              message: "Error sending message",
              type: "error"
            });
            console.log(error.text);
          }
        );
    } else {
      console.log('Email disabled');
    }
  };

  return (
    <div className="right-01">
      <div className="contact-form">
        <div className="form-section">
          <h2>📩 Contact Us!</h2>
          <form action="#" ref={form} onSubmit={sendEmail} >
            <label for="name">Name</label>
            <input type="text" id="name" name="from_name" required />

            <label for="company">Company</label>
            <input type="text" id="company" name="company" required />

            <label for="telephone">Telephone</label>
            <input type="tel" id="telephone" name="telephone" required />

            <label for="email">Email</label>
            <input type="email" id="email" name="from_email" required />

            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <button className="view-btn" type="submit"> <ProjectLinkSvg /> Send Message</button>
          </form>
        </div>
        <div class="form-section" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div>
            <h2>🏠 Our Location</h2>
            <section className="map" data-mapbox="">
              <figure>
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=India+(My%20Business%20Name)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="400" height="300" loading="lazy"></iframe>
              </figure>
            </section>
          </div>
          <div>
            <h2>📢 Subscribe</h2>
            <form>
              <label for="subscribe-email">Email Address</label>
              <input type="email" id="subscribe-email" name="subscribe-email" required />
              <button className="view-btn" type="submit">Subscribe</button>
            </form>
          </div>

          <div>
            {/* <h2 >🙋🏻‍♂️ Stay In Touch</h2> */}
            <div class="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebook size={30} /> </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={30} /> </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">  <FaYoutube size={30} /> </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30} /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}