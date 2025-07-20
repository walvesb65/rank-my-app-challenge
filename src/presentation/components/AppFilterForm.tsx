import { useAppStore } from "@/ui/hooks/useAppStore";
import { useState } from "react";
import { Form, Input, Select, Button, Row, Col, Typography, Grid } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;
const { useBreakpoint } = Grid;

export const AppFilterForm = () => {
  const setFilters = useAppStore((s) => s.setFilters);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");

  const screens = useBreakpoint();

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
      className="p-4 border rounded mb-6 bg-white shadow-sm sticky top-16 z-10"
    >
      {!screens.md && (
        <Typography.Title level={5} style={{ marginBottom: 16 }}>
          Filtro de aplicativos
        </Typography.Title>
      )}

      <Row gutter={screens.md ? [16, 16] : [0, 0]}>
        <Col xs={24} md={6}>
          <Form.Item label="Nome">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Buscar por nome"
              allowClear
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={6}>
          <Form.Item label="Categoria">
            <Select
              value={category || undefined}
              onChange={(value) => setCategory(value)}
              placeholder="Todas as categorias"
              allowClear
            >
              <Option value="Games">Games</Option>
              <Option value="Finanças">Finanças</Option>
              <Option value="Saúde">Saúde</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} md={6}>
          <Form.Item label="Plataforma">
            <Select
              value={platform || undefined}
              onChange={(value) => setPlatform(value)}
              placeholder="Todas as plataformas"
              allowClear
            >
              <Option value="Android">Android</Option>
              <Option value="iOS">iOS</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} md={6}>
          <Form.Item label="&nbsp;">
            <div className="flex items-center gap-2">
              <Button type="primary" htmlType="submit" block>
                Pesquisar aplicativo
              </Button>
              <Button
                icon={<DeleteOutlined />}
                onClick={clearFilters}
                type="default"
              />
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
