import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../Header";

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout className="min-h-screen">
      <AppHeader />
      <Content className="p-6 bg-gray-50">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
