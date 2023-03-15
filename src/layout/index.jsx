import { Layout, Menu, theme } from "antd";
import "../assets/style/custom.scss";
import FooterCustom from "../components/fotter";

const { Header, Content, Footer } = Layout;

const SiteLayout = ({ children }) => {
  const {
    token: { colorBgContainer, headerBackGround, pageBackaground },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: pageBackaground,
        direction: "rtl",
        padding: "0px 40px",
      }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          padding: "20px 0px",
          zIndex: 1,
          width: "100%",
          background: headerBackGround,
          height: "83px",
        }}
      >
        {/* <div
          style={{
            float: "right",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "#83afd4",
          }}
        /> */}
        <Menu
          // theme="dark"
          style={{ color: "#a4a5a5" }}
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
              label: "نمایندگی‌ها",
              style: { padding: "0px 25px" },
            },
            {
              key: "3",
              label: "پرسنل",
              style: { padding: "0px 25px" },
            },
            {
              key: "4",
              label: "مدیریت",
              style: { padding: "0px 25px" },
            },
            {
              key: "5",
              label: "خدمات",
              style: { padding: "0px 25px" },
            },
          ]}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "50px 0px",
        }}
      >
        <div
          style={{
            padding: 24,
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
