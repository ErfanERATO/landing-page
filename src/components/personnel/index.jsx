import React from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../personnel/style.scss";

const Personnel = () => {
  let elements = [
    {
      icon: <AntDesignOutlined />,
      name: "آرمین مقیم",
      position: "تکنسین یخچال فریز ",
    },
    {
      icon: <AntDesignOutlined />,
      name: "حسن موئمنی",
      position: "تکنسین تخصصی یخچال فریزرهای‌ایرانی ",
    },
    {
      icon: <AntDesignOutlined />,
      name: "احمد مجردی",
      position: "تکنیسین ظرفشویی و لباسشویی اتوماتیک ",
    },
    {
      icon: <AntDesignOutlined />,
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
          sm={{ span: 12 }}
          md={{ span: 6 }}
        >
          <div className="all-card">
            <div className="card">
              <div className="avatar">
                <Avatar
                  style={{
                    backgroundColor: "#eff2f9",
                  }}
                  size={{
                    xs: 90,
                    sm: 60,
                    md: 70,
                    lg: 84,
                    xl: 90,
                    xxl: 100,
                  }}
                  icon={element.icon}
                />
              </div>
              <div className="card-info">
                <div className="name fw-600">{element.name}</div>
                <div className="position fw-500">{element.position}</div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Personnel;