import Navbar from "../Navbar";
import "../styles/HomeStyles.css";
import "../styles/Services.css";
import "../styles/Project.css";
import "../styles/Protfolio.css";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <section className="contacts" id="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me</span>
          </h2>
          <h4>Let,s Work Together</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem
            illo obcaecati debitis. Vitae dolorum et consequuntur facere
            veritatis est!
          </p>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/azees253/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://wa.link/tql3u1">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/azees706/?hl=en">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/Azees253">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
            />
            <textarea
              name="msg"
              id=""
              cols="40"
              rows="10"
              placeholder="Enter Your message"
              required
            ></textarea>
            <input type="submit" value="submit" className="send" />
          </form>
        </div>
      </section>
    </>
  );
}
