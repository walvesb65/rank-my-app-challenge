import { Modal, Form, Input, Select } from "antd";
import { useEffect } from "react";
import type { App } from "@/core/entities/App";

const { Option } = Select;

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<App, "id">) => void;
  app: App | null;
}

export const AppEditModal = ({ open, onClose, onSave, app }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (app) {
      form.setFieldsValue(app);
    }
  }, [app, form]);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSave(values);
      onClose();
    });
  };

  return (
    <Modal
      title="Editar Aplicativo"
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      okText="Salvar"
      cancelText="Cancelar"
    >
      <Form layout="vertical" form={form}>
        <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Categoria"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="platform"
          label="Plataforma"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="Android">Android</Option>
            <Option value="iOS">iOS</Option>
          </Select>
        </Form.Item>
        <Form.Item name="url" label="URL" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
