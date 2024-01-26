import Link from "next/link";
import React from "react";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/12.png";
import Detail2 from "../../../public/assets/imgs/portfolio/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/3.jpg";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/4.jpg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.jpg";
import Detail6 from "../../../public/assets/imgs/portfolio/detail/6.jpg";
import Detail7 from "../../../public/assets/imgs/portfolio/detail/7.jpg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";
import Image from "next/image";

const PortfolioDetails1 = () => {
  return (
    <>
      <section className="portfolio__detail">
        <div className="portfolio__detail-top">
          <div className="container g-0 line pt-110 pb-130">
            <span className="line-3"></span>

            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come">
                    Vogue-<br />
                    Decor
                  </h2>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div className="portfolio__detail-info">
                  <ul>
                    <li>
                      Category <span>E-commerce</span>
                    </li>
                    <li>
                      Client <span>ButterflyLC</span>
                    </li>
                    <li>w
                      Start Date <span>12 December 2023</span>
                    </li>
                    <li>
                      Handover <span>In the process</span>
                    </li>
                    <li>
                      Link to the project : <Link style={{color: '#0000cb', textDecoration: 'underline !important'}} href='/'>In the process</Link>
                    </li>
                    <li>
                      Link to code: <Link  style={{color: '#0000cb', textDecoration: 'underline !important'}} href='https://github.com/NorreroRoshe/VogueDecor'>VogueDecor</Link>
                    </li>
                    <li>
                    Stack : <span>ReactJS, nextJS, TypeScript, Figma, Git, и other...</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__detail-thumb">
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={Detail1}
            alt="Portfolio Thumbnail"
            data-speed="auto"
          />
        </div>

        <div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>

            <div className="block-content">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    E-commerce Development: Illuminating Success in Every Detail
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                     <p>
                      Introducing my latest e-commerce project for furniture, lighting and home goods, where careful planning and precise execution came together to create a seamless online shopping experience. As the architect and developer of this project, I oversaw all phases of development and ensured that each component reflected a commitment to excellence.
                    </p>

                    <ul>
                      <li>+ Frontend Development</li>
                      <li>+ Responsive layout for all pages</li>
                      <li>+ Project managment</li>
                      <li>+ UX/UI Design</li>
                      <li>+ Creative Design and Branding Excellence</li>
                      <li>+ Copywriting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail2}
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>

            <div className="block-content  pt-140">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    Site functionality and more
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>
                      <p><strong>User Authentication and Authorization:</strong> Devised a secure and user-friendly authentication system, ensuring a personalized touch for each visitor.</p>
                      <p><strong>Account Management Redefined:</strong> Redesigned user account management, offering easy customization and control over personal preferences.</p>
                      <p><strong>Effortless Cart and Wishlist Integration:</strong> Integrated an intuitive cart and wishlist feature for a streamlined and satisfying shopping process.</p>
                      <p><strong>Smart Search Capabilities:</strong> Engineered a robust search function, making product discovery a seamless and enjoyable experience.</p>
                      <p><strong>Tailored Lighting Filters:</strong> Introduced diverse filters tailored specifically to lighting preferences, enhancing the platform&apos;s relevance and user satisfaction.</p>
                      <p><strong>URL-Based Filter Persistence:</strong> Implemented a unique feature allowing users to save and share customized filters through URL-based persistence.</p>
                      <p><strong>Creative Design and Branding Excellence:</strong> Orchestrated the visual identity to align seamlessly with the brand, creating a distinctive and memorable online presence.</p>
                      <p><strong>Comprehensive Project Management:</strong> Led end-to-end project management, overseeing both backend and frontend development to ensure a cohesive and efficient process.</p>
                      This e-commerce success story is not just a showcase of features; it&apos;s a testament to my dedication and expertise in bringing visions to life. Explore the intricacies that make this project a true reflection of excellence in e-commerce implementation.
                    </p>

                      <p style={{fontSize: '25px'}}>Font-Family: <span style={{color: '#000'}}> Inter</span></p>
                    <div className="fonts">
                      <Image
                        priority
                        style={{ width: "253px", height: "auto" }}
                        src={DetailShape}
                        alt="Font Style"
                      />
                      <ul>
                        <li className="regular">
                          <span>regular</span> This is text message
                        </li>
                        <li className="medium">
                          <span>Medium</span> Medium typography
                        </li>
                        <li className="semibold">
                          <span>SemiBold</span> Just Amazing
                        </li>
                        <li className="blod">
                          <span>Blod</span> Awesome
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-gallery">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail3}
                alt="Portfolio Image"
              />
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail4}
                alt="Portfolio Image"
              />
            </div>

            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail5}
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>

            <div className="block-img-text">
              <Image
                priority
                width={375}
                style={{ height: "auto" }}
                src={Detail6}
                alt="Portfolio Image"
              />
              <Image
                priority
                width={375}
                style={{ height: "auto" }}
                src={Detail7}
                alt="Portfolio Image"
              />
              <p style={{flexDirection: 'column', alignItems: 'start'}}>
              If you are attracted by the experience of this project and you are interested in creating a similar one, customized for your business, do not hesitate to contact me. I will be glad to discuss possible cooperation options.
              <br/>
              Please send more details about your project and your contact information. I am available to discuss details or meet for further discussion.
              <br/>
              <br/>
              Regards,
              Norik Galoyan
              <br/>
              <br/>
              <span>Link to code: <Link  style={{color: '#0000cb', textDecoration: 'underline !important'}} href='https://github.com/NorreroRoshe/VogueDecor'>VogueDecor</Link></span>
              </p>
            </div>

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__detail-btns pt-150 pb-150">
                  <Link
                    href="/portfolio-details2"
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Prev Work
                  </Link>
                  <Link
                    href="/portfolio-details1"
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Next Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails1;
