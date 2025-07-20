import { useState } from "react";
import type { App } from "@/core/entities/App";
import { CreateAppUseCase } from "@/core/useCases/createApp";
import { LocalAppRepository } from "@/infrastructure/repositories/LocalAppRepository";
import { Button, Form, Input, Select } from "antd";

interface Props {
  onAppCreated?: () => void;
}

export const AppForm = ({ onAppCreated }: Props) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: Omit<App, "id">) => {
    setLoading(true);
    const repo = new LocalAppRepository();
    const useCase = new CreateAppUseCase(repo);
    await useCase.execute(values);
    form.resetFields();
    setLoading(false);
    onAppCreated?.();
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
        <Input placeholder="Nome do app" />
      </Form.Item>

      <Form.Item name="category" label="Categoria" rules={[{ required: true }]}>
        <Input placeholder="Categoria" />
      </Form.Item>

      <Form.Item
        name="platform"
        label="Plataforma"
        rules={[{ required: true }]}
      >
        <Select placeholder="Selecione">
          <Select.Option value="Android">Android</Select.Option>
          <Select.Option value="iOS">iOS</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="url" label="URL" rules={[{ required: true }]}>
        <Input placeholder="https://..." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  );
};
