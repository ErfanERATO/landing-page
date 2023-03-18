import React from "react";
import { Col, Row } from "antd";
import "../footercustom/style.scss";
import "../../assets/style/custom.scss";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const FooterCustom = () => {
  const position = [51.505, -0.09];
  return (
    <Row>
      <Col xs={{span:24}} sm={{span:24}}  md={{ span: 12 }}>
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
      <Col xs={{span:24}} sm={{span:24}}  md={{ span: 12 }}>
        <div className="location">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Col>
    </Row>
  );
};

export default FooterCustom;
