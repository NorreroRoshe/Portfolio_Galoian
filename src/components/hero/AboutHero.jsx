import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";

const AboutHero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let word_come = document.querySelectorAll(".animation__word_come");
        word_come.forEach((word_come) => {
          let split_word_come = new SplitText(word_come, {
            type: "chars words",
            position: "absolute",
          });
          gsap.from(split_word_come.words, {
            duration: 1,
            x: 50,
            autoAlpha: 0,
            stagger: 0.05,
          });
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come">
                Frontend Developer: Crafting Digital Experiences
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/Cv"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> My Summary <br />
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      {
                        "I love to create digital products for business, and not only, which brings a lot of money and involves a lot of customers, because of the convenience and user-friendly interface starting in 2021!"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
