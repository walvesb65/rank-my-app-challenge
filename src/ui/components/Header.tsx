import { Layout, Typography } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="bg-white shadow-sm sticky top-0 z-50 px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <AppstoreOutlined className="text-blue-500 text-xl" />
        <Typography.Title level={4} className="!m-0">
          RankMyApp
        </Typography.Title>
      </div>
    </Header>
  );
};

export default AppHeader;
