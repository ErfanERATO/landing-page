import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import { Col, Divider, Row } from "antd";
import "../slider/style.scss";
import "../../assets/style/custom.scss";

// const contentStyle = {
//   height: "25.438rem",
//   color: "#fff",
//   textAlign: "center",
//   background: "#364d79",
// };
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const SliderCustom = () => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col
        className="gutter-row"
        xs={{ span: 24 }}
        sm={{ span: 8 }}
        md={{ span: 8 }}
        style={{
          justifyContent: "center",
        }}
      >
        <div className="text-holder">
          <div className="slider-text-title">
            <div>
              خدمات فنی <span>ناصری</span>
            </div>
          </div>

          <div className="slider-text-sub fw-400">
            <div>
              نمایندگی تعمیرات لوازم خانگی : لباسشویی اتوماتیک٬ ماشین ظرفشویی٬
              یخچال فریزر٬ کولر گازی٬ اسپیلت
            </div>
            <div>
              مجموعه ما با داشتن بیشترین متقاضی‌ در نیشابور برای خرید قطعات
              دستگاه ، شوینده مناسب ،کیسه جاروبرقی و انواع لوازم جانبی ،درخدمت
              شما مشتریان گرامی میباشد .
            </div>
          </div>
        </div>
      </Col>

      <Col
        className="gutter-row"
        xs={{ span: 24 }}
        sm={{ span: 18 }}
        md={{ span: 16 }}
      >
        <div className="slider-holder">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide
              style={{ backgroundColor: "red", height: "25.438rem" }}
            >
              Slide 1
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "yellow", height: "25.438rem" }}
            >
              Slide 2
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "blue", height: "25.438rem" }}
            >
              Slide 3
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "orange", height: "25.438rem" }}
            >
              Slide 4
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "black", height: "25.438rem" }}
            >
              Slide 5
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "pink", height: "25.438rem" }}
            >
              Slide 6
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "purple", height: "25.438rem" }}
            >
              Slide 7
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "brown", height: "25.438rem" }}
            >
              Slide 8
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundColor: "white", height: "25.438rem" }}
            >
              Slide 9
            </SwiperSlide>
          </Swiper>
        </div>
      </Col>
    </Row>
  );
};

export default SliderCustom;
