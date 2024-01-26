import Link from "next/link";
import React from "react";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/15.svg";
import Detail2 from "../../../public/assets/imgs/portfolio/detail/2.jpeg";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/3.jpeg";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/4.jpeg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.jpeg";
import Detail6 from "../../../public/assets/imgs/portfolio/detail/6.jpg";
import Detail7 from "../../../public/assets/imgs/portfolio/detail/7.jpeg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";
import Image from "next/image";

const PortfolioDetails1Ru = () => {
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
                    <Link style={{color: '#121212'}} href='/'>
                      ButterflyLC.ru
                    </ Link>
                  </h2>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div className="portfolio__detail-info">
                  <ul>
                    <li>
                      Категория <span>Интернет-магазин</span>
                    </li>
                    <li>
                      Клиент <span>ButterflyLC</span>
                    </li>
                    <li>
                      Дата начала разработки<span>1 Июля 2023</span>
                    </li>
                    <li>
                      Дата окончания разработки<span>1 декабря 2023</span>
                    </li>
                    <li>
                      Ссылка на проект : <Link style={{color: '#0000cb', textDecoration: 'underline !important'}} href='https://ButterflyLC.ru'>ButterflyLC.ru</Link>
                    </li>
                    <li>
                      Ссылка на код: <Link  style={{color: '#0000cb', textDecoration: 'underline !important'}} href='https://github.com/NorreroRoshe/ButterflyLightningCo'>ButterflyLightningCo</Link>
                    </li>
                    <li>
                      Стек : <span>ReactJS, nextJS, TypeScript, Figma, Git, и другое...</span>
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
                    A showcase of e-commerce development:
                    Achieving excellence in every aspect
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                     <p>
                     Представляю вам свой проект для ButterflyLC, компании по продаже осветительных приборов с помощью электронной коммерции. Благодаря тщательному планированию и точному исполнению я создал безупречный опыт онлайн-покупок. Как архитектор и разработчик, я тщательно контролировал каждый этап разработки, следя за тем, чтобы каждый элемент отражал стремление к совершенству.
                    </p>
                    <h4 style={{marginBottom: '10px'}}>На проекте я занимался:</h4>
                    <ul>
                      <li>+ Фроненд-райзработкой </li>
                      <li>+ Разработкой респонсив под все устройства и кроссбаузерностью</li>
                      <li>+ Проджект менеджментом</li>
                      <li>+ UX/UI Дизайном</li>
                      <li>+ Брендированием</li>
                      <li>+ Копирайтингом</li>
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
                  Функциональность сайта и не только...
                  </h2>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                  <p>
                      <p><strong>Аутентификация и авторизация пользователей:</strong> Разработали безопасную и удобную систему аутентификации, обеспечивающую индивидуальный подход к каждому посетителю.</p>
                      <p><strong>Управление учетными записями:</strong> Переработано управление учетными записями пользователей, обеспечивающее легкую настройку и контроль над личными предпочтениями.</p>
                      <p><strong>Интеграция корзины и списка пожеланий:</strong> Интегрирована интуитивно понятная функция корзины и списка желаний для упрощения процесса покупки.</p>
                      <p><strong>Интеллектуальные возможности поиска:</strong> Разработана надежная функция поиска, благодаря которой поиск товаров становится легким и приятным процессом.</p>
                      <p><strong>Индивидуальные фильтры освещения:</strong> Внедрены разнообразные фильтры, специально разработанные с учетом предпочтений в области освещения, что повысило релевантность платформы и удовлетворенность пользователей.</p>
                      <p><strong>Сохранение фильтров на основе URL:</strong> Реализована уникальная функция, позволяющая пользователям сохранять и обмениваться настроенными фильтрами с помощью URL-адреса.</p>
                      <p><strong>Креативный дизайн и превосходный брендинг:</strong> Организовали визуальную идентификацию, чтобы она органично сочеталась с брендом, создавая отличительное и запоминающееся присутствие в Интернете.</p>
                      <p><strong>Комплексное управление проектами:</strong> Руководили сквозным управлением проектом, контролируя как бэкэнд, так и фронтэнд-разработку, чтобы обеспечить слаженный и эффективный процесс.</p>
                      Эта история успеха электронной коммерции - не просто демонстрация возможностей; это свидетельство моей преданности и опыта в воплощении идей в жизнь. Ознакомьтесь с тонкостями, которые делают этот проект настоящим отражением совершенства в реализации электронной коммерции.
                    </p>
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
              Если вас привлек опыт этого проекта и вы заинтересованы в создании аналогичного, адаптированного под ваш бизнес, не стесняйтесь обращаться ко мне. Я буду рад обсудить возможные варианты сотрудничества.
              <br/>
              Пожалуйста, пришлите более подробную информацию о вашем проекте и ваши контактные данные. Я готов обсудить детали или встретиться для дальнейшей беседы.
              <br/>
              <br/>
                С уважением, Норик Галоян
              <br/>
              <br/>
                <span>Link to code: <Link  style={{color: '#0000cb', textDecoration: 'underline !important'}} href='https://github.com/NorreroRoshe/ButterflyLightningCo'>ButterflyLightningCo</Link></span>
                <span>Link to project: <Link  style={{color: '#0000cb', textDecoration: 'underline !important'}} href='https://ButterflyLC.ru'>ButterflyLC.ru</Link></span>
              </p>
            </div>

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__detail-btns pt-150 pb-150">
                  <Link
                    href="/portfolio-details-ru"
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Prev Work
                  </Link>
                  <Link
                    href="/portfolio-details-ru2"
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

export default PortfolioDetails1Ru;
