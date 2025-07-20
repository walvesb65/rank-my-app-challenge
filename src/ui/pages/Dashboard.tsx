import { useAppList } from "@/ui/hooks/useAppList";
import { AppForm } from "@/presentation/components/AppForm";
import AppList from "@/presentation/components/AppList";
import AppFilterForm from "@/presentation/components/AppFilterForm";
import { Typography, Divider } from "antd";

const Dashboard = () => {
  const { apps, loading, reload } = useAppList();

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <Typography.Title level={3}>Cadastrar Novo Aplicativo</Typography.Title>
      <AppForm onAppCreated={reload} />

      <Divider />

      <Typography.Title level={3}>Aplicativos Cadastrados</Typography.Title>

      <AppFilterForm />

      {loading ? (
        <p>Carregando aplicativos...</p>
      ) : apps.length === 0 ? (
        <p>Nenhum app encontrado.</p>
      ) : (
        <AppList apps={apps} />
      )}
    </div>
  );
};

export default Dashboard;
