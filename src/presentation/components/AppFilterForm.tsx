import { useAppStore } from "@/ui/hooks/useAppStore";
import { useState } from "react";
import { Form, Input, Select, Button, Space } from "antd";

const { Option } = Select;

export const AppFilterForm = () => {
  const setFilters = useAppStore((s) => s.setFilters);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");

  const handleSubmit = () => {
    setFilters({ name, category, platform });
  };

  const clearFilters = () => {
    setName("");
    setCategory("");
    setPlatform("");
    setFilters({ name: "", category: "", platform: "" });
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      className="p-4 border rounded mb-6 bg-white shadow-sm"
    >
      <Space wrap size="middle">
        <Form.Item label="Nome">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Buscar por nome"
            allowClear
          />
        </Form.Item>

        <Form.Item label="Categoria">
          <Select
            value={category || undefined}
            onChange={(value) => setCategory(value)}
            placeholder="Todas as categorias"
            allowClear
            style={{ width: 160 }}
          >
            <Option value="Games">Games</Option>
            <Option value="Finanças">Finanças</Option>
            <Option value="Saúde">Saúde</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Plataforma">
          <Select
            value={platform || undefined}
            onChange={(value) => setPlatform(value)}
            placeholder="Todas as plataformas"
            allowClear
            style={{ width: 160 }}
          >
            <Option value="Android">Android</Option>
            <Option value="iOS">iOS</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Filtrar
            </Button>
            <Button htmlType="button" onClick={clearFilters}>
              Limpar
            </Button>
          </Space>
        </Form.Item>
      </Space>
    </Form>
  );
};
