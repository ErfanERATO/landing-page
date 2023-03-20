import React, { useRef, useState } from "react";
import { Col, Divider, Row, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "../representation/style.scss";
import "../../assets/style/custom.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Representation = () => {
  let elements = [
    {
      image: require("../../assets/image/suppl-icon/1.png"),

      icon: <AntDesignOutlined />,
      info: "پاکسرویس ناواران‌سرویس (امرسان) ",
    },
    {
      image: require("../../assets/image/suppl-icon/2.png"),

      icon: <AntDesignOutlined />,
      info: "همتاسرویس",
    },
    {
      image: require("../../assets/image/suppl-icon/3.png"),

      icon: <AntDesignOutlined />,
      info: "کاراسرویس",
    },
    {
      image: require("../../assets/image/suppl-icon/4.png"),

      icon: <AntDesignOutlined />,
      info: "سیهاوی",
    },
    {
      image: require("../../assets/image/suppl-icon/5.png"),

      icon: <AntDesignOutlined />,
      info: "بوش‌سرویس",
    },
    {
      image: require("../../assets/image/suppl-icon/6.png"),

      icon: <AntDesignOutlined />,
      info: "تاپ‌سرویس",
    },
    {
      image: require("../../assets/image/suppl-icon/7.png"),

      icon: <AntDesignOutlined />,
      info: "گلد‌سرویس",
    },
    {
      image: require("../../assets/image/suppl-icon/8.png"),

      icon: <AntDesignOutlined />,
      info: "نوین‌سرویس مادیران ",
    },
    {
      image: require("../../assets/image/suppl-icon/9.png"),

      icon: <AntDesignOutlined />,
      info: "نوین‌سرویس مادیران ",
    },
    {
      image: require("../../assets/image/suppl-icon/10.png"),

      icon: <AntDesignOutlined />,
      info: "نوین‌سرویس مادیران ",
    },
    {
      image: require("../../assets/image/suppl-icon/11.png"),
      icon: <AntDesignOutlined />,
      info: "نوین‌سرویس مادیران ",
    },
    {
      image: require("../../assets/image/suppl-icon/12.png"),

      icon: <AntDesignOutlined />,
      info: "نوین‌سرویس مادیران ",
    },
  ];
  return (
    <Row
      id="representation"
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
                    <img
                      src={element.image}
                      alt=""
                      style={{ padding: "0px 30px" }}
                    />
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

export default Representation;
