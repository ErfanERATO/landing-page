import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import { Col, Divider, Row } from "antd";
import "../slider/style.scss";
import "../../assets/style/custom.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/style/responsive.scss"

const SliderCustom = () => {
  return (
    // <Row
    //   gutter={{
    //     xs: 8,
    //     sm: 16,
    //     md: 24,
    //     lg: 32,
    //   }}
    // >
    //   <Col
    //     className="gutter-row"
    //     xs={{ span: 24 }}
    //     sm={{ span: 24 }}
    //     md={{ span: 12 }}
    //     lg={{ span: 8 }}
    //     style={{
    //       justifyContent: "center",
    //       display: "flex"
    //     }}
    //   >
    //     <div className="text-holder">
    //       <div className="slider-text-title">
    //         <h1 className="fw-600">
    //           خدمات فنی <span>ناصری</span>
    //         </h1>
    //       </div>

    //       <div className="slider-text-sub fw-400">
    //         <p>
    //           نمایندگی تعمیرات لوازم خانگی : لباسشویی اتوماتیک٬ ماشین ظرفشویی٬
    //           یخچال فریزر٬ کولر گازی٬ اسپیلت با بیش از ۳۰ سال تجربه
    //         </p>
    //         <p>
    //           سال تاسیس <span>۱۳۶۸</span>
    //         </p>
    //       </div>
    //     </div>
    //   </Col>

    //   <Col
    //     className="gutter-row"
    //     xs={{ span: 24 }}
    //     sm={{ span: 24 }}
    //     md={{ span: 24 }}
    //     lg={{ span: 24 }}
    //     // xs={{ span: 24 }}
    //     // sm={{ span: 24 }}
    //     // md={{ span: 12 }}
    //     // lg={{ span: 16 }}
    //   >
    //     <div className="slider-holder">
    //       <Swiper
    //         autoplay={{
    //           delay: 2500,
    //           disableOnInteraction: false,
    //         }}
    //         pagination={{
    //           dynamicBullets: true,
    //         }}
    //         modules={[Autoplay, Pagination, Navigation]}
    //         className="mySwiper"
    //       >
    //         <SwiperSlide
    //           style={{ height: "25.438rem"}}
    //         >
    //         </SwiperSlide>
    //         {/* <SwiperSlide
    //           style={{ backgroundColor: "yellow", height: "25.438rem" }}
    //         >
    //           Slide 2
    //         </SwiperSlide>
    //         <SwiperSlide
    //           style={{ backgroundColor: "blue", height: "25.438rem" }}
    //         >
    //           Slide 3
    //         </SwiperSlide>
    //         <SwiperSlide
    //           style={{ backgroundColor: "orange", height: "25.438rem" }}
    //         >
    //           Slide 4
    //         </SwiperSlide>
    //         <SwiperSlide
    //           style={{ backgroundColor: "black", height: "25.438rem" }}
    //         >
    //           Slide 5
    //         </SwiperSlide>
    //         <SwiperSlide
    //           style={{ backgroundColor: "pink", height: "25.438rem" }}
    //         >
    //           Slide 6
    //         </SwiperSlide>
    //         <SwiperSlide
    //           style={{ backgroundColor: "purple", height: "25.438rem" }}
    //         >
    //           Slide 7
    //         </SwiperSlide>
    //         <SwiperSlide
    //           style={{ backgroundColor: "brown", height: "25.438rem" }}
    //         >
    //           Slide 8
    //         </SwiperSlide>
    //         <SwiperSlide
    //           style={{ backgroundColor: "white", height: "25.438rem" }}
    //         >
    //           Slide 9
    //         </SwiperSlide> */}
    //       </Swiper>
    //     </div>
    //   </Col>
    // </Row>
    
    
    <div className="slider-image" id="home">
      <img
        src={require("../../assets/image/Yb-repair-App-location.jpg")}
        alt=""
      />

      <div className="main-text">
        <div className="text-holder">
          <div className="slider-text-title">
            <h1 className="fw-600">
              خدمات فنی <span>ناصری</span>
            </h1>
          </div>

          <div className="slider-text-sub fw-400">
            <p>
              نمایندگی تعمیرات لوازم خانگی : لباسشویی اتوماتیک٬ ماشین ظرفشویی٬
              یخچال فریزر٬ کولر گازی٬ اسپیلت با بیش از ۳۰ سال تجربه
            </p>
            <p>
              سال تاسیس <span>۱۳۶۸</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCustom;
