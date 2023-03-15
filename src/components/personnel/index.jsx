import React from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../personnel/style.scss";

const Personnel = () => {
  let elements = [
    {
      icon: <AntDesignOutlined />,
      name: "اسم پرسنل",
      position: "تخصص پرسنل",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم پرسنل",
      position: "تخصص پرسنل",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم پرسنل",
      position: "تخصص پرسنل",
    },
    {
      icon: <AntDesignOutlined />,
      name: "اسم پرسنل",
      position: "تخصص پرسنل",
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
                <div className="name">{element.name}</div>
                <div className="position">{element.position}</div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Personnel;
