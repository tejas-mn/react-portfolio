import { ProjectLinkSvg } from "../../utils/components/Svg";
import '../styles/contact.css';
import { useRef } from "react";
import { useAlert } from "../../../Providers/AlertProvider";
import { useFeatureToggle } from "../../../Providers/FeatureProvider";
import { Features } from "../../../Providers/Features";
import emailjs from '@emailjs/browser';

export default function Contact() {
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
    <section>
      <h2>📞 Contact</h2>

      <section className="map" data-mapbox="">
        <figure>
          <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=India+(My%20Business%20Name)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="400" height="300" loading="lazy"></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h2 className="form-title">📠 Contact Form</h2>
        <form action="#" className="form" data-form="" ref={form} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input type="text" name='from_name' className="form-input" placeholder="Full name" required data-form-input="" />
            <input type="email" name='from_email' className="form-input" placeholder="Email address" required data-form-input="" />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input=""></textarea>
          <button className="view-btn form-btn" type="submit" data-form-btn="">
            <span>
              <ProjectLinkSvg /> Send Message
            </span>
          </button>
        </form>
      </section>
    </section>

  );
}