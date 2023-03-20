import React from "react";
import "../about-us-box/style.scss";
import { BsLightbulb } from "react-icons/bs";
import { Col, Divider, Row } from "antd";

const AboutBox = () => {
  // let elements = [
  //   {
  //     icon: (
  //       <img src={require("../../assets/image/icon1.svg").default} alt="" />
  //     ),
  //     // number: "+150",
  //     sub1: "ارسال",
  //     sub2: "سریع",
  //   },
  //   {
  //     icon: (
  //       <img src={require("../../assets/image/icon2.svg").default} alt="" />
  //     ),
  //     // number: "+57 k",
  //     sub1: "رضایت بالای",
  //     sub2: "مشتریان",
  //   },
  //   {
  //     icon: (
  //       <img src={require("../../assets/image/icon3.svg").default} alt="" />
  //     ),
  //     // number: "+500",
  //     sub: "قیمت مناسب",
  //   },
  //   {
  //     icon: (
  //       <img src={require("../../assets/image/icon4.svg").default} alt="" />
  //     ),
  //     // number: "+320",
  //     sub: "تیم حرفه‌ای و متخصص",
  //   },
  // ];

  return (
    <Row
    id="about-us"
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {/* {elements.map((element, key) => (
        <Col key={key} className="gutter-row" lg={6}>
          <div className="first-card">

            <div className="icon-box">
              <div className="main-icon">
                {element.icon}
              </div>
            </div>

            <div className="text">
              <p className="sub">{element.sub}</p>
              <p className="number">{element.number}</p>
            </div>
          </div>
        </Col>
      ))} */}

      <Col className="gutter-row" xs={{span:24}} sm={{span:12}}  md={{span:6}}>
        <div className="first-card">
          <div className="icon-box">
            <div className="main-icon">
              <img
                src={require("../../assets/image/icon1.svg").default}
                alt=""
              />
            </div>
          </div>

          <div className="text">
            <p className="sub">
              <span className="color-primary">ارسال</span>
              <span>سریع</span>
            </p>
          </div>
        </div>
      </Col>

      <Col className="gutter-row" xs={{span:24}} sm={{span:12}}  md={{span:6}}>
        <div className="first-card">
          <div className="icon-box">
            <div className="main-icon">
              <img
                src={require("../../assets/image/icon2.svg").default}
                alt=""
              />
            </div>
          </div>

          <div className="text">
            <p className="sub">
              <span>رضایت بالای</span>
              <span className="color-primary">مشتریان</span>
            </p>
          </div>
        </div>
      </Col>

      <Col className="gutter-row" xs={{span:24}} sm={{span:12}}  md={{span:6}}>
        <div className="first-card">
          <div className="icon-box">
            <div className="main-icon">
              <img
                src={require("../../assets/image/icon3.svg").default}
                alt=""
              />
            </div>
          </div>

          <div className="text">
            <p className="sub">
              <span className="color-primary">قیمت</span>
              <span>مناسب</span>
            </p>
          </div>
        </div>
      </Col>

      <Col className="gutter-row" xs={{span:24}} sm={{span:12}}  md={{span:6}}>
        <div className="first-card">
          <div className="icon-box">
            <div className="main-icon">
              <img
                src={require("../../assets/image/icon4.svg").default}
                alt=""
              />
            </div>
          </div>

          <div className="text">
            <p className="sub">
              <span>تیم</span>
              <span className="color-primary">حرفه‌ای و متخصص</span>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AboutBox;
