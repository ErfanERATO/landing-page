import React, { useRef, useState } from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "./style.scss";
import "../../assets/style/custom.scss"


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const InnerSupplies = () => {
  let elements = [
    {
      icon: <AntDesignOutlined />,
      info: "پاکشوما",
    },
    {
      icon: <AntDesignOutlined />,
      info: "امرسان",
    },
    {
      icon: <AntDesignOutlined />,
      info: "هیمالیا",
    },
    {
      icon: <AntDesignOutlined />,
      info: "سینجر",
    },
    {
      icon: <AntDesignOutlined />,
      info: "سام",
    },
    {
      icon: <AntDesignOutlined />,
      info: "بلنتون",
    },
    {
      icon: <AntDesignOutlined />,
      info: "فردولین",
    },
    {
      icon: <AntDesignOutlined />,
      info: "زیروات",
    },
    {
      icon: <AntDesignOutlined />,
      info: "بست",
    },
    {
      icon: <AntDesignOutlined />,
      info: "ایکس‌ویژن",
    },
    {
      icon: <AntDesignOutlined />,
      info: "تی.سی.ال",
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
                    icon={element.icon}
                  />
                </div>
                <div className="avatar-info fw-500">{element.info}</div>
              </div>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  );
};

export default InnerSupplies;
