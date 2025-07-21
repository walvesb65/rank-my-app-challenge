import type { App } from "@/core/entities/App";
import { Card, Tag, Typography, Button, Space, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  EllipsisOutlined,
  LinkOutlined,
  EditOutlined,
  DeleteOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { useAppStore } from "@/ui/hooks/useAppStore";

interface Props {
  app: App;
}

export const AppCard = ({ app }: Props) => {
  const navigate = useNavigate();
  const { removeApp } = useAppStore();

  const platformColor = app.platform === "iOS" ? "blue" : "green";

  const handleEdit = () => navigate(`/edit/${app.id}`);

  const handleDelete = async () => {
    await removeApp(app.id);
  };

  const menu = (
    <Menu>
      <Menu.Item
        icon={<BarChartOutlined />}
        onClick={() => navigate(`/details/${app.id}`)}
      >
        Detalhes
      </Menu.Item>
      <Menu.Item icon={<EditOutlined />} onClick={handleEdit}>
        Editar
      </Menu.Item>
      <Menu.Item icon={<DeleteOutlined />} danger onClick={handleDelete}>
        Deletar
      </Menu.Item>
    </Menu>
  );

  return (
    <Card
      title={
        <Typography.Title level={5} ellipsis style={{ marginBottom: 0 }}>
          {app.name}
        </Typography.Title>
      }
      extra={
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button type="text" icon={<EllipsisOutlined />} />
        </Dropdown>
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
