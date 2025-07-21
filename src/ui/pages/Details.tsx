import { useParams, useNavigate } from "react-router-dom";
import { useAppStore } from "@/ui/hooks/useAppStore";
import { useEffect, useState } from "react";
import type { App } from "@/core/entities/App";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Typography, Card, Button, Space, Tag, Divider } from "antd";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const apps = useAppStore((s) => s.apps);
  const [app, setApp] = useState<App | null>(null);
  // const screens = Grid.useBreakpoint();

  useEffect(() => {
    const load = async () => {
      const found = await apps.find((a) => a.id === id);
      if (!found) return navigate("/");
      setApp(found);
    };
    load();
  }, [apps, id, navigate]);

  const mockMetrics = [
    { date: "Jan", downloads: 1200 },
    { date: "Feb", downloads: 2100 },
    { date: "Mar", downloads: 1700 },
    { date: "Apr", downloads: 2500 },
    { date: "May", downloads: 2000 },
  ];

  if (!app) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-6 pb-10">
      <Card variant="outlined" className="shadow-sm">
        <Space direction="vertical" size="middle" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <Typography.Title level={3} className="!mb-0">
              {app.name}
            </Typography.Title>
            <Button onClick={() => navigate("/")} type="default">
              Voltar
            </Button>
          </div>

          <div className="space-y-1">
            <Typography.Text type="secondary">
              Categoria: {app.category}
            </Typography.Text>
            <br />
            <Typography.Text>
              Plataforma:{" "}
              <Tag
                color={app.platform === "Android" ? "green" : "blue"}
                style={{ fontWeight: "bold" }}
              >
                {app.platform}
              </Tag>
            </Typography.Text>
            <br />
            <a href={app.url} target="_blank" rel="noreferrer">
              URL:{" "}
              <Typography.Text style={{ color: "#1677ff" }} copyable>
                {app.url.length > 40
                  ? `${app.url.substring(0, 40)}...`
                  : app.url}
              </Typography.Text>
            </a>
          </div>

          <Divider />

          <Typography.Title level={4}>Downloads simulados</Typography.Title>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockMetrics}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="downloads"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Space>
      </Card>
    </div>
  );
};

export default Details;
