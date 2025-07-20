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
import { Typography, Button } from "antd";

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

  const mockMetrics = [
    { date: "Jan", downloads: 1200 },
    { date: "Feb", downloads: 2100 },
    { date: "Mar", downloads: 1700 },
    { date: "Apr", downloads: 2500 },
    { date: "May", downloads: 2000 },
  ];

  if (!app) return null;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <Typography.Title level={3}>{app.name}</Typography.Title>
      <p className="text-gray-600">
        {app.category} • {app.platform}
      </p>
      <p>
        URL:{" "}
        <a
          href={app.url}
          className="text-blue-500 underline"
          target="_blank"
          rel="noreferrer"
        >
          {app.url}
        </a>
      </p>

      <Typography.Title level={4}>Downloads (mock)</Typography.Title>
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

      <Button onClick={() => navigate("/")}>Voltar</Button>
    </div>
  );
};

export default Details;
