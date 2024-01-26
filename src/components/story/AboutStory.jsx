import React from "react";
import Story1 from "../../../public/assets/imgs/story/1.jpg";
import Story2 from "../../../public/assets/imgs/story/2.jpg";
import Story3 from "../../../public/assets/imgs/story/3.jpg";
import Story4 from "../../../public/assets/imgs/story/4.jpg";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            {/* <div className="from-text">
              from <span>1990</span>
            </div> */}

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Frontend developer</h2>
                <h3 className="sec-title title-anim">My story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    {/* Моя история как фронтенд разработчика началась в тот момент , когда в 2021 году я случайно наткнулся на контекстную рекламу от одной школы по поводу обучения vr/ar, меня это сильно заинтересовала , и я решил начать изучать програмирование , я несколько месяцев смотрел разные курсы , разных направление, но по итогу пришёл к тому , что мне интересен именно фронтенд разработка, и я начал ее изучать. Через год обучения я окончил обучение фронтенд разработке , и начал искать работу, долгое время я не мог найти работу , поэтому начал самостоятельно делать проекты и выставляться на фриланс платформы UpWork и не только. Так же вместе с этим я делал проекты для знакомых бизнесменов. На данный момент , я сотрудничаю с компание ButterflyLC , с которой уже сделал 3 проекта связанные с интернет-магазином. */}
                    My story as a frontend developer began when in 2021 I accidentally came across a contextual advertisement from a school about vr/ar training, I was very interested in it, and I decided to start learning programming, I spent several months watching different courses, different directions, but eventually came to the fact that I was interested in frontend development, and I began to study it.
                  </p>
                  <p>
                    After a year of study I finished training frontend development, and began to look for a job, for a long time I could not find a job, so I began to do projects on my own and exhibit on freelance platforms UpWork and not only. I also did projects for businessmen I know. At the moment, I cooperate with the company ButterflyLC, with which I have already made 3 projects related to the online store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
