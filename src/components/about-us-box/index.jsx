import React from "react";
import "../about-us-box/style.scss";
import { BsLightbulb } from "react-icons/bs";
import { Col, Divider, Row } from "antd";

const AboutBox = () => {
  let elements = [
    {
      number: "+150",
      sub: "همکاری سالانه",
    },
    {
      number: "+57 k",
      sub: "پروژه‌های تکمیل شده",
    },
    {
      number: "+500",
      sub: "مشتریان خوشحال",
    },
    {
      number: "+320",
      sub: "کار با تحقیق و بررسی",
    },
  ];

  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {elements.map((element, key) => (
        <Col key={key} className="gutter-row" lg={6} >
          <div className="first-card">
            <div className="icon-box">
              <div className="main-icon">
                <BsLightbulb fontSize="30px" color="#3b82f6"/>
              </div>
            </div>
            <div className="text">
              <div className="number">{element.number}</div>
              <div className="sub">{element.sub}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default AboutBox;
