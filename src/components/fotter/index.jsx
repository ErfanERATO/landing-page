import React from "react";
import { Col, Divider, Row } from "antd";
import "../fotter/style.scss";

const FooterCustom = () => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" md={{ span: 6 }}>
        <div>Logo</div>
      </Col>
      <Col className="gutter-row" md={{ span: 6 }}>
        <div className="footer-description">
          <div>به شما کمک میکنیم برای کاهش عمل های</div>
          <div>مدیریتی همراه با دیجیتالی شدن</div>
        </div>
      </Col>
      <Col className="gutter-row" md={{ span: 6 }}>
        <div className="company-description">
          <div className="company-name">شرکت</div>
          <div className="company-address-info">
            <div className="company-address">خیابان ۱۵خرداد-۱۵خرداد۹</div>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" md={{ span: 6 }}>
        <div className="contact-us-description">
          <div className="contact-with-us-title">راه‌های ارتباطی با ما</div>
          <div className="contact-way-info">
            <div className="contact-number">09212737627</div>
            <div className="contact-email">erfan@gmail.com</div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FooterCustom;
