import { useAppList } from "@/ui/hooks/useAppList";
import { AppForm } from "@/presentation/components/AppForm";
import AppList from "@/presentation/components/AppList";
import { AppFilterForm } from "@/presentation/components/AppFilterForm";
import { Card, Col, Row, Typography } from "antd";

const Dashboard = () => {
  const { apps, loading, reload } = useAppList();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <AppFilterForm />

      <Row gutter={[24, 24]} align="stretch">
        <Col xs={24} md={8}>
          <Card title="Cadastrar Aplicativo" bordered>
            <AppForm onAppCreated={reload} />
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Typography.Title level={4}>Aplicativos Cadastrados</Typography.Title>
          {loading ? (
            <p>Carregando apps...</p>
          ) : apps.length === 0 ? (
            <p className="text-gray-400">Nenhum aplicativo encontrado.</p>
          ) : (
            <AppList apps={apps} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
