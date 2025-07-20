import { Empty } from "antd";

type Props = {
  message?: string;
};

export const EmptyState = ({
  message = "Nenhum resultado encontrado",
}: Props) => {
  return <Empty description={message} className="my-12" />;
};
