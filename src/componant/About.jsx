import Navbar from "../Navbar";
import "../styles/HomeStyles.css";
import "../styles/AboutStyles.css";
import "../styles/Services.css";
import "../styles/Project.css";
import "../styles/Protfolio.css";
import "../styles/Contact.css";
import azees2 from "../assets/aji4.jpeg";
import resume from "../assets/Azees.pdf";

export default function About() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <section className="about" id="about">
        <div className="about-img">
          <img src={azees2} alt="" />
        </div>
        <div className="about-text">
          <h2>
            About<span>Me</span>
          </h2>
          <h4>Front-end Developer</h4>
          <p>
            "I want to pursue this course in front-end development because I am
            passionate about creating visually appealing and user-friendly web
            applications. I am fascinated by how the combination of design and
            technology can shape user experiences, and I want to develop the
            skills to bring ideas to life on the web.
          </p>
          <a href={resume} className="btn-box1">
            My Resume
          </a>
        </div>
      </section>
    </>
  );
}
