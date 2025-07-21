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
  CartesianGrid,
} from "recharts";
import { Typography, Card, Button, Space, Tag, Divider, Row, Col } from "antd";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const apps = useAppStore((s) => s.apps);
  const [app, setApp] = useState<App | null>(null);

  useEffect(() => {
    const load = async () => {
      const found = await apps.find((a) => a.id === id);
      if (!found) return navigate("/");
      setApp(found);
    };
    load();
  }, [apps, id, navigate]);

  const metrics = [
    {
      date: "Jan",
      downloads: 1200,
      ratings: 4.2,
      keywords: 15,
      conversionRate: 2.5,
    },
    {
      date: "Feb",
      downloads: 2100,
      ratings: 4.5,
      keywords: 18,
      conversionRate: 3.1,
    },
    {
      date: "Mar",
      downloads: 1700,
      ratings: 4.3,
      keywords: 16,
      conversionRate: 2.9,
    },
    {
      date: "Apr",
      downloads: 2500,
      ratings: 4.7,
      keywords: 20,
      conversionRate: 3.4,
    },
    {
      date: "May",
      downloads: 2000,
      ratings: 4.6,
      keywords: 19,
      conversionRate: 3.0,
    },
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

          <Row gutter={[16, 16]}>
            {[
              {
                title: "Downloads simulados",
                description: "Número de downloads mensais estimados do app.",
                key: "downloads",
                stroke: "#3b82f6",
              },
              {
                title: "Avaliação Média",
                description: "Média de estrelas dadas pelos usuários (0-5).",
                key: "ratings",
                stroke: "#f59e0b",
              },
              {
                title: "Palavras-chave ranqueadas",
                description:
                  "Qtde. de palavras-chave que o app está posicionado.",
                key: "keywords",
                stroke: "#10b981",
              },
              {
                title: "Taxa de Conversão",
                description: "Proporção de visitas que resultam em downloads.",
                key: "conversionRate",
                stroke: "#ef4444",
                unit: "%",
              },
            ].map(({ title, description, key, stroke, unit }) => (
              <Col xs={24} md={12} key={key}>
                <Card variant="outlined" className="shadow-sm">
                  <Typography.Title level={5}>{title}</Typography.Title>
                  <Typography.Text type="secondary">
                    {description}
                  </Typography.Text>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={metrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis unit={unit} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey={key}
                        stroke={stroke}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      </Card>
    </div>
  );
};

export default Details;
