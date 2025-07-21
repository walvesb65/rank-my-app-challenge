import { Layout } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="bg-[#1A88FF] shadow-sm sticky top-0 z-50 px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <a href="/">
          <img
            src="public/Logo-RankMyApp.svg"
            className=" h-8"
            alt="logo RankMyApp"
          />
        </a>
      </div>
    </Header>
  );
};

export default AppHeader;
