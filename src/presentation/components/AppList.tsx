import type { App } from "@/core/entities/App";
import AppCard from "./AppCard";
import { Row, Col } from "antd";

type Props = {
  apps: App[];
};

const AppList = ({ apps }: Props) => {
  return (
    <Row gutter={[16, 16]}>
      {apps.map((app) => (
        <Col xs={24} sm={12} lg={8} key={app.id}>
          <AppCard app={app} />
        </Col>
      ))}
    </Row>
  );
};

export default AppList;
