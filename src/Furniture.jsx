import React from "react";
import "./Furniture.css";
import bg1 from "./Assets-furniture/homepage/homepage-bg1.jpg";
import bg2 from "./Assets-furniture/homepage/homepage-bg2.jpg";
import bg3 from "./Assets-furniture/homepage/homepage-bg3.jpg";
import bg4 from "./Assets-furniture/homepage/homepage-bg4.jpg";
import sofa from "./Assets-furniture/sofa.webp";
import armchair from "./Assets-furniture/armchair.webp";
import stool from "./Assets-furniture/stool.webp";
import section2Left from "./Assets-furniture/section2-left.jpg";
import section3 from "./Assets-furniture/section3.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import section7 from "./Assets-furniture/section7.jpg";
//acc
import imgacc1 from "./Assets-furniture/accessories/img1.webp";
import imgacc2 from "./Assets-furniture/accessories/img2.webp";
import imgacc3 from "./Assets-furniture/accessories/img3.webp";
import imgacc4 from "./Assets-furniture/accessories/img4.webp";
import imgacc5 from "./Assets-furniture/accessories/img5.webp";
function Home() {
  return (
    <div className="furniture">
      <div className="homepage-section1">
        <Splide
          options={{
            rewind: true,
            pagination: true,
            arrows: false,
            width: "100%",
            gap: "0rem",
            autoplay: true,
            type: "loop",
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg1} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg2} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg3} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg4} alt="" className="bg-home" />
            </div>
          </SplideSlide>
        </Splide>
        <div className="abs-div-home">
          <div className="text-div-home">
            <h2>EXPRESS YOUR EXTRAORDINARY</h2>
            <h1>Lorem, ipsum dolor.</h1>
          </div>
          <button className="explore">EXPLORE NOW</button>
        </div>
      </div>
      <div className="homepage-section2">
        <div className="left-section2">
          <img src={section2Left} alt="" />
          <h1>
            Lorem, ipsum. <br /> Lorem,
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            qui tempora dolores cumque? Illo reiciendis veniam minima
            repellendus accusamus repellat?
          </p>
          <button className="discover">
            Dicover More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="right-section2">
          <div className="heading-circle">
            <div className="circles">
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <h1>
              Create The Perfect <br /> Lorem
            </h1>
          </div>
          <div className="right-desc-div">
            <div className="left-desc desc">
              <h2>Lorem</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat iste perferendis perspiciatis eius velit itaque id.
                Similique cumque deserunt
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="right-desc">
              <img src={sofa} alt="" />
            </div>
          </div>
          <div className="right-desc-div div2">
            <div className="left-desc">
              <img src={armchair} alt="" />
            </div>
            <div className="right-desc desc">
              <h2>Lorem</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat iste perferendis perspiciatis eius velit itaque id.
                Similique cumque deserunt
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="right-desc-div">
            <div className="left-desc desc">
              <h2>Lorem</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat iste perferendis perspiciatis eius velit itaque id.
                Similique cumque deserunt
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="right-desc">
              <img src={stool} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-section6">
        <h1>Browse the collection of accessories</h1>
        <div className="bottom-acc">
          <Splide
            options={{
              rewind: true,
              pagination: false,
              arrows: true,
              width: "100%",
              gap: "0rem",
              autoplay: true,
              perPage: 5,
              perMove: 1,
              type: "loop",
              breakpoints: {
                1600: {
                  perPage: 4,
                },
                1200: {
                  perPage: 3,
                },
                938: {
                  perPage: 2,
                },
                638: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div className="acc-wrapper">
                <img src={imgacc1} alt="" className="acc-img" />
                <p>Hair Color</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <img src={imgacc2} alt="" className="acc-img" />
                <p>Gloves</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <img src={imgacc3} alt="" className="acc-img" />
                <p>Nail Polish</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <img src={imgacc4} alt="" className="acc-img" />
                <p>Lotions & Treatments</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <img src={imgacc5} alt="" className="acc-img" />
                <p>Haircare</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div className="homepage-section3">
        <div className="left-section3">
          <h1>
            Explore other interiors <br /> in our newsletter
          </h1>
          <div className="bottom-left-section3">
            <input type="email" className="email" placeholder="Email Address" />
            <div className="check-div">
              <input type="checkbox" />
              <p>
                I Acknowledge That I Have Read The{" "}
                <span>Personal Data Charter</span>{" "}
              </p>
            </div>
            <button className="explore">SUBSCRIBE</button>
          </div>
        </div>
        <div className="right-section3">
          <img src={section3} alt="" />
        </div>
      </div>

      <div className="homepage-section7">
        <div className="bottom-acc section7-bottom-acc">
          <Splide
            options={{
              rewind: true,
              pagination: false,
              arrows: true,
              width: "100%",
              gap: "0rem",
              autoplay: true,
              perPage: 1,
              perMove: 1,
              type: "loop",
            }}
          >
            <SplideSlide>
              <div className="section7-wrapper">
                <div className="text-div-section7">
                  <h1>
                    We Cares About Your <br /> Dreams
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <img src={section7} alt="" className="section7-img" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="section7-wrapper">
                <div className="text-div-section7">
                  <h1>
                    We Cares About Your <br /> Dreams
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <img src={section7} alt="" className="section7-img" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="section7-wrapper">
                <div className="text-div-section7">
                  <h1>
                    We Cares About Your <br /> Dreams
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <img src={section7} alt="" className="section7-img" />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Home;
