import { useNavigate, useParams } from "react-router-dom";
import { useAppStore } from "@/ui/hooks/useAppStore";
import { AppForm } from "@/presentation/components/AppForm";
import { Typography, Card, message, Button, Space } from "antd";
import { useEffect, useState } from "react";
import type { App } from "@/core/entities/App";
import { ArrowLeftOutlined } from "@ant-design/icons";

const EditApp = () => {
  const { id } = useParams<{ id: string }>();
  const { apps } = useAppStore();
  const navigate = useNavigate();
  const [app, setApp] = useState<App | null>(null);

  useEffect(() => {
    const found = apps.find((a) => a.id === id);
    if (!found) {
      message.error("Aplicativo não encontrado.");
      navigate("/");
      return;
    }
    setApp(found);
  }, [id, apps, navigate]);

  const handleUpdate = () => {
    message.success("Aplicativo atualizado com sucesso!");
    navigate("/");
  };

  const handleBack = () => navigate("/");

  if (!app) return null;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <Space direction="vertical" size="middle" className="w-full">
        <div className="flex justify-between">
          <Typography.Title level={3}>Editar Aplicativo</Typography.Title>
          <Button
            type="default"
            icon={<ArrowLeftOutlined />}
            onClick={handleBack}
          >
            Voltar
          </Button>
        </div>

        <Card variant="outlined">
          <AppForm initialValues={app} onAppUpdated={handleUpdate} />
        </Card>
      </Space>
    </div>
  );
};

export default EditApp;
