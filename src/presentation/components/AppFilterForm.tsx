import { Input, Select, Button, Space } from "antd";
import { useAppStore } from "@/ui/hooks/useAppStore";
import { useState } from "react";

const AppFilterForm = () => {
  const setFilters = useAppStore((s) => s.setFilters);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");

  const handleSubmit = () => {
    setFilters({ name, category, platform });
  };

  const handleReset = () => {
    setName("");
    setCategory("");
    setPlatform("");
    setFilters({ name: "", category: "", platform: "" });
  };

  return (
    <Space direction="vertical" size="middle" className="w-full mb-4">
      <Input
        placeholder="Buscar por nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        placeholder="Filtrar por categoria"
        value={category || undefined}
        onChange={setCategory}
        allowClear
      >
        <Select.Option value="Games">Games</Select.Option>
        <Select.Option value="Educação">Educação</Select.Option>
        <Select.Option value="Saúde">Saúde</Select.Option>
      </Select>
      <Select
        placeholder="Filtrar por plataforma"
        value={platform || undefined}
        onChange={setPlatform}
        allowClear
      >
        <Select.Option value="Android">Android</Select.Option>
        <Select.Option value="iOS">iOS</Select.Option>
      </Select>
      <Space>
        <Button type="primary" onClick={handleSubmit}>
          Filtrar
        </Button>
        <Button onClick={handleReset}>Limpar</Button>
      </Space>
    </Space>
  );
};

export default AppFilterForm;
