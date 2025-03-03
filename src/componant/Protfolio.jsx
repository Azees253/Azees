import Navbar from "../Navbar";
import "../styles/HomeStyles.css";
import "../styles/Services.css";
import "../styles/Project.css";
import "../styles/Protfolio.css";
import "../styles/Contact.css";
import azees1 from "../assets/aji2.jpeg";
import azees2 from "../assets/aji4.jpeg";
import ecm from "../assets/ecm.png";
import { useEffect } from "react";
import Typed from "typed.js";

export default function Protfolio() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        <div className="services" id="services">
          <div className="container">
            <h1 className="sub-title">
              My <span>Services</span>
            </h1>
            <div className="services-list">
              <div>
                <i
                  class="fa-solid fa-file-code"
                  style={{ color: "#00eeff" }}
                ></i>

                <h2>FAY-WALK-WEBSITE</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit incidunt in veritatis inventore placeat,
                  quibusdam nisi quam eaque impedit distinctio?
                </p>
                <a
                  href="https://github.com/Azees253/fly-walk.git"
                  className="read"
                >
                  CODE
                </a>
              </div>
              <div>
                <i
                  class="fa-solid fa-file-code"
                  style={{ color: "#00eeff" }}
                ></i>
                <h2>TRAVEL-WEBSITE</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit incidunt in veritatis inventore placeat,
                  quibusdam nisi quam eaque impedit distinctio?
                </p>
                <a
                  href="https://github.com/Azees253/travel.git"
                  className="read"
                >
                  CODE
                </a>
              </div>
              <div>
                <i
                  class="fa-solid fa-file-code"
                  style={{ color: "#00eeff" }}
                ></i>
                <h2>E-commerce-website</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit incidunt in veritatis inventore placeat,
                  quibusdam nisi quam eaque impedit distinctio?
                </p>
                <a href="" class="read">
                  CODE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="protfolio" id="protfolio">
          <div className="main-text" id="project">
            <h2>
              Latest <span>Project</span>
            </h2>
            <div className="portfolio-content">
              <div className="row">
                <img src={ecm}></img>
                <div className="layer">
                  <h5>FAY-WALK-WEDSITE-PROJECT</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium molestias aspernatur temporibus perferendis
                    incidunt reiciendis, aliquid porro nulla similique ut.
                  </p>
                  <a href="https://azees253.github.io/fly-walk/">
                    <i
                      style={{ color: "white" }}
                      class="fa-solid fa-arrow-up-right-from-square"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <img src={ecm}></img>
                <div className="layer">
                  <h5>TRAVAL-WEBSITE-PROJECT</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium molestias aspernatur temporibus perferendis
                    incidunt reiciendis, aliquid porro nulla similique ut.
                  </p>
                  <a href="https://azees253.github.io/travel/">
                    <i
                      style={{ color: "white" }}
                      class="fa-solid fa-arrow-up-right-from-square"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <img src={ecm}></img>
                <div className="layer">
                  <h5>E-commerce website</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium molestias aspernatur temporibus perferendis
                    incidunt reiciendis, aliquid porro nulla similique ut.
                  </p>
                  <a href="">
                    <i
                      style={{ color: "white" }}
                      class="fa-solid fa-arrow-up-right-from-square"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
