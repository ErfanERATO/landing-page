import { Layout, Menu, theme } from "antd";
import "../assets/style/custom.scss";
import FooterCustom from "../components/footercustom";
import { RiTelegramLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const SiteLayout = ({ children }) => {
  const {
    token: {
      colorBgContainer,
      headerBackGround,
      pageBackaground,
      headerTextColor,
    },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <>
      <Header
        className="fw-600"
        style={{
          position: "sticky",
          top: 0,
          padding: "10px 40px",
          zIndex: 99999999,
          width: "100vw",
          background: headerBackGround,
          height: "83px",
        }}
      >
        <div
          style={{
            float: "right",
          }}
        >
          <img
            src={require("../assets/image/with_text.png")}
            alt=""
            style={{ width: "auto", height: "55px" }}
          />
        </div>

        <div
          style={{
            float: "left",
          }}
        >
          <a href="#">
            <RiTelegramLine style={{ fontSize: "20px" }} />
          </a>
          <a href="#">
            <AiOutlineInstagram
              style={{ marginLeft: "10px", fontSize: "21px" }}
            />
          </a>
        </div>

        <Menu
          style={{
            color: headerTextColor,
            justifyContent: "center",
            direction: "rtl",
          }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          onClick={(e) => {
            const element = document.getElementById(e.key);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          items={[
            {
              key: "1",
              label: "صفحه اصلی",
              style: { padding: "0px 25px" },
            },
            {
              key: "home",
              label: "درباره‌ی ما",
              style: { padding: "0px 25px" },
            },
            {
              key: "about-us",
              label: "نمایندگی‌های فعال",
              style: { padding: "0px 25px" },
            },
            {
              key: "divider",
              label: "برند‌های خارجی",
              style: { padding: "0px 25px" },
            },
            {
              key: "foreign",
              label: "برند‌های ایرانی",
              style: { padding: "0px 25px" },
            },
            {
              key: "iran",
              label: "کادر مدیریتی",
              style: { padding: "0px 25px" },
            },
            {
              key: "manage",
              label: "پرسنل‌و‌تکنسین",
              style: { padding: "0px 25px" },
            },
          ]}
        />
      </Header>
      <Layout
        style={{
          // padding: "0px 40px",
          minHeight: "100vh",
          background: pageBackaground,
          direction: "rtl",
        }}
      >
        <Content className="site-layout fw-600">
          <div
            style={{
              paddingTop: "0px",
              minHeight: 380,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </>
  );
};
export default SiteLayout;
