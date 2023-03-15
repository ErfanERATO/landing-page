import React, { useState } from "react";
import { Carousel } from "antd";
import { Col, Divider, Row } from "antd";
import "../slider/style.scss";
import vector1 from "../../assets/image/vector1.jpg";
import vector2 from "../../assets/image/vector2.jpg";
import image3 from "../../assets/image/image3.jpg";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
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
        md={{span:12}}
        style={{
          justifyContent: "center",
        }}
      >
        <div>
          <div className="text-slider">
            <div className="title">سرویس فنی و</div>
            <div className="title">خدماتی ناصری</div>
            <div className="sub-title">
              <p> ما در اینجا هستم که بگیم سلام بچه کونیا خوب کونی</p>
              <p> خوب کونی شدینا حالا بگو ببینم کون میدی یا نه</p>
              <p> همممم من شاید کونم خیلی تنگ باشه ولی من به</p>
            </div>
          </div>
        </div>
      </Col>

      <Col className="gutter-row" md={{span:12}}>
        <div>
          <Carousel autoplay>
            <div>
              <img src={vector1} alt="" style={contentStyle} />
            </div>
            <div>
              <img src={vector2} alt="" style={contentStyle} />
            </div>
            <div>
              <img src={image3} alt="" style={contentStyle} />
            </div>
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

export default SliderCustom;
