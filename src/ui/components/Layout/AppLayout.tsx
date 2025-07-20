import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#001529",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography.Title level={3} style={{ color: "#fff", margin: 0 }}>
          RankMyApp
        </Typography.Title>
      </Header>

      <Content style={{ padding: "24px" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
