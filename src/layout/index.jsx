import { Layout, Menu, theme } from "antd";
import "../assets/style/custom.scss";
import FooterCustom from "../components/fotter";

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
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: pageBackaground,
        direction: "rtl",
      }}
    >
      <Header
        className="fw-600"
        style={{
          position: "sticky",
          top: 0,
          padding: "20px 0px",
          zIndex: 100,
          width: "100%",
          background: headerBackGround,
          height: "83px",
        }}
      >
        <div
          style={{
            float: "right",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "#83afd4",
          }}
        />
        <Menu
          // theme="dark"
          style={{ color: headerTextColor, paddingRight:"45px" }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            {
              key: "1",
              label: "صفحه اصلی",
              style: { padding: "0px 25px" },
            },
            {
              key: "2",
              label: "درباره‌ی ما",
              style: { padding: "0px 25px" },
            },
            {
              key: "3",
              label: "نمایندگی‌های فعال",
              style: { padding: "0px 25px" },
            },
            {
              key: "4",
              label: "برند‌های خارجی",
              style: { padding: "0px 25px" },
            },
            {
              key: "5",
              label: "برند‌های ایرانی",
              style: { padding: "0px 25px" },
            },
            {
              key: "6",
              label: "کادر مدیریتی",
              style: { padding: "0px 25px" },
            },
            {
              key: "7",
              label: "پرسنل‌و‌تکنسین",
              style: { padding: "0px 25px" },
            },
          ]}
        />
      </Header>
      <Content
        className="site-layout fw-600"
        style={{
          padding: "00px 0px",
        }}
      >
        <div
          style={{
            padding: 40,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer>
        <FooterCustom />
      </Footer>
    </Layout>
  );
};
export default SiteLayout;
