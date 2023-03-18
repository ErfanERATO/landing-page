import React from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../management/style.scss";

const Management = () => {
  let elements = [
    {
      name: "محمدرضا ناصری",
      img: require("../../assets/image/useravatar.png"),
      position: "مدیر عامل",
      expertise:
        "متخصص برد های کامپیوتری و تعمیرات یخچال‌فریزر کولرگازی اسپیلت ماشین لباسشویی اتوماتیک ظرفشویی  گاز‌رومیزی ",
    },
    {
      name: "امیرمهدی ناصری",
      img: require("../../assets/image/useravatar.png"),
      position: "مدیریت داخلی",
      expertise:
        "امیرمهدی ناصری کارشناس برد های کامپیوتری و متخصص تعمیرات یخچال‌فریزر  کولرگازی اسپیلت ماشین لباسشویی اتوماتیک",
    },
  ];
  return (
    <Row
      gutter={{
        xs: 40,
        sm: 38,
        md: 24,
        lg: 32,
      }}
      span={{
        xs: 24,
        sm: 24,
        md: 4,
      }}
    >
      {elements.map((element, key) => (
        <Col
          key={key}
          className="gutter-row"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
        >
          <div className="card-holder">
            <div className="main-card">
              <div className="avatar-name-position-expertise">
                <div className="avatar-name-position">
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

                  <div className="name-position">
                    <div className="name">
                      <h3 className="fw-500">{element.name}</h3>
                    </div>

                    <div className="position">
                      <p>{element.position}</p>
                    </div>
                  </div>
                </div>

                <div className="maneger-description fw-500">
                  <p>{element.expertise}</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
export default Management;
