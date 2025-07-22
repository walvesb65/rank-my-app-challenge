import type { App } from "@/core/entities/App";
import { Button, Form, Input, Select } from "antd";
import { useState, useEffect } from "react";
import { useAppStore } from "@/ui/hooks/useAppStore";

interface Props {
  onAppCreated?: () => void;
  onAppUpdated?: () => void;
  initialValues?: App | null;
}

export const AppForm = ({
  onAppCreated,
  onAppUpdated,
  initialValues,
}: Props) => {
  const [form] = Form.useForm();
  const { createApp, updateApp } = useAppStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleSubmit = async (values: Omit<App, "id">) => {
    setLoading(true);

    if (initialValues) {
      const updated: App = { ...initialValues, ...values };
      await updateApp(updated);
      onAppUpdated?.();
    } else {
      await createApp(values);
      onAppCreated?.();
    }

    form.resetFields();
    setLoading(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={initialValues || {}}
    >
      <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
        <Input placeholder="Nome do app" />
      </Form.Item>

      <Form.Item name="category" label="Categoria" rules={[{ required: true }]}>
        <Select placeholder="Selecione a categoria">
          <Select.Option value="Games">Games</Select.Option>
          <Select.Option value="Finanças">Finanças</Select.Option>
          <Select.Option value="Saúde">Saúde</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="platform"
        label="Plataforma"
        rules={[{ required: true }]}
      >
        <Select placeholder="Selecione a plataforma">
          <Select.Option value="Android">Android</Select.Option>
          <Select.Option value="iOS">iOS</Select.Option>
          <Select.Option value="Multiplataforma">Multiplataforma</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="url"
        label="URL"
        rules={[{ required: true, type: "url" }]}
      >
        <Input placeholder="https://..." />
      </Form.Item>

      <Button type="primary" htmlType="submit" block loading={loading}>
        {initialValues ? "Atualizar Aplicativo" : "Cadastrar Aplicativo"}
      </Button>
    </Form>
  );
};
