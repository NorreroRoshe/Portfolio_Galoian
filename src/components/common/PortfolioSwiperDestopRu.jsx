import React, { useState } from "react";
import {
  Mousewheel,
  EffectFade,
  Pagination,
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Portfolio1 from "../../../public/assets/imgs/portfolio/1.png";
import Shape16 from "../../../public/assets/imgs/shape/16.png";
import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.svg";
import Brand5 from "../../../public/assets/imgs/brand/5.svg";
import Brand6 from "../../../public/assets/imgs/brand/6.svg";
import Brand7 from "../../../public/assets/imgs/brand/7.svg";
import Brand8 from "../../../public/assets/imgs/brand/8.svg";
import Brand9 from "../../../public/assets/imgs/brand/9.svg";
import Brand10 from "../../../public/assets/imgs/brand/10.svg";
import Brand11 from "../../../public/assets/imgs/brand/11.svg";
import Brand12 from "../../../public/assets/imgs/brand/12.svg";
import Brand14 from "../../../public/assets/imgs/brand/14.svg";
import Portfolio11 from "../../../public/assets/imgs/portfolio/1/1.svg";
import Portfolio12 from "../../../public/assets/imgs/portfolio/1/3.svg";
import Portfolio13 from "../../../public/assets/imgs/portfolio/1/2.svg";
import Portfolio14 from "../../../public/assets/imgs/portfolio/1/4.jpg";
import Portfolio16 from "../../../public/assets/imgs/portfolio/1/6.svg";
import Link from "next/link";
import Image from "next/image";
import Contact from './Contact/Contact';

// Import Swiper styles
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const PortfolioSwiperDestop = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="portfolio__main-slider2">
        <Swiper
          modules={[Mousewheel, EffectFade, Pagination]}
          spaceBetween={0}
          effect={"fade"}
          mousewheel={true}
          allowTouchMove={false}
          slidesperview={1}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <section className="portfolio__hero-area portfolio-section">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="portfolio__hero">
                      <h1 className="title shape-circle">Frontend</h1>
                      <h2 className="title text-stroke">React</h2>
                      <h2 className="title">developer</h2>
                      <div className="btn-wrapper">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="portfolio-section portfolio__about pt-140 pb-150">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-8 col-xxl-8 col-lg-8">
                    <div className="portfolio__about-left">
                      <h2 className="sec-title" style={{fontSize: '50px'}}>
                      Я СОЗДАЮ КРУТЫЕ <span>ЦИФРОВЫЕ ПРОДУКТЫ</span> ДЛЯ
                      БРЕНДОВ С <span>Помощью Фронтенд</span>
                      </h2>
                      <Image
                        priority
                        width={274}
                        height={106}
                        src={Shape16}
                        alt="Shape"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                    <div className="sec-text">
                      <p>
                      Нахожусь в Москве, работаю фронтенд-разработчиком, сотрудничаю с командой профессионалов и группой компаний ButterflyLC. Мы занимаемся созданием и продвижением коммерческих сайтов. Благодаря инновационным стратегиям разработки сайтов и расширенным возможностям, мы эффективно привлекаем и вовлекаем новую аудиторию.
                      <br />
                      Имея более чем 2,5 года опыта в frontend-разработке и более одного года в коммерческой разработке, я достиг многих целей в этой области. Сейчас я хочу продолжить свой рост с новой командой в области фронтенд-разработки.
                      </p>
                      <Link href="/about-ru" className="wc-btn-dark">
                        Обо мне
                      </Link>
                      <Link href="/CvRu" className="wc-btn-dark" style={{marginLeft: '10px'}}>
                        Резюме
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="about-row">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                      <div className="brand-title-wrap">
                        <h3 className="brand-title" style={{fontSize: '20px'}}>
                          СЛЕДИТЕ ЗА МНОЙ В СОЦИАЛЬНЫХ СЕТЯХ И НЕ ТОЛЬКО.
                        </h3>
                      </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                    <div className="brand-list">
                        <div className="brand-logo">
                          <a target="_blank" href="https://hh.ru/applicant/resumes/view?resume=74052d2bff0b6e9c4d0039ed1f6745516c6a33">
                            <Image
                              priority
                              width={97}
                              height={97}
                              src={Brand4}
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div className="brand-logo">
                          <a href="https://www.instagram.com/chucknorrikk?igsh=MTlhdnkzNmRnOGNnYg==" target="_blank">
                            <Image
                              priority
                              width={117}
                              height={117}
                              src={Brand1}
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div className="brand-logo">
                          <a href="https://api.whatsapp.com/send?phone=79999902020" target="_blank">
                            <Image
                              priority
                              width={97}
                              height={97}
                              src={Brand2}
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                        <div className="brand-logo">
                          <a href="https://t.me/Norikyujka" target="_blank">
                            <Image
                              priority
                              width={97}
                              height={97}
                              src={Brand3}
                              alt="Brand Logo"
                            />
                            </a>
                        </div>
                        <div className="brand-logo">
                          <a target="_blank" href="https://github.com/NorreroRoshe">
                            <Image
                              priority
                              width={97}
                              height={97}
                              src={Portfolio16}
                              alt="Brand Logo"
                            />
                            </a>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="portfolio-section portfolio__project">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="pp-title-wrap">
                      <h2 className="pp-title">
                        Мои последние <br />проекты
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                    <div className="pp-slider-wrapper">
                      <Swiper
                        modules={[Navigation, Thumbs]}
                        spaceBetween={10}
                        loop={true}
                        navigation={{
                          nextEl: ".pp-next",
                          prevEl: ".pp-prev",
                        }}
                        thumbs={{
                          swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                              ? thumbsSwiper
                              : null,
                        }}
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details-ru1">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio11}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details-ru2">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio12}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details-ru">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio13}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide>
                          {/* <SwiperSlide>
                            <div className="pp-slide">
                              <div className="pp-slide-img">
                                <Link href="/portfolio-details-ru2">
                                  <Image
                                    priority
                                    width={520}
                                    style={{ height: "auto" }}
                                    src={Portfolio14}
                                    alt="Portfolio Thumbnail"
                                  />
                                </Link>
                              </div>
                            </div>
                          </SwiperSlide> */}
                        </div>
                      </Swiper>

                      <div
                        style={{ cursor: "pointer" }}
                        className="pp-prev swipper-btn"
                      >
                        Next
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className="pp-next swipper-btn"
                      >
                        prev
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                    <Swiper
                      // modules={[Thumbs, FreeMode]}
                      spaceBetween={10}
                      // loop={true}
                      slidespreview={1}
                      // freeMode={true}
                      // watchSlidesProgress
                      allowTouchMove={false}
                      className="portfolio__project-thumbs"
                      onSwiper={setThumbsSwiper}
                    >
                      <SwiperSlide>
                        <div className="pp-slide-thumb">
                          <h3 className="pp-slide-title">ButterflyLC.ru</h3>
                          <p>Июль 2023</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="pp-slide-thumb">
                          <h3 className="pp-slide-title" style={{fontSize: '29px'}}>ButterflyLC.store</h3>
                          <p>Январь 2023</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="pp-slide-thumb">
                          <h3 className="pp-slide-title">VogueDecor</h3>
                          <p>Декабрь 2023</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="portfolio-section portfolio__service pt-140 pb-140">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                    <h2 className="sec-title"> МОЙ РАБОЧИЙ СТЕК.</h2>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                    <div className="sec-text">
                      <p>
                        Здесь представлен в основном стек, который я использую каждый день в своей работе, но я всегда открыт для нового, поэтому я постоянно изучаю новые библиотеки, фреймворки и другие вещи, связанные с разработкой.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="portfolio__service-list" style={{marginTop: '40px'}}>
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div className="portfolio__service-item">
                        <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            JavaScript
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand10}
                                alt="Brand Logo"
                                className="service-detailsSSSimg"
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div className="portfolio__service-item">
                      <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            TypeScript
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand7}
                                alt="Brand Logo"
                                className="service-detailsSSSimg"
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div className="portfolio__service-item">
                        <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            React.Js
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand6}
                                alt="Brand Logo"
                                className="service-detailsSSSimg"
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div className="portfolio__service-item">
                      <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            Redux
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand8}
                                alt="Brand Logo"
                                className="service-detailsSSSimg"
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3" style={{marginTop: '30px'}}>
                      <div className="portfolio__service-item">
                      <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            Next.js
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand9}
                                alt="Brand Logo"
                                className="service-detailsSSSimg" 
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3" style={{marginTop: '30px'}}>
                      <div className="portfolio__service-item">
                      <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            Git
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand11}
                                alt="Brand Logo"
                                className="service-detailsSSSimg" 
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3" style={{marginTop: '30px'}}>
                      <div className="portfolio__service-item">
                      <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            Bootstrap
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand12}
                                alt="Brand Logo"
                                className="service-detailsSSSimg" 
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3" style={{marginTop: '30px'}}>
                      <div className="portfolio__service-item">
                      <span className="service-detailsSSS">
                          <h3 className="ps-title">
                            jQuery
                          </h3>
                          <div className="brand-logo">
                            <span>
                              <Image
                                priority
                                width={60}
                                height={60}
                                src={Brand14}
                                alt="Brand Logo"
                                className="service-detailsSSSimg" 
                              />
                              </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="portfolio-section portfolio__footer-area  pt-130">
              {/* Contact area start  */}
              <div className="">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="sec-title-wrapper">
                        <h2 className="pf-title" style={{fontSize: '80px'}}>СВЯЖИТЕСЬ СО МНОЙ.🤟</h2>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="contact__text">
                        <p>
                          {
                            "Я буду рад услышать вас и вместе начать что-то менять и разрабатывать. Позвоните мне или оставьте заявку по любым вопросам."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                      <div className="pf-contact">
                        <h3 style={{fontSize: '20px'}}>
                          {"ЕСЛИ У ВАС ЕСТЬ КАКИЕ-ЛИБО ВОПРОСЫ, "} <br />
                          ПОЖАЛУЙСТА, ПОЗВОНИТЕ МНЕ ПО ТЕЛЕФОНУ!
                        </h3>
                        <ul>
                          <li style={{display: 'flex', gap: '10px'}}>
                            Phone: <a href="tel:79999902020">+7 ( 999 ) 990 - 2020</a>
                          </li>
                          <li style={{display: 'flex', gap: '10px'}}>
                            <span>E-mail:</span>
                            <div>
                              <a href="mailto:norikas995@gmail.com" style={{display: 'block'}}>
                                norikas995@gmail.com
                              </a>
                              <a href="mailto:norikas95@mail.ru" style={{display: 'block'}}>
                                norikas95@mail.ru
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="pf-social">
                        <h3>Пишите мне в  </h3>
                        <ul>
                          <li>
                            <a href="https://www.instagram.com/chucknorrikk?igsh=MTlhdnkzNmRnOGNnYg==">insagram</a>
                          </li>
                          <li>
                            <a href="https://t.me/Norikyujka">TG</a>
                          </li>
                          <li>
                            <a href="https://api.whatsapp.com/send?phone=79999902020">WA</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Contact />
                  </div>
                </div>
              </div>
              {/* Contact area end  */}

              {/* Footer area start  */}
              <footer className="portfolio__footer">
                <div className="container">
                  <div className="pf-btm">
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                        <div className="footer__copyright-2">
                          <p>
                            © 2022 | Galoyan design{" "}
                            <a href="/" target="_blank">
                              GaloyanDev
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </section>
          </SwiperSlide>
          <div className="swiper-pagination circle-pagination-2"></div>
        </Swiper>
      </div>
    </>
  );
};
export default PortfolioSwiperDestop;
