import React from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../management/style.scss";

const Management = () => {
  let elements = [
    {
      icon: <AntDesignOutlined />,
      name: "محمدرضا ناصری",
      position: "مدیر عامل",
      expertise:
        "متخصص برد های کامپیوتری و تعمیرات یخچال‌فریزر کولرگازی اسپیلت ماشین لباسشویی اتوماتیک ظرفشویی  گاز‌رومیزی ",
    },
    {
      icon: <AntDesignOutlined />,
      name: "امیرمهدی ناصری",
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
              <div className="avatar">
                <Avatar
                  style={{
                    backgroundColor: "#eff2f9",
                  }}
                  size={{
                    xs: 70,
                    sm: 70,
                    md: 80,
                    lg: 90,
                    xl: 120,
                    xxl: 130,
                  }}
                  icon={element.icon}
                />
              </div>
              <div className="card-info">
                <div className="name fw-600">
                  نام‌و‌نام‌خانوادگی : {element.name}
                </div>
                <div className="position fw-500">
                  سمت مدیریتی : {element.position}
                </div>
                <div className="expertise fw-500">
                  تخصص : {element.expertise}
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
