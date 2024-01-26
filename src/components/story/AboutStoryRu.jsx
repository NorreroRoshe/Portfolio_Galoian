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
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Фронтенд разработчик</h2>
                <h3 className="sec-title title-anim">Моя история</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Моя история как фронтенд-разработчика началась с того, что в 2021 году я случайно наткнулся на контекстную рекламу одной из школ о vr/ar обучении, меня это очень заинтересовало, и я решил начать изучать программирование, несколько месяцев я смотрел разные курсы, разные направления, но в итоге пришел к тому, что меня заинтересовала фронтенд-разработка, и я начал ее изучать.
                  </p>
                  <p>
                    Через год обучения я закончил обучение фронтенд-разработке, и начал искать работу, долгое время я не мог найти работу, поэтому я начал делать проекты самостоятельно и выставляться на фриланс-платформах UpWork и не только. Также я делал проекты для знакомых бизнесменов. На данный момент я сотрудничаю с компанией ButterflyLC, с которой я уже сделал 3 проекта, связанных с интернет-магазином.
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
