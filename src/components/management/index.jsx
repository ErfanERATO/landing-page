import React from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../management/style.scss";

const Management = () => {
  let elements = [
    {
      icon: <AntDesignOutlined />,
      name: "اسم کادر مدیریت",
      position: "سمت کادر مدیریت",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم کادر مدیریت",
      position: "سمت کادر مدیریت",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم کادر مدیریت",
      position: "سمت کادر مدیریت",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم کادر مدیریت",
      position: "سمت کادر مدیریت",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم کادر مدیریت",
      position: "سمت کادر مدیریت",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم کادر مدیریت",
      position: "سمت کادر مدیریت",
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
          sm={{ span: 12 }}
          md={{ span: 4 }}
        >
          <div className="whole-card">
            <div className="main-card">
              <div className="avatar">
                <Avatar
                style={{
                  backgroundColor:"#eff2f9"
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
export default Management;
