import type { App } from "@/core/entities/App";
import { Card, Tag, Typography, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { LinkOutlined } from "@ant-design/icons";

interface Props {
  app: App;
}

export const AppCard = ({ app }: Props) => {
  const navigate = useNavigate();

  const platformColor = app.platform === "iOS" ? "blue" : "green";

  return (
    <Card
      title={
        <Typography.Title level={5} ellipsis style={{ marginBottom: 0 }}>
          {app.name}
        </Typography.Title>
      }
      extra={
        <Button
          type="link"
          size="small"
          onClick={() => navigate(`/details/${app.id}`)}
        >
          Detalhes
        </Button>
      }
      style={{ height: "100%" }}
      hoverable
    >
      <Space direction="vertical" size="small" style={{ width: "100%" }}>
        <div>
          <Typography.Text type="secondary">Categoria:</Typography.Text>{" "}
          <Typography.Text>{app.category}</Typography.Text>
        </div>

        <div>
          <Typography.Text type="secondary">Plataforma:</Typography.Text>{" "}
          <Tag color={platformColor}>{app.platform}</Tag>
        </div>

        <div>
          <Typography.Text type="secondary">URL:</Typography.Text>{" "}
          <Typography.Link
            href={app.url}
            target="_blank"
            rel="noreferrer"
            ellipsis
            style={{
              maxWidth: "150px",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            <LinkOutlined />
            {app.url}
          </Typography.Link>
        </div>
      </Space>
    </Card>
  );
};
