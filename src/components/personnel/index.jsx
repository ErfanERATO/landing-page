import React from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../personnel/style.scss";

const Personnel = () => {
  let elements = [
    {
      img: require("../../assets/image/useravatar.png"),
      name: "آرمین مقیم",
      position: "تکنسین یخچال فریز ",
    },
    {
      img: require("../../assets/image/useravatar.png"),
      name: "حسن موئمنی",
      position: "تکنسین تخصصی یخچال فریزرهای‌ایرانی ",
    },
    {
      img: require("../../assets/image/useravatar.png"),
      name: "احمد مجردی",
      position: "تکنیسین ظرفشویی و لباسشویی اتوماتیک ",
    },
    {
      img: require("../../assets/image/useravatar.png"),
      name: "سجاد شهری زاد",
      position: "تکنسین لباسشویی اتوماتیک",
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
        <Col
          key={key}
          className="gutter-row"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <div className="all-card">
            <div className="card">
              <div className="avatar">
                <Avatar
                  style={{
                    backgroundColor: "#eff2f9",
                  }}
                  size={{
                    xs: 60,
                    sm: 60,
                    md: 60,
                    lg: 60,
                    xl: 70,
                    xxl: 100,
                  }}
                  src={element.img}
                />
              </div>
              <div className="card-info">
                <div className="personal-name ">
                  <h3 className="fw-500">{element.name}</h3>
                </div>
                <div className="personal-position fw-500">
                  <p>{element.position}</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Personnel;
