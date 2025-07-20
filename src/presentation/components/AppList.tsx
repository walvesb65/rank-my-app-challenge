import { AppCard } from "./AppCard";
import type { App } from "@/core/entities/App";
import { Row, Col } from "antd";

interface Props {
  apps: App[];
}

const AppList = ({ apps }: Props) => {
  return (
    <Row gutter={[16, 16]}>
      {apps.map((app) => (
        <Col key={app.id} xs={24} sm={12} md={12} lg={8}>
          <AppCard app={app} />
        </Col>
      ))}
    </Row>
  );
};

export default AppList;
