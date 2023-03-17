import React from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../representation/style.scss";
import "../../assets/style/custom.scss"

const Representation = () => {
  let elements = [
    {
      icon: <AntDesignOutlined />,
      info: "Samsung",
    },
    {
      icon: <AntDesignOutlined />,
      info: "Lg",
    },
    {
      icon: <AntDesignOutlined />,
      info: "Sony",
    },
    {
      icon: <AntDesignOutlined />,
      info: "Boush",
    },
    {
      icon: <AntDesignOutlined />,
      info: "Panasonic",
    },
    {
      icon: <AntDesignOutlined />,
      info: "Samsung",
    },
    {
      icon: <AntDesignOutlined />,
      info: "Huawei",
    },
    {
      icon: <AntDesignOutlined />,
      info: "Apple",
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
          xs={{ span: 6 }}
          sm={{ span: 6 }}
          md={{ span: 3 }}
        >
          <div className="representation-info">
            <div className="avatar">
              <Avatar
              style={{
                backgroundColor:"#eff2f9"
              }}
                size={{
                  xs: 50,
                  sm: 60,
                  md: 70,
                  lg: 84,
                  xl: 90,
                  xxl: 100,
                }}
                icon={element.icon}
              />
            </div>
            <div className="avatar-info fw-500">{element.info}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Representation;
