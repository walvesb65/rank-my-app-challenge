import type { App } from "@/core/entities/App";
import { Card, Typography, Tag } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

type Props = {
  app: App;
};

export const AppCard = ({ app }: Props) => {
  const platformColor = app.platform === "Android" ? "green" : "blue";

  return (
    <Card
      hoverable
      className="w-full shadow-sm transition-all"
      title={<Title level={5}>{app.name}</Title>}
      extra={<Link to={`/details/${app.id}`}>Detalhes</Link>}
    >
      <Text>
        <strong>Categoria:</strong> {app.category}
      </Text>
      <br />
      <Text>
        <strong>Plataforma:</strong>{" "}
        <Tag color={platformColor} className="capitalize">
          {app.platform}
        </Tag>
      </Text>
      <br />
      <Text>
        <strong>URL:</strong>{" "}
        <a
          href={app.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline break-all"
        >
          {app.url}
        </a>
      </Text>
    </Card>
  );
};

export default AppCard;
