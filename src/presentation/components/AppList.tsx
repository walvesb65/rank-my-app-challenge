import type { App } from "@/core/entities/App";
import { Card, List, Typography } from "antd";
import { Link } from "react-router-dom";

interface Props {
  apps: App[];
}

const { Text } = Typography;

const AppList = ({ apps }: Props) => {
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={apps}
      renderItem={(app) => (
        <List.Item>
          <Card
            title={app.name}
            extra={<Link to={`/app/${app.id}`}>Detalhes</Link>}
          >
            <Text type="secondary">Categoria:</Text> {app.category} <br />
            <Text type="secondary">Plataforma:</Text> {app.platform} <br />
            <Text type="secondary">URL:</Text>{" "}
            <a href={app.url} target="_blank" rel="noreferrer">
              {app.url}
            </a>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default AppList;
