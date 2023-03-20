import React, { useRef, useState } from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "./style.scss";
import "../../assets/style/custom.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

const ForeignSupplies = () => {
  let elements = [
    {
      image: require("../../assets/image/suppl-icon/12.png"),

      icon: <AntDesignOutlined />,
      info: "TOSHIBA",
    },
    {
      image: require("../../assets/image/suppl-icon/13.png"),

      icon: <AntDesignOutlined />,
      info: "SAMSUNG",
    },
    {
      image: require("../../assets/image/suppl-icon/14.png"),

      icon: <AntDesignOutlined />,
      info: "ARÇELIK",
    },
    {
      image: require("../../assets/image/suppl-icon/15.png"),

      icon: <AntDesignOutlined />,
      info: "PANASONIC",
    },
    {
      image: require("../../assets/image/suppl-icon/16.png"),

      icon: <AntDesignOutlined />,
      info: "LG",
    },
    {
      image: require("../../assets/image/suppl-icon/17.png"),

      icon: <AntDesignOutlined />,
      info: "KENWOOD",
    },
    {
      image: require("../../assets/image/suppl-icon/18.png"),

      icon: <AntDesignOutlined />,
      info: "INDESIT",
    },
    {
      image: require("../../assets/image/suppl-icon/19.png"),

      icon: <AntDesignOutlined />,
      info: "DAEWOO",
    },
    {
      image: require("../../assets/image/suppl-icon/20.png"),

      icon: <AntDesignOutlined />,
      info: "BOSCH",
    },
    {
      image: require("../../assets/image/suppl-icon/21.png"),

      icon: <AntDesignOutlined />,
      info: "ARISTON",
    },
    {
      image: require("../../assets/image/suppl-icon/22.png"),

      icon: <AntDesignOutlined />,
      info: "AGE",
    },
    {
      image: require("../../assets/image/suppl-icon/23.png"),

      icon: <AntDesignOutlined />,
      info: "MIDEA",
    },
    {
      image: require("../../assets/image/suppl-icon/24.png"),

      icon: <AntDesignOutlined />,
      info: "ELECTROMAX",
    },
    {
      image: require("../../assets/image/suppl-icon/25.png"),

      icon: <AntDesignOutlined />,
      info: "BLOOMBERG",
    },
    {
      image: require("../../assets/image/suppl-icon/26.png"),

      icon: <AntDesignOutlined />,
      info: "SIMENS",
    },
    {
      image: require("../../assets/image/suppl-icon/27.png"),

      icon: <AntDesignOutlined />,
      info: "WATERHOUSE",
    },
    {
      image: require("../../assets/image/suppl-icon/28.png"),

      icon: <AntDesignOutlined />,
      info: "WESTINGHOUSE",
    },
    {
      image: require("../../assets/image/suppl-icon/29.png"),

      icon: <AntDesignOutlined />,
      info: "BEKO",
    },
    {
      image: require("../../assets/image/suppl-icon/11.png"),

      icon: <AntDesignOutlined />,
      info: "SNOWA",
    },
  ];
  return (
    <Row
    id="foreign"
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Swiper
        // slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {elements.map((element, key) => (
          <SwiperSlide>
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
                    className="avtar-image"
                    style={{
                      backgroundColor: "#eff2f9",
                    }}
                    size={{
                      xs: 50,
                      sm: 60,
                      md: 70,
                      lg: 84,
                      xl: 90,
                      xxl: 100,
                    }}
                    // icon={element.icon}
                  >
                    <img src={element.image} alt="" style={{padding:"0px 30px"}}/>
                  </Avatar>
                </div>
                <h3 className="avatar-info fw-500">{element.info}</h3>
              </div>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  );
};

export default ForeignSupplies;
