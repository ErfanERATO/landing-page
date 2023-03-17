import React, { useState } from "react";
import { Carousel } from "antd";
import { Col, Divider, Row } from "antd";
import "../slider/style.scss";
import "../../assets/style/custom.scss";

const contentStyle = {
  height: "25.438rem",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

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
          <Carousel autoplay className="carousel">
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

export default SliderCustom;
