import React from "react";
import { Col, Row } from "antd";
import "../footercustom/style.scss";
import "../../assets/style/custom.scss";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const FooterCustom = () => {
  return (
    <Row>
      <Col md={{ span: 12 }}>
        <div className="form">
          <h2 className="fw-600 form-title">ارتباط با ما</h2>
          <div className="form-description fw-500">
            <div style={{ paddingLeft: "180px" }}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
          <div className="form-location fw-500">
            <ImLocation style={{ color: "#3b82f6", marginLeft: "10px" }} />
            <div>نیشابور - بلوار طالقانی</div>
          </div>
          <div className="form-phone fw-500">
            <BsTelephoneFill style={{ color: "#3b82f6", marginLeft: "10px" }} />
            <div>09214134315</div>
          </div>
          <div className="form-email fw-500">
            <MdEmail style={{ color: "#3b82f6", marginLeft: "10px" }} />
            <div>sdfsdf@gmail.com</div>
          </div>
        </div>
      </Col>
      <Col md={{ span: 12 }}>
        <div className="location">asdasdasd</div>
      </Col>
    </Row>
  );
};

export default FooterCustom;
