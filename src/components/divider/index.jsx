import React from "react";
import { Col, Row } from "antd";
import "../../assets/style/custom.scss";
import "../divider/style.scss";

const Divider = () => {
  return (
    <Row>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
        <div className="divider-holder">
          <div className="divider-top fw-500">
            <p>محصولات ما</p>
          </div>

          <div>
            <h2 className="divider-title fw-600">
              اعتماد شما و سپردن پروژه به <span>متخصصان</span>
            </h2>
          </div>

          <div className="divider-description">
            <p className="fw-500">
              خدمات فناوری اطلاعات ما به کارشناسان تجارت و فناوری همگرا می شوند
              تا به مدیریت دسته های تجاری کمک کنند
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Divider;
