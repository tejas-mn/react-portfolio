import { ProjectLinkSvg } from "../../utils/components/Svg";
import '../styles/contact.css';

export default function Contact() {

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
        <form action="#" className="form" data-form="">
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input="" />
            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input="" />
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