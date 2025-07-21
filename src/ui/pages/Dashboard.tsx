import { useAppList } from "@/ui/hooks/useAppList";
import { AppForm } from "@/presentation/components/AppForm";
import AppList from "@/presentation/components/AppList";
import { AppFilterForm } from "@/presentation/components/AppFilterForm";
import { Card, Col, Row, Typography, Collapse, Grid, Skeleton } from "antd";
import { EmptyState } from "../components/EmptyState";

const Dashboard = () => {
  const { apps, loading, reload } = useAppList();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <div className="max-w-7xl mx-auto px-4 pt-6 pb-10 space-y-8">
      <div className=" pt-4 rounded">
        <AppFilterForm />
      </div>

      <Row gutter={[24, 24]} align="stretch">
        <Col xs={24} md={8}>
          {screens.md ? (
            <Card title="Cadastrar Aplicativo" className="shadow-sm">
              <AppForm onAppCreated={reload} />
            </Card>
          ) : (
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <Typography.Title
                      level={5}
                      ellipsis
                      style={{ marginBottom: 0 }}
                    >
                      Cadastrar Aplicativo
                    </Typography.Title>
                  ),
                  children: (
                    <div className="bg-white p-4">
                      <AppForm onAppCreated={reload} />
                    </div>
                  ),
                },
              ]}
              className="bg-white rounded shadow-sm"
            />
          )}
        </Col>

        <Col xs={24} md={16}>
          <Typography.Title level={4}>Aplicativos Cadastrados</Typography.Title>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(screens.md ? 4 : 1)].map((_, i) => (
                <Skeleton
                  key={i}
                  active
                  title={{ width: "60%" }}
                  paragraph={{ rows: 3, width: ["100%", "100%", "80%"] }}
                  className="p-4 bg-white rounded shadow-sm"
                />
              ))}
            </div>
          ) : apps.length === 0 ? (
            <EmptyState message="Nenhum aplicativo encontrado." />
          ) : (
            <div className="p-2 space-y-4">
              <AppList apps={apps} />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
