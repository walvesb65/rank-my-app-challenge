import { useAppList } from "@/ui/hooks/useAppList";
import { AppForm } from "@/presentation/components/AppForm";
import AppList from "@/presentation/components/AppList";
import AppFilterForm from "@/presentation/components/AppFilterForm";

const Dashboard = () => {
  const { apps, loading, reload } = useAppList();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Cadastrar Aplicativo</h2>
      <AppForm onAppCreated={reload} />

      <h2 className="text-2xl font-bold">Filtrar Aplicativos</h2>
      <AppFilterForm />

      <h2 className="text-2xl font-bold">Aplicativos Cadastrados</h2>
      {loading ? (
        <p className="text-gray-500">Carregando apps...</p>
      ) : apps.length === 0 ? (
        <p className="text-gray-400">Nenhum aplicativo encontrado.</p>
      ) : (
        <AppList apps={apps} />
      )}
    </div>
  );
};

export default Dashboard;
