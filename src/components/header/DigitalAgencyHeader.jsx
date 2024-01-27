import React, { useEffect, useState } from "react";
import Canvas from "../canvas/Canvas";
import Link from "next/link";
import LogoWhite from "../../../public/assets/imgs/logo/site-logo-white.svg";
import LogoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.svg";
import MenuWhite from "../../../public/assets/imgs/icon/menu-white.png";
import Image from "next/image";

const DigitalAgencyHeader = () => {
  const [topScroll, setTopScroll] = useState(0);
  const handleTopScroll = () => {
    const position = window.pageYOffset;
    setTopScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);
  if (typeof window !== "undefined") {
    let device_width = window.innerWidth;
    if(device_width < 1365) {
      let header_bg = document.querySelector(".header__area");
    if (header_bg) {
      if (topScroll > 20) {
        header_bg.style.background = "#121212";
          header_bg.style.setProperty('mix-blend-mode', 'unset');
      } else {
        header_bg.style.background = "transparent";
          header_bg.style.setProperty('mix-blend-mode', 'exclusion');
      }
    } 
    }
  }
  const openCanvas = () => {
    document.querySelector(".offcanvas__area").style.opacity = "1";
    document.querySelector(".offcanvas__area").style.visibility = "visible";
    let header_bg = document.querySelector(".header__area");
    header_bg.style.setProperty("mix-blend-mode", "unset");
  };
  return (
    <>
      <header className="header__area">
        <div className="header__inner">
          <div className="header__logo">
            <Link href="/personal-portfolio">
              <Image
                priority
                width={153}
                height={100}
                className="logo-primary w-500"
                src={LogoWhite}
                style={{transform: 'rotate(-90deg)'}}
                alt="Site Logo"
              />
              {/* <Image
                priority
                width={100}
                height={33}
                className="logo-secondary"
                src={LogoWhite2}
                alt="Moibile Logo"
              /> */}
            </Link>
          </div>
          <div className="header__nav-icon">
            {/* <button onClick={openCanvas} id="open_offcanvas">
              <Image
                priority
                width={22}
                height={22}
                src={MenuWhite}
                alt="Menubar Icon"
              />
            </button> */}
          </div>
          <div className="header__support">
            <p>
              Support center <a href="tel:+79999902020">8 999 990 2020</a>
            </p>
          </div>
        </div>
        <Canvas bladeMode={true} />
      </header>
    </>
  );
};

export default DigitalAgencyHeader;
