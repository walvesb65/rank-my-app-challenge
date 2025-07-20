import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/router";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/core/theme/antd.config";

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
